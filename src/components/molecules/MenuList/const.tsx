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
  "folder",
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
        id: "folder",
        icon: <FolderIconOutline />,
        selectedIcon: <FolderIconSolid />,
        description: "",
        title: "フォルダ",
        href: "",
        hasChevron: false,
      },
      {
        id: "cvtag",
        icon: <CVTag />,
        selectedIcon: <CVTagFilled />,
        description: "必ず使うタグを事前設置。設定漏れ防止",
        title: "一括タグ",
        href: "",
        hasChevron: false,
      },
      {
        id: "replacement",
        icon: <ArrowPathIconOutline />,
        selectedIcon: <ArrowPathIconSolid />,
        description: "ページを横断して画像やURLを一括置換",
        title: "マジック置換",
        href: "",
        hasChevron: false,
      },
      {
        id: "media",
        icon: <SwatchIconOutline />,
        selectedIcon: <SwatchIconSolid />,
        description: "LPに検索窓や検索候補を簡単に設置",
        title: "メディア",
        href: "",
        hasChevron: false,
      },
      {
        id: "inspection",
        icon: <ShieldCheckIconOutline />,
        selectedIcon: <ShieldCheckIconSolid />,
        description: "審査が通過したLPだけを表示可能に",
        title: "審査",
        href: "",
        hasChevron: false,
      },
      {
        id: "form",
        icon: <ClipboardDocumentIconOutline />,
        selectedIcon: <ClipboardDocumentIconSolid />,
        description: "申し込みフォームを利用し顧客を増やす",
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
        description: "広告管理画面の数値を取得できます",
        href: "",
        hasChevron: false,
      },
      {
        id: "cv-measurement",
        title: "CV計測連携",
        description: "ECカートやCRMのCV数を表示できます",
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
        description: "作業するチームを選択できます。",
        href: "",
        hasChevron: false,
      },
      {
        id: "role",
        title: "招待/権限",
        description: "チームメンバーを管理できます",
        href: "",
        hasChevron: false,
      },
      {
        id: "user-settings",
        title: "ユーザー設定",
        description: "お客様自身の情報を確認・変更できます",
        href: "",
        hasChevron: false,
      },
      {
        id: "plans",
        title: "プラン",
        description: "ご利用中のプラン料金を確認できます",
        href: "",
        hasChevron: false,
      },
      {
        id: "payments",
        title: "支払い管理",
        description: "お支払い情報を確認・変更",
        href: "",
        hasChevron: false,
      },
      {
        id: "bonus",
        title: "特典",
        description: "ご紹介キャッシュバック等の特典があります",
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
