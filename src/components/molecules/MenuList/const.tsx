import { ReactNode } from "react";
import { CVTag, CVTagFilled } from "@assets/icons";
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

export const MENU_NAVIGATION_KEYS = [
  "default",
  "beyond",
  "cvtag",
  "replacement",
  "media",
  "inspection",
  "form",
  "ad",
  "cv-measurement",
  "team",
  "role",
  "user-settings",
  "plans",
  "payments",
  "bonus",
  "others",
  "logout",
] as const;

export type MenuKindKey = (typeof MENU_NAVIGATION_KEYS)[number];

type MenuNavigationItemProps = Omit<ListItemProps, "id"> & { id: MenuKindKey };
type MenuNavigationType = {
  groupId: MenuListTypeKey;
  items: MergeType<MenuNavigationItemProps, { children?: ReactNode }>[];
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
        id: "default",
        icon: <FolderIconOutline />,
        selectedIcon: <FolderIconSolid />,
        description: "descriptionTextが入ります",
        title: "テキスト",
        href: "",
        hasChevron: false,
      },
      {
        id: "cvtag",
        icon: <CVTag />,
        selectedIcon: <CVTagFilled />,
        description: "descriptionTextが入ります",
        title: "一括タグ",
        href: "",
        hasChevron: false,
      },
      {
        id: "replacement",
        icon: <ArrowPathIconOutline />,
        selectedIcon: <ArrowPathIconSolid />,
        description: "descriptionTextが入ります",
        title: "マジック置換",
        href: "",
        hasChevron: false,
      },
      {
        id: "media",
        icon: <SwatchIconOutline />,
        selectedIcon: <SwatchIconSolid />,
        description: "descriptionTextが入ります",
        title: "メディア",
        href: "",
        hasChevron: false,
      },
      {
        id: "inspection",
        icon: <ShieldCheckIconOutline />,
        selectedIcon: <ShieldCheckIconSolid />,
        description: "descriptionTextが入ります",
        title: "審査",
        href: "",
        hasChevron: false,
      },
      {
        id: "form",
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
        id: "ad",
        title: "広告媒体連携",
        description: "descriptionTextが入ります",
        href: "",
        hasChevron: false,
      },
      {
        id: "cv-measurement",
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
        id: "team",
        title: "所属チーム",
        description: "descriptionTextが入ります",
        href: "",
        hasChevron: false,
      },
      {
        id: "role",
        title: "招待/権限",
        description: "descriptionTextが入ります",
        href: "",
        hasChevron: false,
      },
      {
        id: "user-settings",
        title: "ユーザー設定",
        description: "descriptionTextが入ります",
        href: "",
        hasChevron: false,
      },
      {
        id: "plans",
        title: "プラン",
        description: "descriptionTextが入ります",
        href: "",
        hasChevron: false,
      },
      {
        id: "payments",
        title: "支払い管理",
        description: "descriptionTextが入ります",
        href: "",
        hasChevron: false,
      },
      {
        id: "bonus",
        title: "特典",
        description: "descriptionTextが入ります",
        href: "",
        hasChevron: false,
      },
      {
        id: "others",
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
        id: "logout",
        title: "ログアウト",
        hasChevron: false,
        theme: "red",
        onClick: () => {},
      },
    ],
  },
];
