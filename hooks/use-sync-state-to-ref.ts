import { type RefObject, useEffect, useRef } from "react";

const useSyncStateToRef = <T>(state: T): RefObject<T | null> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    ref.current = state;
  }, [state]);

  return ref;
};

export default useSyncStateToRef;
