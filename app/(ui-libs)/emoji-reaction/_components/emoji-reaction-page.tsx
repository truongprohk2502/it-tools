"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import {
  EmojiReaction,
  type EmojiReactionProps,
} from "@/components/ui-lib/emoji-reaction";
import { useState } from "react";
import { emojiReactionProperties } from "./constant";

const generateCode = (props: EmojiReactionProps) => `<EmojiReaction
  emojis={["😂", "😍", "😮", "🙌", "👍", "👎"]}
  disabled={${props.disabled}}
/>
`;

export default function EmojiReactionPage() {
  const [emojiReactionProps, setEmojiReactionProps] =
    useState<EmojiReactionProps>({
      emojis: ["😂", "😍", "😮", "🙌", "👍", "👎"],
      disabled: false,
    });

  return (
    <div>
      <UIComponent
        title="EmojiReaction"
        code={generateCode(emojiReactionProps)}
      >
        <EmojiReaction {...emojiReactionProps} className="w-fit" />
      </UIComponent>
      <UIDocs<EmojiReactionProps>
        fields={emojiReactionProperties}
        fieldState={emojiReactionProps}
        onChange={setEmojiReactionProps}
      />
    </div>
  );
}
