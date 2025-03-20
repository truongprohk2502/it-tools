"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import type { CurrentEmoji, EmojiReactionProps } from "./emoji-reaction.types";

const EmojiReaction: React.FC<EmojiReactionProps> = ({
  emojis,
  disabled,
  className,
}) => {
  const [currentEmoji, setCurrentEmoji] = useState<CurrentEmoji | null>(null);

  const clearEmojiTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const timeout = clearEmojiTimeout.current;

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  const handleEmojiClick = (emoji: string) => {
    if (clearEmojiTimeout.current) clearTimeout(clearEmojiTimeout.current);

    setCurrentEmoji({ emoji, id: Date.now() });

    clearEmojiTimeout.current = setTimeout(() => {
      setCurrentEmoji(null);
    }, 3000);
  };

  return (
    <div
      className={cn(
        "mx-auto rounded-full border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-500",
        className,
      )}
    >
      <div className="grid items-center justify-start">
        <div className="p-2">
          <div className="grid grid-flow-col items-center justify-start">
            {emojis.map((emoji) => (
              <div key={emoji} className="relative w-fit">
                <button
                  className={cn(
                    "transition-bg-color duration-600 relative inline-flex items-center justify-center rounded-full bg-transparent p-1 align-middle text-2xl leading-6 ease-in-out active:duration-0",
                    {
                      "hover:bg-gray-200 active:bg-gray-400": !disabled,
                    },
                  )}
                  disabled={disabled}
                  onClick={() => handleEmojiClick(emoji)}
                >
                  {emoji}
                  {currentEmoji && currentEmoji.emoji === emoji && (
                    <span
                      key={currentEmoji.id}
                      className="animate-fly-emoji duration-3000 absolute -top-10 left-0 right-0 mx-auto"
                    >
                      {currentEmoji.emoji}
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmojiReaction;
