import { composeStories } from "@storybook/react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, vi } from "vitest";

import * as AvatarStories from "./Avatar.stories";

const { Default: Avatar, UnClickable: AvatarNoClick } = composeStories(AvatarStories);

const mockSrc = "https://example.com/avatar.png";

describe("Avatar", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders without error", () => {
    render(<Avatar />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("renders without error when onClick is not provided", () => {
    render(<AvatarNoClick />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("renders with correct size", () => {
    const size = 50;
    render(<Avatar size={size} />);
    const avatarButton = screen.getByRole("button");
    expect(avatarButton).toHaveStyle(`height: ${size}px`);
    expect(avatarButton).toHaveStyle(`width: ${size}px`);
  });

  test("renders FullUserCircleIcon when src is not provided", () => {
    render(<Avatar />);
    expect(screen.getByTestId("full-user-circle-icon")).toBeInTheDocument();
  });

  test("renders FullUserCircleIcon when isError is true", () => {
    render(<Avatar src={mockSrc} />);
    fireEvent.error(screen.getByRole("img"));
    expect(screen.getByTestId("full-user-circle-icon")).toBeInTheDocument();
  });

  test("renders img when src is provided", () => {
    render(<Avatar src={mockSrc} />);
    const avatarImg = screen.getByAltText("avatar");
    expect(avatarImg).toBeInTheDocument();
    expect(avatarImg).toHaveAttribute("src", mockSrc);
  });

  test("calls onClick when button is clicked", async () => {
    const onClick = vi.fn();
    render(<Avatar onClick={onClick} />);
    const avatarButton = screen.getByRole("button");
    await userEvent.click(avatarButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
