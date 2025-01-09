"use client";

import { cn } from "@/lib/utils";
import { useCallback } from "react";
import {} from "regexpp";
import {
  Alternative,
  CapturingGroup,
  Character,
  CharacterClassElement,
  Element,
  Flags,
  Node,
  QuantifiableElement,
  RegExpLiteral,
  UnicodePropertyCharacterSet,
  WordBoundaryAssertion,
} from "regexpp/ast";
import {
  getBackreferenceHelper,
  getCharacterHelper,
  getCharacterRangeHelper,
  getClosingTagHelper,
  getEscapeHelper,
  getFlagHelper,
  getQuantifierHelper,
  getTextAssertionHelper,
  getTopLabelHelper,
  getUnicodeHelper,
} from "../helpers";
import type {
  CharacterRange,
  EscapeCharacter,
  Flag,
  Group,
  Quantifier,
  RegexCharacter,
  TextAssertionKind,
  TopLabelKind,
} from "../types";

const commonClassNames = ["border", "!border-l-4", "px-3", "py-2"];
const gapClassNames = ["grid", "grid-cols-1", "gap-3"];

interface Props {
  invalid: boolean;
  astTree: RegExpLiteral | null;
}

const RegexExplanation: React.FC<Props> = ({ invalid, astTree }) => {
  const renderTopLabel = (data: {
    type: TopLabelKind;
    parentDiv: HTMLDivElement;
    name?: string | null;
    negate?: boolean;
  }) => {
    const { type, name, negate, parentDiv } = data;
    const { textColor, character, label, description } = getTopLabelHelper({
      type,
      name,
      negate,
    });

    const topLabel = document.createElement("div");
    topLabel.classList.add("px-3", "pt-2");

    const groupCharacter = document.createElement("span");
    groupCharacter.classList.add(textColor, "font-bold", "mr-2");
    groupCharacter.textContent = character;
    topLabel.appendChild(groupCharacter);

    const groupLabel = document.createElement("span");
    groupLabel.classList.add("text-gray-500", "font-bold");
    groupLabel.textContent = label;
    topLabel.appendChild(groupLabel);

    const groupDescription = document.createElement("span");
    groupDescription.classList.add("text-gray-400", "text-sm");
    groupDescription.textContent = description;
    topLabel.appendChild(groupDescription);

    parentDiv.appendChild(topLabel);
  };

  const renderBottomLabel = (data: {
    type: CharacterRange;
    parentDiv: HTMLDivElement;
  }) => {
    const { type, parentDiv } = data;
    const { label, color } = getClosingTagHelper(type);

    const bottomLabel = document.createElement("div");
    bottomLabel.classList.add("px-3", "pb-2");

    const groupCharacter = document.createElement("span");
    groupCharacter.classList.add(color, "font-bold");
    groupCharacter.textContent = label;
    bottomLabel.appendChild(groupCharacter);

    parentDiv.appendChild(bottomLabel);
  };

  const renderSingleLineItem = (data: {
    bgColor: string;
    borderColor: string;
    textColor: string;
    character: string;
    description: string;
    label: string;
    parentDiv: HTMLDivElement;
  }) => {
    const {
      bgColor,
      borderColor,
      textColor,
      character,
      label,
      description,
      parentDiv,
    } = data;

    const div = document.createElement("div");
    div.classList.add(...commonClassNames, bgColor, borderColor);

    const characterSpan = document.createElement("span");
    characterSpan.classList.add(textColor, "font-bold");
    characterSpan.textContent = character;
    div.appendChild(characterSpan);

    const labelSpan = document.createElement("span");
    labelSpan.classList.add("text-gray-500", "font-bold", "mr-3", "ml-4");
    labelSpan.textContent = label;
    div.appendChild(labelSpan);

    const descriptionSpan = document.createElement("span");
    descriptionSpan.classList.add("text-gray-500", "text-sm");
    descriptionSpan.textContent = description;
    div.appendChild(descriptionSpan);

    parentDiv.appendChild(div);
  };

  const renderCharacterRange = (data: {
    value: string;
    min: Character;
    max: Character;
    parentDiv: HTMLDivElement;
  }) => {
    const { value, min, max, parentDiv } = data;
    const { description } = getCharacterRangeHelper(min, max);
    renderSingleLineItem({
      bgColor: "bg-cyan-100",
      borderColor: "border-cyan-500",
      textColor: "text-cyan-500",
      character: value,
      label: "Range",
      description,
      parentDiv,
    });
  };

  const renderCharacter = (data: {
    value: string;
    code: number;
    parentDiv: HTMLDivElement;
  }) => {
    const { value, code, parentDiv } = data;
    const { label, description } = getCharacterHelper(value, code);

    renderSingleLineItem({
      bgColor: "bg-white",
      borderColor: "border-neutral-500",
      textColor: value.startsWith("\\") ? "text-violet-500" : "text-black",
      character: value,
      label,
      description,
      parentDiv,
    });
  };

  const renderBackreference = (data: {
    ref: string | number;
    value: string;
    parentDiv: HTMLDivElement;
  }) => {
    const { ref, value, parentDiv } = data;
    const { label, description } = getBackreferenceHelper(ref);

    renderSingleLineItem({
      bgColor: "bg-teal-100",
      borderColor: "border-teal-500",
      textColor: "text-teal-500",
      character: value,
      label,
      description,
      parentDiv,
    });
  };

  const renderTextAssertion = (data: {
    kind: TextAssertionKind;
    parentDiv: HTMLDivElement;
    negate?: boolean;
  }) => {
    const { kind, parentDiv, negate } = data;
    const { character, label, description } = getTextAssertionHelper(
      kind,
      negate,
    );

    renderSingleLineItem({
      bgColor: "bg-sky-100",
      borderColor: "border-sky-500",
      textColor: "text-sky-500",
      character,
      label,
      description,
      parentDiv,
    });
  };

  const renderLookAssertion = (data: {
    kind: "lookahead" | "lookbehind";
    alternatives: Alternative[];
    negate: boolean;
    parentDiv: HTMLDivElement;
  }) => {
    const { kind, alternatives, negate, parentDiv } = data;

    const div = document.createElement("div");
    div.classList.add(
      ...commonClassNames,
      ...gapClassNames,
      "bg-pink-100",
      "border-pink-500",
    );

    renderTopLabel({
      type: kind === "lookahead" ? "Lookahead" : "Lookbehind",
      negate: negate,
      parentDiv: div,
    });

    const wrapper = document.createElement("div");
    wrapper.classList.add("ml-4");
    renderAlternatives(alternatives, wrapper);
    div.appendChild(wrapper);

    renderBottomLabel({ type: "CapturingGroup", parentDiv: div });

    parentDiv.appendChild(div);
  };

  const renderEscapedCharacter = (data: {
    kind: EscapeCharacter;
    parentDiv: HTMLDivElement;
    negate: boolean;
  }) => {
    const { kind, parentDiv, negate } = data;
    const { character, label, description } = getEscapeHelper(kind, negate);

    renderSingleLineItem({
      bgColor: "bg-indigo-100",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-500",
      character,
      label,
      description,
      parentDiv,
    });
  };

  const renderUnicodeCharacter = (data: {
    value: string | null;
    negate: boolean;
    parentDiv: HTMLDivElement;
  }) => {
    const { value, negate, parentDiv } = data;
    const { character, label, description } = getUnicodeHelper(value, negate);

    renderSingleLineItem({
      bgColor: "bg-purple-100",
      borderColor: "border-purple-500",
      textColor: "text-purple-500",
      character,
      label,
      description,
      parentDiv,
    });
  };

  const renderAnyCharacter = (parentDiv: HTMLDivElement) => {
    renderSingleLineItem({
      bgColor: "bg-fuchsia-100",
      borderColor: "border-fuchsia-500",
      textColor: "text-fuchsia-500",
      character: ".",
      label: "Dot.",
      description: "Matches any character except line breaks.",
      parentDiv,
    });
  };

  const renderFlagItem = (type: Flag, parentDiv: HTMLDivElement) => {
    const { character, label, description } = getFlagHelper(type);

    renderSingleLineItem({
      bgColor: "bg-blue-100",
      borderColor: "border-blue-500",
      textColor: "text-blue-500",
      character,
      label,
      description,
      parentDiv,
    });
  };

  const renderCharacterClass = (data: {
    elements: CharacterClassElement[];
    negate: boolean;
    parentDiv: HTMLDivElement;
  }) => {
    const { elements, negate, parentDiv } = data;

    const div = document.createElement("div");
    div.classList.add(
      ...commonClassNames,
      ...gapClassNames,
      "bg-yellow-100",
      "border-yellow-500",
    );

    renderTopLabel({
      type: "CharacterClass",
      parentDiv: div,
      negate,
    });
    const wrapper = document.createElement("div");
    wrapper.classList.add("ml-4");
    renderCharacterElements(elements, wrapper);
    div.appendChild(wrapper);
    renderBottomLabel({ type: "CharacterClass", parentDiv: div });

    parentDiv.appendChild(div);
  };

  const renderGroup = (data: {
    type: Group;
    name: string | null;
    alternatives: Alternative[];
    parentDiv: HTMLDivElement;
  }) => {
    const { type, name, alternatives, parentDiv } = data;

    const div = document.createElement("div");
    div.classList.add(
      ...commonClassNames,
      ...gapClassNames,
      "bg-green-100",
      "border-green-500",
    );

    if (type === "CapturingGroup") {
      renderTopLabel({
        type: "CapturingGroup",
        parentDiv: div,
        name,
      });
    } else {
      renderTopLabel({
        type: "Group",
        parentDiv: div,
      });
    }

    const wrapper = document.createElement("div");
    wrapper.classList.add("ml-4");
    renderAlternatives(alternatives, wrapper);
    div.appendChild(wrapper);

    renderBottomLabel({ type: "CapturingGroup", parentDiv: div });

    parentDiv.appendChild(div);
  };

  const renderCharacterSet = (data: {
    kind: RegexCharacter;
    value: string | null;
    negate: boolean;
    parentDiv: HTMLDivElement;
  }) => {
    const { kind, value, negate, parentDiv } = data;

    if (kind === "word" || kind === "space" || kind === "digit") {
      renderEscapedCharacter({ kind, negate, parentDiv });
    } else if (kind === "property") {
      renderUnicodeCharacter({ value, negate, parentDiv });
    } else {
      renderAnyCharacter(parentDiv);
    }
  };

  const renderQuantifierHelper = (data: {
    type: Quantifier;
    label: string;
    character: string;
    description: string;
    parentDiv: HTMLDivElement;
  }) => {
    const { type, label, character, description, parentDiv } = data;

    const div = document.createElement("div");
    div.classList.add(
      ...commonClassNames,
      "!border-l",
      "bg-gray-100",
      "border-gray-200",
      type === "Quantifier" ? "ml-8" : "ml-16",
    );

    const characterSpan = document.createElement("span");
    characterSpan.classList.add("text-red-500", "font-bold");
    characterSpan.textContent = character;
    div.appendChild(characterSpan);

    const labelSpan = document.createElement("span");
    labelSpan.classList.add("text-gray-500", "font-bold", "mr-3", "ml-4");
    labelSpan.textContent = label;
    div.appendChild(labelSpan);

    const descriptionSpan = document.createElement("span");
    descriptionSpan.classList.add("text-gray-500", "text-sm");
    descriptionSpan.textContent = description;
    div.appendChild(descriptionSpan);

    parentDiv.appendChild(div);
  };

  const renderQuantifier = (data: {
    min: number;
    max: number;
    value: string;
    greedy: boolean;
    element: QuantifiableElement;
    parentDiv: HTMLDivElement;
  }) => {
    const { min, max, value, greedy, element, parentDiv } = data;

    const wrapper = document.createElement("div");

    renderAstTree(element, wrapper);

    const { character, description } = getQuantifierHelper({
      min,
      max,
      greedy,
      value,
    });

    renderQuantifierHelper({
      type: "Quantifier",
      character,
      description,
      label: "Quantifier",
      parentDiv: wrapper,
    });

    if (!greedy)
      renderQuantifierHelper({
        type: "Lazy",
        character: "?",
        description:
          "Makes the preceding quantifier lazy, causing it to match as few characters as possible.",
        label: "Lazy",
        parentDiv: wrapper,
      });

    parentDiv.appendChild(wrapper);
  };

  const renderFlags = (data: Flags, parentDiv: HTMLDivElement) => {
    const { global, ignoreCase, multiline, dotAll, unicode } = data;

    if (!global && !ignoreCase && !multiline && !dotAll && !unicode) return;

    const wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add(
      ...commonClassNames,
      "border-red-500",
      "bg-red-100",
      "mt-3",
    );

    renderTopLabel({ type: "Flags", parentDiv: wrapperDiv });

    const div = document.createElement("div");
    div.classList.add(...gapClassNames, "ml-3", "py-2");

    if (global) renderFlagItem("Global", div);
    if (ignoreCase) renderFlagItem("IgnoreCase", div);
    if (multiline) renderFlagItem("MultiLine", div);
    if (dotAll) renderFlagItem("SingleLine", div);
    if (unicode) renderFlagItem("Unicode", div);

    wrapperDiv.appendChild(div);
    parentDiv.appendChild(wrapperDiv);
  };

  const renderCharacterElements = (
    elements: CharacterClassElement[],
    parentDiv: HTMLDivElement,
  ) => {
    const div = document.createElement("div");
    div.classList.add(...gapClassNames);

    elements.forEach((elm) => {
      renderAstTree(elm, div);
    });

    parentDiv.appendChild(div);
  };

  const renderAlternatives = (
    alternatives: Alternative[],
    parentDiv: HTMLDivElement,
  ) => {
    if (alternatives.length > 1) parentDiv.classList.add(...gapClassNames);

    alternatives.forEach((alt) => {
      const altDiv = document.createElement("div");
      altDiv.classList.add(...gapClassNames);

      alt.elements.forEach((elm) => {
        renderAstTree(elm, altDiv);
      });

      parentDiv.appendChild(altDiv);
    });
  };

  const renderAstTree = (node: Node | Element, parentDiv: HTMLDivElement) => {
    switch (node.type) {
      case "RegExpLiteral": {
        renderAstTree(node.pattern, parentDiv);
        break;
      }
      case "Pattern": {
        renderAlternatives(node.alternatives, parentDiv);
        break;
      }
      case "Group":
      case "CapturingGroup": {
        renderGroup({
          type: node.type,
          name: (node as CapturingGroup).name,
          alternatives: node.alternatives,
          parentDiv,
        });
        break;
      }
      case "CharacterClass": {
        renderCharacterClass({
          elements: node.elements,
          negate: node.negate,
          parentDiv,
        });
        break;
      }
      case "CharacterClassRange": {
        renderCharacterRange({
          value: node.raw,
          min: node.min,
          max: node.max,
          parentDiv,
        });
        break;
      }
      case "Character": {
        renderCharacter({ value: node.raw, code: node.value, parentDiv });
        break;
      }
      case "CharacterSet": {
        renderCharacterSet({
          kind: node.kind,
          value: (node as UnicodePropertyCharacterSet).value,
          negate: (node as UnicodePropertyCharacterSet).negate,
          parentDiv,
        });
        break;
      }
      case "Assertion": {
        if (
          node.kind === "word" ||
          node.kind === "start" ||
          node.kind === "end"
        ) {
          renderTextAssertion({
            kind: node.kind,
            parentDiv,
            negate: (node as WordBoundaryAssertion).negate,
          });
        } else if (node.kind === "lookahead" || node.kind === "lookbehind") {
          renderLookAssertion({
            kind: node.kind,
            alternatives: node.alternatives,
            negate: node.negate,
            parentDiv,
          });
        }
        break;
      }
      case "Quantifier": {
        renderQuantifier({
          element: node.element,
          min: node.min,
          max: node.max,
          value: node.raw,
          greedy: node.greedy,
          parentDiv,
        });
        break;
      }
      case "Backreference": {
        renderBackreference({ ref: node.ref, value: node.raw, parentDiv });
        break;
      }
    }
  };

  const resultRefCallback = useCallback(
    (resultDiv: HTMLDivElement | null) => {
      if (!resultDiv || !astTree) return;

      while (resultDiv.firstChild) {
        resultDiv.firstChild.remove();
      }

      renderAstTree(astTree, resultDiv);
      renderFlags(astTree.flags, resultDiv);
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [astTree],
  );

  return (
    <>
      <div
        ref={resultRefCallback}
        style={{ display: invalid ? "none" : "block" }}
      />
      <div
        className={cn("border !border-l-4 border-red-500 px-3 py-2", {
          hidden: !invalid,
        })}
      >
        <p className="text-lg font-semibold text-red-500">ERROR</p>
        <p className="text-red-500">Invalid regular expression</p>
      </div>
    </>
  );
};

export default RegexExplanation;
