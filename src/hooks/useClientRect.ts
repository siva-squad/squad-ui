import { useEffect, useRef, useState } from "react";

type ClientRectHookProps = {
  enabled: boolean;
};
export const useClientRect = ({ enabled }: ClientRectHookProps) => {
  const clientRectRef = useRef<HTMLDivElement>(null);
  const [rectState, setRectState] = useState({ y: 0, x: 0 });

  useEffect(() => {
    if (!clientRectRef.current) return;
    const rect = clientRectRef.current.getBoundingClientRect();
    setRectState(rect);
  }, [enabled]);

  return { clientRectRef, rectState };
};
