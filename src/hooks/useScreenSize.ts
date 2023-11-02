import { useState, useEffect } from "react";

const BREAKPOINT = 700;

export type ScreenUtilProps = {
  width: number;
  height: number;
  isDesktop: boolean;
  isMobile: boolean;
  media: "desktop" | "mobile";
};

export const useScreenSize = (breakpoint = BREAKPOINT): ScreenUtilProps => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    ...screenSize,
    isDesktop: screenSize.width > breakpoint,
    isMobile: screenSize.width <= breakpoint,
    media: screenSize.width > breakpoint ? "desktop" : "mobile",
  };
};
