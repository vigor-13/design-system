import path from 'node:path';
import fs from 'fs-extra';

export async function copyTokensFromNodeModules(): Promise<void> {
  const filePath = path.resolve(
    `${process.cwd()}/node_modules/design-token/dist/stylex/token.stylex.ts`,
  );
  const file: string = await fs.readFile(filePath, 'utf-8');
  await fs.writeFile(`${process.cwd()}/src/token.stylex.ts`, file);
}

copyTokensFromNodeModules().catch(() => null);
