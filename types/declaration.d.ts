declare module "save-svg-as-png" {
  export interface SaveSvgOptions {
    scale?: number;
    encoderOptions?: number;
    backgroundColor?: string;
    encoderType?: string;
  }

  export function saveSvgAsPng(
    svgElement: SVGSVGElement,
    fileName: string,
    options?: SaveSvgOptions,
  ): void;
}

declare module "transform-json-types-fixed" {
  function transform(input: string, setting: { lang: "io-ts" }): string;
  export default TransformFn;
}

declare module "generate-schema" {
  export function bigquery(obj: any): string;
  export function mysql(obj: any): string;
  export function mongoose(obj: any): string;
}

declare module "babel-plugin-js-to-mobx-state-tree" {
  export default PluginItem;
}

declare module "babel-plugin-json-to-proptypes" {
  export default PluginItem;
}

declare module "babel-plugin-object-styles-to-template" {
  export default PluginItem;
}

declare module "audiobuffer-to-wav" {
  export default function audioToWav(buffer: AudioBuffer): Blob;
}
