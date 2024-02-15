import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import * as ComboboxStories from "./Combobox.stories";
import { userEvent } from "@testing-library/user-event";

const { LongList: Combobox } = composeStories(ComboboxStories);

describe("Combobox", () => {
  test("renders an input element and a button", () => {
    render(<Combobox />);

    const input = screen.getByLabelText("States");
    const button = screen.getByRole("button", { name: "States" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("opens list on Button click", async () => {
    const user = userEvent.setup();
    render(<Combobox />);

    const button = screen.getByRole("button", { name: "States" });

    await user.click(button);

    const list = screen.getByRole("listbox", { name: "States" });

    expect(list).toBeInTheDocument();
  });

  test("opens list on user input click", async () => {
    const user = userEvent.setup();
    render(<Combobox />);

    const input = screen.getByLabelText("States");

    await user.type(input, "al");

    const list = screen.getByRole("listbox", { name: "States" });

    expect(list).toBeInTheDocument();
  });

  test("calls callback with selected option", async () => {
    const user = userEvent.setup();
    const callback = vi.fn();
    render(<Combobox onSelect={callback} />);

    const input = screen.getByLabelText("States");

    await user.type(input, "al");

    const listboxItem = screen.getByRole("option", { name: "Alabama" });

    await user.click(listboxItem);

    expect(callback).toHaveBeenCalledWith({
      id: "1",
      name: "Alabama",
    });
  });
});
