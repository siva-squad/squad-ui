import { ReactElement, ReactNode } from "react";
import {
  ArrowPathIcon,
  ClipboardDocumentIcon,
  FolderIcon,
  ShieldCheckIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

// MenuItemsの型の配列
type ItemType = {
  id: string;
  icon?: ReactElement;
  description?: string;
  title: string;
  children?: ReactNode;
};
type MenuListType = "beyond" | "connection" | "account";
type MenuNavigationType = { groupId: MenuListType; items: ItemType[] }[];

export const MENU_NAVIGATION: MenuNavigationType = [
  {
    groupId: "beyond",
    items: [
      {
        id: "1",
        icon: <FolderIcon />,
        description: "descriptionTextが入ります",
        title: "テキスト",
      },
      {
        id: "2",
        icon: <FolderIcon />,
        description: "descriptionTextが入ります",
        title: "一括タグ",
      },
      {
        id: "3",
        icon: <ArrowPathIcon />,
        description: "descriptionTextが入ります",
        title: "マジック置換",
      },
      {
        id: "4",
        icon: <SwatchIcon />,
        description: "descriptionTextが入ります",
        title: "メディア",
      },
      {
        id: "5",
        icon: <ShieldCheckIcon />,
        description: "descriptionTextが入ります",
        title: "審査",
      },
      {
        id: "6",
        icon: <ClipboardDocumentIcon />,
        description: "descriptionTextが入ります",
        title: "フォーム",
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
      },
      {
        id: "2",
        title: "CV計測連携",
        description: "descriptionTextが入ります",
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
      },
      {
        id: "2",
        title: "招待/権限",
        description: "descriptionTextが入ります",
      },
      {
        id: "3",
        title: "ユーザー設定",
        description: "descriptionTextが入ります",
      },
      {
        id: "4",
        title: "プラン",
        description: "descriptionTextが入ります",
      },
      {
        id: "5",
        title: "支払い管理",
        description: "descriptionTextが入ります",
      },
      {
        id: "6",
        title: "特典",
        description: "descriptionTextが入ります",
      },
      {
        id: "7",
        title: "その他",
        children: <></>,
      },
    ],
  },
];
