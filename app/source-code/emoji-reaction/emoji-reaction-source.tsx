import UISourceCode from "../_components/ui-source-code";
import {
  emojiReactionComponentCode,
  emojiReactionTailwindCode,
} from "./constant";

export default function EmojiReactionSource() {
  return (
    <UISourceCode
      component="EmojiReaction"
      steps={[
        {
          title: "Step 1: Create Tailwind configs",
          sourceCode: emojiReactionTailwindCode,
        },
        {
          title: "Step 2: Create EmojiReaction component",
          sourceCode: emojiReactionComponentCode,
        },
      ]}
    />
  );
}
