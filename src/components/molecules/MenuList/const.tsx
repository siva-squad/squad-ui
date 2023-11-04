import { ReactNode } from "react";
import { CVTag } from "@assets/icons";
import { ListItemProps } from "@atoms/ListItem/type";
import { ListItem } from "@components/atoms/ListItem";
import {
  ArrowPathIcon as ArrowPathIconOutline,
  ClipboardDocumentIcon as ClipboardDocumentIconOutline,
  FolderIcon as FolderIconOutline,
  ShieldCheckIcon as ShieldCheckIconOutline,
  SwatchIcon as SwatchIconOutline,
} from "@heroicons/react/24/outline";
import {
  FolderIcon as FolderIconSolid,
  ArrowPathIcon as ArrowPathIconSolid,
  SwatchIcon as SwatchIconSolid,
  ShieldCheckIcon as ShieldCheckIconSolid,
  ClipboardDocumentIcon as ClipboardDocumentIconSolid,
} from "@heroicons/react/24/solid";
import type { MenuListTypeKey } from "@molecules/MenuList";
import { OTHERS_NAVIGATION } from "../ListItemDropDown/const";
import { MergeType } from "@/src/utils/type-utils";

type MenuNavigationType = {
  groupId: MenuListTypeKey;
  items: MergeType<ListItemProps, { children?: ReactNode }>[];
}[];

export const MENU_NAVIGATION: MenuNavigationType = [
  {
    groupId: "default",
    items: [],
  },
  {
    groupId: "beyond",
    items: [
      {
        id: "1",
        icon: <FolderIconOutline />,
        selectedIcon: <FolderIconSolid />,
        description: "descriptionTextが入ります",
        title: "テキスト",
        href: "",
        hasChevron: false,
      },
      {
        id: "2",
        icon: <CVTag />,
        description: "descriptionTextが入ります",
        title: "一括タグ",
        href: "",
        hasChevron: false,
      },
      {
        id: "3",
        icon: <ArrowPathIconOutline />,
        selectedIcon: <ArrowPathIconSolid />,
        description: "descriptionTextが入ります",
        title: "マジック置換",
        href: "",
        hasChevron: false,
      },
      {
        id: "4",
        icon: <SwatchIconOutline />,
        selectedIcon: <SwatchIconSolid />,
        description: "descriptionTextが入ります",
        title: "メディア",
        href: "",
        hasChevron: false,
      },
      {
        id: "5",
        icon: <ShieldCheckIconOutline />,
        selectedIcon: <ShieldCheckIconSolid />,
        description: "descriptionTextが入ります",
        title: "審査",
        href: "",
        hasChevron: false,
      },
      {
        id: "6",
        icon: <ClipboardDocumentIconOutline />,
        selectedIcon: <ClipboardDocumentIconSolid />,
        description: "descriptionTextが入ります",
        title: "フォーム",
        href: "",
        hasChevron: false,
      },
    ],
  },
  {
    groupId: "connection",
    items: [
      {
        id: "1",
        title: "広告媒体連携",
        description: "descriptionTextが入ります",
        href: "",
        hasChevron: false,
      },
      {
        id: "2",
        title: "CV計測連携",
        description: "descriptionTextが入ります",
        href: "",
        hasChevron: false,
      },
    ],
  },
  {
    groupId: "account",
    items: [
      {
        id: "1",
        title: "所属チーム",
        description: "descriptionTextが入ります",
        href: "",
        hasChevron: false,
      },
      {
        id: "2",
        title: "招待/権限",
        description: "descriptionTextが入ります",
        href: "",
        hasChevron: false,
      },
      {
        id: "3",
        title: "ユーザー設定",
        description: "descriptionTextが入ります",
        href: "",
        hasChevron: false,
      },
      {
        id: "4",
        title: "プラン",
        description: "descriptionTextが入ります",
        href: "",
        hasChevron: false,
      },
      {
        id: "5",
        title: "支払い管理",
        description: "descriptionTextが入ります",
        href: "",
        hasChevron: false,
      },
      {
        id: "6",
        title: "特典",
        description: "descriptionTextが入ります",
        href: "",
        hasChevron: false,
      },
      {
        id: "7",
        title: "その他",
        href: "",
        children: (
          <div className="mt-4 flex flex-col gap-y-2 pl-4">
            {OTHERS_NAVIGATION.map((nav) => (
              <ListItem
                {...nav}
                key={nav.id}
              />
            ))}
          </div>
        ),
      },
      {
        id: "8",
        title: "ログアウト",
        hasChevron: false,
        theme: "red",
        onClick: () => {},
      },
    ],
  },
];
