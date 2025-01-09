export type TextAssertionKind = "word" | "start" | "end";

export type CharacterRange = "CapturingGroup" | "CharacterClass";

export type Group = "Group" | "CapturingGroup";

export type Quantifier = "Quantifier" | "Lazy";

export type RegexCharacter = "word" | "space" | "digit" | "property" | "any";

export type EscapeCharacter = "word" | "space" | "digit";

export type TopLabelKind =
  | "Group"
  | "CapturingGroup"
  | "CharacterClass"
  | "Lookahead"
  | "Lookbehind"
  | "Flags";

export type Flag =
  | "IgnoreCase"
  | "MultiLine"
  | "Global"
  | "SingleLine"
  | "Unicode";
