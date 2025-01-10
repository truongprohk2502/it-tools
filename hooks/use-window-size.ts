import { useEffect, useState } from "react";

type Size = {
  width: number;
  height: number;
};

export default function useWindowSize() {
  const [state, setState] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    const handler = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handler();

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return state;
}
