import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

import { ICON_CLASS_NAME } from "./const";
import type { FavoriteButtonProps } from "./type";

export const FavoriteButton = ({
  isFavorite,
  size,
  onClick,
  disabled,
  itemName,
}: FavoriteButtonProps) => {
  const buttonLabel = isFavorite
    ? `Remove ${itemName} from favorite`
    : `Add ${itemName} to favorite`;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="sr-only">{buttonLabel}</span>
      {isFavorite && <StarIconSolid className={ICON_CLASS_NAME({ isFavorite, size })} />}
      {!isFavorite && <StarIconOutline className={ICON_CLASS_NAME({ isFavorite, size })} />}
    </button>
  );
};
