import { useEffect, useState } from "react";

interface Props {
  delay: number;
}

export default function useDomLoaded({ delay }: Props = { delay: 0 }) {
  const [domLoaded, setDomLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (delay) setTimeout(() => setDomLoaded(true), delay);
    else setDomLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return domLoaded;
}
