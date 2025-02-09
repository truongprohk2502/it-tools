"use server";

import { transform } from "@babel/standalone";
import jsonToMobxPlugin from "babel-plugin-js-to-mobx-state-tree";
import jsonToProptypesPlugin from "babel-plugin-json-to-proptypes";

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
