import { MenuKindKey } from "@components/molecules/MenuList/type";
import { RichMenuDescriptionProps } from "@components/molecules/RichMenuDescription/type";

export const DESCRIPTIONS: ({ id: MenuKindKey } & RichMenuDescriptionProps)[] = [
  {
    id: "cvtag",
    headingText: "チームやフォルダ、好きな範囲で事前に設置",
    description:
      "チーム・フォルダグループ・フォルダ・ページ・お好きな範囲でタグを事前設置。計測タグだけでなく、metaタグの追加も。PR表記や運営者情報など、絶対必要だけど忘れがちな情報を事前に設置して効率化を実現",
    imgSrc: "https://placehold.jp/1920x1080.png",
    faqLink: "#",
  },
  {
    id: "replacement",
    headingText: "100ページ分のコンテンツも、1分で置換",
    description: "版権変更や、規約変更時など、過去まで遡ってすべてのページのコンテンツを一括置換",
    imgSrc: "https://placehold.jp/1920x1080.png",
    faqLink: "#",
  },
  {
    id: "media",
    headingText: "Google広告の必須機能を5分で作成",
    description: "エンジニアや外注を使わず、すぐに作成と改修が可能に。",
    imgSrc: "https://placehold.jp/1920x1080.png",
    faqLink: "#",
  },
  {
    id: "inspection",
    headingText: "広告主や代理店のページ表示を完全に管理",
    description: "審査後のLP変更や、禁止コンテンツが配信されることを完全に防げます",
    imgSrc: "https://placehold.jp/1920x1080.png",
    faqLink: "#",
  },
  {
    id: "form",
    headingText: "バナーやページごとに見込み客を獲得・管理",
    description: "",
    imgSrc: "https://placehold.jp/1920x1080.png",
    faqLink: "#",
  },
];
