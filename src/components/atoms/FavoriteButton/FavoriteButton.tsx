import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

import { ICON_CLASS_NAME } from "./const";
import type { FavoriteButtonProps } from "./type";

export const FavoriteButton = ({
  isFavorite,
  size,
  onClick,
  disabled = false,
  itemName,
}: FavoriteButtonProps) => {
  const buttonLabel = isFavorite
    ? `${itemName}をお気に入りから削除`
    : `${itemName}をお気に入りに追加`;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="sr-only">{buttonLabel}</span>
      {isFavorite && <StarIconSolid className={ICON_CLASS_NAME({ isFavorite, size, disabled })} />}
      {!isFavorite && (
        <StarIconOutline className={ICON_CLASS_NAME({ isFavorite, size, disabled })} />
      )}
    </button>
  );
};
