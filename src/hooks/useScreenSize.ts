import { useState, useEffect } from "react";

const BREAKPOINT = 480;

export type ScreenUtilProps = {
  width: number;
  height: number;
  isPC: boolean;
  isSP: boolean;
  media: "pc" | "sp";
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
    isPC: screenSize.width > breakpoint,
    isSP: screenSize.width <= breakpoint,
    media: screenSize.width > breakpoint ? "pc" : "sp",
  };
};
