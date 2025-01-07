import { useEffect } from "react";

export default function useMirrorStyles(
  original: React.RefObject<HTMLElement | null>,
  target: React.RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const originalStyles = window.getComputedStyle(original.current!);

    target.current!.style.border = originalStyles.border;
    target.current!.style.boxSizing = originalStyles.boxSizing;
    target.current!.style.fontFamily = originalStyles.fontFamily;
    target.current!.style.fontSize = originalStyles.fontSize;
    target.current!.style.fontWeight = originalStyles.fontWeight;
    target.current!.style.letterSpacing = originalStyles.letterSpacing;
    target.current!.style.lineHeight = originalStyles.lineHeight;
    target.current!.style.padding = originalStyles.padding;
    target.current!.style.textDecoration = originalStyles.textDecoration;
    target.current!.style.textIndent = originalStyles.textIndent;
    target.current!.style.textTransform = originalStyles.textTransform;
    target.current!.style.whiteSpace = originalStyles.whiteSpace;
    target.current!.style.wordSpacing = originalStyles.wordSpacing;
    target.current!.style.wordWrap = originalStyles.wordWrap;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
