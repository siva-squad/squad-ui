import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

import { ICON_CLASS_NAME } from "./const";
import type { FavoriteButtonProps } from "./type";

export const FavoriteButton = ({
  isFavorite,
  size,
  onClick,
  disabled = false,
  ariaLabel,
}: FavoriteButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {isFavorite && <StarIconSolid className={ICON_CLASS_NAME({ isFavorite, size, disabled })} />}
      {!isFavorite && (
        <StarIconOutline className={ICON_CLASS_NAME({ isFavorite, size, disabled })} />
      )}
    </button>
  );
};
