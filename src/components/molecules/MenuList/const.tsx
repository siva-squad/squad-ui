import { CVTag, CVTagFilled } from "@assets/icons";
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
import type {
  MenuListProps,
  MenuNavigationItemProps,
  MenuNavigationType,
} from "@molecules/MenuList";

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
  "faq",
  "terms",
  "policy",
  "admin",
] as const;

export const OTHERS_NAVIGATION = [
  {
    id: "faq",
    title: "FAQ",

    hasChevron: false,
  },
  {
    id: "terms",
    title: "利用規約",

    hasChevron: false,
  },
  {
    id: "policy",
    title: "プライバシーポリシー",

    hasChevron: false,
  },
  {
    id: "admin",
    title: "Admin",

    hasChevron: false,
  },
] as const satisfies MenuNavigationItemProps[];

export const MENU_NAVIGATION = ({
  onClick = () => {},
}: Pick<MenuListProps, "onClick">): MenuNavigationType => [
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
        description: "ページの制作・設定・管理等はコチラから",
        title: "フォルダ",
        href: "",
        hasChevron: false,
        onClick: () => onClick("folder"),
      },
      {
        id: "cvtag",
        icon: <CVTag />,
        selectedIcon: <CVTagFilled />,
        description: "必ず使うタグを事前設置。設定漏れ防止",
        title: "一括タグ",
        href: "",
        hasChevron: false,
        onClick: () => onClick("cvtag"),
      },
      {
        id: "replacement",
        icon: <ArrowPathIconOutline />,
        selectedIcon: <ArrowPathIconSolid />,
        description: "ページを横断して画像やURLを一括置換",
        title: "マジック置換",
        href: "",
        hasChevron: false,
        onClick: () => onClick("replacement"),
      },
      {
        id: "media",
        icon: <SwatchIconOutline />,
        selectedIcon: <SwatchIconSolid />,
        description: "LPに検索窓や検索候補を簡単に設置",
        title: "メディア",
        href: "",
        hasChevron: false,
        onClick: () => onClick("media"),
      },
      {
        id: "inspection",
        icon: <ShieldCheckIconOutline />,
        selectedIcon: <ShieldCheckIconSolid />,
        description: "審査が通過したLPだけを表示可能に",
        title: "審査",
        href: "",
        hasChevron: false,
        onClick: () => onClick("inspection"),
      },
      {
        id: "form",
        icon: <ClipboardDocumentIconOutline />,
        selectedIcon: <ClipboardDocumentIconSolid />,
        description: "申し込みフォームを利用し顧客を増やす",
        title: "フォーム",
        href: "",
        hasChevron: false,
        onClick: () => onClick("form"),
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
        onClick: () => onClick("ad"),
      },
      {
        id: "cv-measurement",
        title: "CV計測連携",
        description: "ECカートやCRMのCV数を表示できます",
        href: "",
        hasChevron: false,
        onClick: () => onClick("cv-measurement"),
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
        onClick: () => onClick("team"),
      },
      {
        id: "role",
        title: "招待/権限",
        description: "チームメンバーを管理できます",
        href: "",
        hasChevron: false,
        onClick: () => onClick("role"),
      },
      {
        id: "user-settings",
        title: "ユーザー設定",
        description: "お客様自身の情報を確認・変更できます",
        href: "",
        hasChevron: false,
        onClick: () => onClick("user-settings"),
      },
      {
        id: "plans",
        title: "プラン",
        description: "ご利用中のプラン料金を確認できます",
        href: "",
        hasChevron: false,
        onClick: () => onClick("plans"),
      },
      {
        id: "payments",
        title: "支払い管理",
        description: "お支払い情報を確認・変更",
        href: "",
        hasChevron: false,
        onClick: () => onClick("payments"),
      },
      {
        id: "bonus",
        title: "特典",
        description: "ご紹介キャッシュバック等の特典があります",
        href: "",
        hasChevron: false,
        onClick: () => onClick("bonus"),
      },
      {
        id: "others",
        title: "その他",
        href: "",
        children: (
          <div className="mt-4 flex flex-col gap-y-2 pl-4">
            {OTHERS_NAVIGATION.map((nav) => (
              <ListItem
                {...{ ...nav, onClick: () => onClick(nav.id) }}
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
