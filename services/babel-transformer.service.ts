"use server";

import { transform } from "@babel/standalone";
import jsonToMobxPlugin from "babel-plugin-js-to-mobx-state-tree";
import jsonToProptypesPlugin from "babel-plugin-json-to-proptypes";
import objStylesToTemplatePlugin from "babel-plugin-object-styles-to-template";

export async function jsonToMobx(
  code: string,
): Promise<string | null | undefined> {
  return transform(`const mobxModel = ${code}`, {
    plugins: [jsonToMobxPlugin],
  }).code;
}

export async function jsonToPropTypes(
  code: string,
): Promise<string | null | undefined> {
  return transform(`const propTypes = ${code}`, {
    plugins: [jsonToProptypesPlugin],
  }).code;
}

export async function cssToTemplate(
  code: string,
): Promise<string | null | undefined> {
  return transform(code, {
    plugins: [objStylesToTemplatePlugin],
  }).code;
}
