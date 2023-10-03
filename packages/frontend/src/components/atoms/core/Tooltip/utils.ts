import { Direction, Position } from "./type";

function getDirectionClass(direction: Direction): string {
  switch (direction) {
    case "bottom":
      return "-bottom-1";
    case "top":
      return "-top-1 rotate-180";
    case "left":
      return "left-[-7px] rotate-90";
    case "right":
      return "right-[-7px] -rotate-90";
  }
}
function getPositionClass(position: Position): string {
  switch (position) {
    case "center":
      return "";
    case "left":
      return "left-1/4";
    case "right":
      return "right-1/4";
  }
}

export { getDirectionClass, getPositionClass };
