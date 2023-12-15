import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import * as FavoriteButtonStories from "./FavoriteButton.stories";

const { Default: FavoriteButton } = composeStories(FavoriteButtonStories);

describe("FavoriteButton", () => {
  test("renders", async () => {
    render(<FavoriteButton />);

    const button = screen.getByRole("button", { name: "フォルダ１をお気に入りに追加" });

    expect(button).toBeInTheDocument();
  });

  test("has different label when isFavorite is true", async () => {
    render(<FavoriteButton isFavorite={true} />);

    const button = screen.getByRole("button", { name: "フォルダ１をお気に入りから削除" });

    expect(button).toBeInTheDocument();
  });

  test("calls callback function on button click", async () => {
    const mock = vi.fn();
    render(<FavoriteButton onClick={mock} />);

    const button = screen.getByRole("button", { name: "フォルダ１をお気に入りに追加" });

    await userEvent.click(button);

    expect(mock).toHaveBeenCalled();
  });

  test("has disabled as an attribute when passed as props", () => {
    render(<FavoriteButton disabled={true} />);

    const button = screen.getByRole("button", { name: "フォルダ１をお気に入りに追加" });

    expect(button).toHaveAttribute("disabled");
  });
});
