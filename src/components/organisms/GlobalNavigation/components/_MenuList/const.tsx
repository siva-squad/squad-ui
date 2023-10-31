import {
  ArrowPathIcon,
  ClipboardDocumentIcon,
  FolderIcon,
  ShieldCheckIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import { ListItemProps } from "../../../../atoms/ListItem/type";
import { MenuListType } from "../../type";

type MenuNavigationType = { groupId: MenuListType; items: ListItemProps[] }[];

export const MENU_NAVIGATION: MenuNavigationType = [
  {
    groupId: "beyond",
    items: [
      {
        id: "1",
        icon: <FolderIcon />,
        description: "descriptionTextが入ります",
        title: "テキスト",
        href: "",
      },
      {
        id: "2",
        icon: <FolderIcon />,
        description: "descriptionTextが入ります",
        title: "一括タグ",
        href: "",
      },
      {
        id: "3",
        icon: <ArrowPathIcon />,
        description: "descriptionTextが入ります",
        title: "マジック置換",
        href: "",
      },
      {
        id: "4",
        icon: <SwatchIcon />,
        description: "descriptionTextが入ります",
        title: "メディア",
        href: "",
      },
      {
        id: "5",
        icon: <ShieldCheckIcon />,
        description: "descriptionTextが入ります",
        title: "審査",
        href: "",
      },
      {
        id: "6",
        icon: <ClipboardDocumentIcon />,
        description: "descriptionTextが入ります",
        title: "フォーム",
        href: "",
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
      },
      {
        id: "2",
        title: "CV計測連携",
        description: "descriptionTextが入ります",
        href: "",
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
      },
      {
        id: "2",
        title: "招待/権限",
        description: "descriptionTextが入ります",
        href: "",
      },
      {
        id: "3",
        title: "ユーザー設定",
        description: "descriptionTextが入ります",
        href: "",
      },
      {
        id: "4",
        title: "プラン",
        description: "descriptionTextが入ります",
        href: "",
      },
      {
        id: "5",
        title: "支払い管理",
        description: "descriptionTextが入ります",
        href: "",
      },
      {
        id: "6",
        title: "特典",
        description: "descriptionTextが入ります",
        href: "",
      },
      {
        id: "7",
        title: "その他",
        href: "",
      },
    ],
  },
];
