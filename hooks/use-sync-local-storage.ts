import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

const useSyncLocalStorage = <T>(
  key: string,
  init: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [storageState, setStorageState] = useLocalStorage<T>(key);

  const [state, setState] = useState<T>(storageState as T);

  useEffect(() => {
    setStorageState(state);
  }, [state]);

  return [state || init, setState];
};

export default useSyncLocalStorage;
