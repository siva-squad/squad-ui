import { composeStories } from "@storybook/react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, test, vi } from "vitest";

import * as BaseModalStories from "./BaseModal.stories";

const { Default: BaseModal, Controlled } = composeStories(BaseModalStories);

describe("BaseModal", () => {
  test("renders", () => {
    render(<BaseModal />);
    const modal = screen.getByRole("dialog", { name: "Modal" });
    expect(modal).toBeInTheDocument();
  });

  test("renders not as a decendent of root div", () => {
    render(<BaseModal />);
    const rootDiv = screen.getByTestId("root");
    const modal = within(rootDiv).queryByRole("dialog", { name: "Modal" });
    expect(modal).not.toBeInTheDocument();
  });

  test("calls close modal callback function when clicking on the background", async () => {
    const user = userEvent.setup();
    const closeModalCallback = vi.fn();
    render(<BaseModal onCloseModal={closeModalCallback} />);

    const background = screen.getByTestId("modal-background");

    await user.click(background);

    expect(closeModalCallback).toHaveBeenCalled();
  });

  test("in context with button and state", async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    expect(screen.queryByRole("dialog", { name: "Modal" })).not.toBeInTheDocument();

    const openModalButton = screen.getByRole("button", { name: "Open Modal" });

    await user.click(openModalButton);

    const modal = screen.getByRole("dialog", { name: "Base Modal example" });

    expect(modal).toBeInTheDocument();
  });
});
