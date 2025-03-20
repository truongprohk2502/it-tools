export interface EmojiReactionProps {
  emojis: string[];
  disabled?: boolean;
  className?: string;
}

export interface CurrentEmoji {
  emoji: string;
  id: number;
}
