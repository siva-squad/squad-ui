import { Logo } from "@assets/logo";

type BrandLogoProps = {
  href?: string;
  height?: number;
  width?: number;
};
export const BrandLogo = ({ href = "/", width = 40, height = 40 }: BrandLogoProps) => {
  return (
    <div className="w-fit">
      <a href={href}>
        <Logo
          height={height}
          width={width}
        />
      </a>
    </div>
  );
};
