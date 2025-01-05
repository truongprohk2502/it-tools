import { RefObject, useEffect } from "react";

const defaultEvents = ["mousedown", "touchstart"];
type DefaultEventType = "mousedown" | "touchstart";

const useClickAway = (
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: MouseEvent | TouchEvent) => void,
) => {
  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      const el = ref.current!;
      el && !el.contains(event.target as HTMLElement) && onClickAway(event);
    };

    for (const eventName of defaultEvents) {
      document.addEventListener(eventName as DefaultEventType, handler);
    }

    return () => {
      for (const eventName of defaultEvents) {
        document.removeEventListener(eventName as DefaultEventType, handler);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
};

export default useClickAway;
