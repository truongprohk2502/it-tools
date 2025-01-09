import type { Character } from "regexpp/ast";
import type {
  CharacterRange,
  EscapeCharacter,
  Flag,
  TextAssertionKind,
  TopLabelKind,
} from "./types";

export const getTextAssertionHelper = (
  kind: TextAssertionKind,
  negate: boolean | undefined,
) => {
  switch (kind) {
    case "word":
      return {
        character: negate ? "\\B" : "\\b",
        label: negate ? "Not word boundary." : "Word boundary.",
        description: negate
          ? "Matches any position that is not a word boundary."
          : "Matches a word boundary position between a word character and non-word character or position (start / end of string).",
      };
    case "start":
      return {
        character: "^",
        label: "Beginning.",
        description:
          "Matches the beginning of the string, or the beginning of a line if the multiline flag (m) is enabled.",
      };
    case "end":
      return {
        character: "$",
        label: "End.",
        description:
          "Matches the end of the string, or the end of a line if the multiline flag (m) is enabled.",
      };
    default:
      return { character: "", label: "", description: "" };
  }
};

export const getCharacterRangeHelper = (min: Character, max: Character) => {
  const description = `Matches a character in the range "${min.raw}" to "${max.raw}" (char code ${min.value} to ${max.value}).`;
  return { description };
};

export const getCharacterHelper = (string: string, code: number) => {
  const label = string.startsWith("\\") ? "Escaped character." : "Character.";
  const description = string.startsWith("\\")
    ? `Matches a STX character (char code ${code}).`
    : `Matches a "${string}" character (char code ${code}).`;
  return { label, description };
};

export const getClosingTagHelper = (type: CharacterRange) => {
  switch (type) {
    case "CapturingGroup":
      return { label: ")", color: "text-green-500" };
    case "CharacterClass":
      return { label: "]", color: "text-red-500" };
    default:
      return { label: "", color: "" };
  }
};

export const getBackreferenceHelper = (value: string | number) => {
  const label =
    typeof value === "number" ? "Numeric reference." : "Named reference";
  const description = `Matches the results of capture group #${value}.`;
  return { label, description };
};

export const getUnicodeHelper = (value: string | null, negate: boolean) => {
  const character = `\\${negate ? "P" : "p"}{${value}}`;
  const label = negate ? "Not unicode category." : "Unicode category.";
  const description = negate
    ? `Matches any character that is not in the '${value}' unicode category.`
    : `Matches any character in the '${value}' unicode category.`;
  return { character, label, description };
};

export const getFlagHelper = (type: Flag) => {
  switch (type) {
    case "IgnoreCase":
      return {
        character: "i",
        label: "Case Insensitive.",
        description: "Case insensitive match (ignores case of [a-zA-Z])",
      };
    case "MultiLine":
      return {
        character: "m",
        label: "Multi Line.",
        description:
          "Causes ^ and $ to match the begin/end of each line (not only begin/end of string)",
      };
    case "Global":
      return {
        character: "g",
        label: "Global.",
        description: "All matches (don't return after first match)",
      };
    case "SingleLine":
      return {
        character: "s",
        label: "Single Line.",
        description: "Dot matches newline characters",
      };
    case "Unicode":
      return {
        character: "u",
        label: "Unicode.",
        description:
          "Pattern strings are treated as UTF-16. Also causes escape sequences to match unicode characters",
      };
    default:
      return { character: "", label: "", description: "" };
  }
};

export const getQuantifierHelper = ({
  min,
  max,
  greedy,
  value,
}: {
  min: number;
  max: number;
  greedy: boolean;
  value: string;
}) => {
  let character: string = "";
  let description: string = "";

  if (min === 0 && max === 1) {
    character = value.endsWith(greedy ? "?" : "??") ? "?" : "{0,1}";
    description = "Match between 0 and 1 of the preceding token.";
  } else if (min === 0 && !Number.isFinite(max)) {
    character = value.endsWith(greedy ? "*" : "*?") ? "*" : "{0,}";
    description = "Match 0 or more of the preceding token.";
  } else if (min === 1 && !Number.isFinite(max)) {
    character = value.endsWith(greedy ? "+" : "+?") ? "+" : "{1,}";
    description = "Match 1 or more of the preceding token.";
  } else if (min === max) {
    character = `{${min}}`;
    description = `Match ${min} of the preceding token.`;
  } else if (!Number.isFinite(max)) {
    character = `{${min},}`;
    description = `Match ${min} or more of the preceding token.`;
  } else {
    character = `{${min},${max}}`;
    description = `Match between ${min} and ${max} of the preceding token.`;
  }

  return { character, description };
};

export const getEscapeHelper = (
  kind: EscapeCharacter,
  negate: boolean | undefined,
) => {
  switch (kind) {
    case "word":
      return {
        character: negate ? "\\W" : "\\w",
        label: negate ? "Not word." : "Word.",
        description: negate
          ? "Matches any character that is not a word character (alphanumeric & underscore)."
          : "Matches any word character (alphanumeric & underscore).",
      };
    case "space":
      return {
        character: negate ? "\\S" : "\\s",
        label: negate ? "Not whitespace." : "Whitespace.",
        description: negate
          ? "Matches any character that is not a whitespace character (spaces, tabs, line breaks)."
          : "Matches any whitespace character (spaces, tabs, line breaks).",
      };
    case "digit":
      return {
        character: negate ? "\\D" : "\\d",
        label: negate ? "Not digit." : "Digit.",
        description: negate
          ? "Matches any character that is not a digit character (0-9)."
          : "Matches any digit character (0-9).",
      };
    default:
      return { character: "", label: "", description: "" };
  }
};

export const getTopLabelHelper = ({
  type,
  name,
  negate,
}: {
  type: TopLabelKind;
  name: string | null | undefined;
  negate: boolean | undefined;
}) => {
  switch (type) {
    case "Group":
      return {
        textColor: "text-green-500",
        character: "(?:",
        label: "Non-capturing group. ",
        description:
          "Groups multiple tokens together without creating a capture group.",
      };
    case "CapturingGroup":
      return {
        textColor: "text-green-500",
        character: "(" + (name ? `?<${name}>` : ""),
        label: name ? "Named capturing group. " : "Capturing group. ",
        description:
          "Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.",
      };
    case "CharacterClass":
      return {
        textColor: "text-red-500",
        character: negate ? "[^" : "[",
        label: negate ? "Negated set. " : "Character set. ",
        description: negate
          ? "Match any character that is not in the set."
          : "Match any character in the set.",
      };
    case "Lookahead":
      return {
        textColor: "text-pink-500",
        character: negate ? "(?!" : "(?=",
        label: negate ? "Negative lookahead. " : "Positive lookahead. ",
        description: negate
          ? "Specifies a group that can not match after the main expression (if it matches, the result is discarded)."
          : "Matches a group after the main expression without including it in the result.",
      };
    case "Lookbehind":
      return {
        textColor: "text-pink-500",
        character: negate ? "(?<!" : "(?<=",
        label: negate ? "Negative lookbehind. " : "Positive lookbehind. ",
        description: negate
          ? "Specifies a group that can not match before the main expression (if it matches, the result is discarded)."
          : "Matches a group before the main expression without including it in the result.",
      };
    case "Flags":
      return {
        textColor: "text-gray-500",
        character: "Flags",
        label: null,
        description:
          "Is an optional parameter to a regex that modifies its behavior of searching.",
      };
    default:
      return {
        textColor: "",
        character: "",
        label: "",
        description: "",
      };
  }
};
