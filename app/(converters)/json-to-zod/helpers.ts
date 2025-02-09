export const formatZodCodeWithType = (code: string) => `import { z } from "zod";

${code}

export { schema };`;

export const formatZodCodeWithoutType = (
  code: string,
) => `import { z } from "zod";

${code}
type Schema = z.infer<typeof schema>;

export { schema };`;
