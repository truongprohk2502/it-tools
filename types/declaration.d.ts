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
