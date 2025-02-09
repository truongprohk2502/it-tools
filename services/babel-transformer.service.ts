"use server";

import { transform } from "@babel/standalone";
import jsonToMobxPlugin from "babel-plugin-js-to-mobx-state-tree";

export async function jsonToMobx(
  code: string,
): Promise<string | null | undefined> {
  return transform(`const mobxModel = ${code}`, {
    plugins: [jsonToMobxPlugin],
  }).code;
}
