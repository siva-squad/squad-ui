import { composeStories } from "@storybook/react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { describe, expect, test, vi } from "vitest";

import * as DialogStories from "./Dialog.stories";

const { Default: Dialog, Controlled } = composeStories(DialogStories);

describe("Dialog", () => {
  test("renders", () => {
    render(<Dialog />);
    const dialog = screen.getByRole("dialog", { name: "Dialog" });
    expect(dialog).toBeInTheDocument();
  });

  test("renders not as a decendent of root div", () => {
    render(<Dialog />);
    const rootDiv = screen.getByTestId("root");
    const dialog = within(rootDiv).queryByRole("dialog", { name: "Dialog" });
    expect(dialog).not.toBeInTheDocument();
  });

  test("does not render when isOpen prop is false", () => {
    render(<Dialog isOpen={false} />);
    const dialog = screen.queryByRole("dialog", { name: "Dialog" });
    expect(dialog).not.toBeInTheDocument();
  });

  test("calls close dialog callback function when clicking on the background", async () => {
    const user = userEvent.setup();
    const closeDialogCallback = vi.fn();
    render(<Dialog cancelButtonProps={{ onClose: closeDialogCallback, text: "" }} />);

    const background = screen.getByTestId("dialog-background");

    await user.click(background);

    expect(closeDialogCallback).toHaveBeenCalled();
  });

  test("calls close dialog callback function when clicking on cancel button", async () => {
    const user = userEvent.setup();
    const closeDialogCallback = vi.fn();
    render(<Dialog cancelButtonProps={{ onClose: closeDialogCallback, text: "キャンセル" }} />);

    const cancelButton = screen.getByRole("button", { name: "キャンセル" });

    await user.click(cancelButton);

    expect(closeDialogCallback).toHaveBeenCalled();
  });

  test("calls save dialog callback function when clicking on save button", async () => {
    const user = userEvent.setup();
    const saveDialogCallback = vi.fn();
    render(<Dialog saveButtonProps={{ onSave: saveDialogCallback, text: "保存する" }} />);

    const saveButton = screen.getByRole("button", { name: "保存する" });

    await user.click(saveButton);

    expect(saveDialogCallback).toHaveBeenCalled();
  });

  test("in context with button and state", async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    expect(screen.queryByRole("dialog", { name: "Dialog" })).not.toBeInTheDocument();

    const openDialogButton = screen.getByRole("button", { name: "Open dialog" });

    await user.click(openDialogButton);

    const dialog = screen.getByRole("dialog", { name: "Base Dialog example" });

    expect(dialog).toBeInTheDocument();
  });
});
