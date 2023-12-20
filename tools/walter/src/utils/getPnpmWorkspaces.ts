import path from 'node:path';
import * as fs from 'fs-extra';
import * as yaml from 'js-yaml';

export const getPnpmWorkspaces = async (): Promise<string[]> => {
  try {
    const workingDir = process.cwd();
    const rawFile = await fs.readFile(
      path.resolve(workingDir, './pnpm-workspace.yaml'),
      'utf-8',
    );
    const result = yaml.load(rawFile) as { packages: string[] };
    const workspaces = result.packages
      .map((workspace: string) => {
        return workspace.split('/')[0];
      })
      .filter((workspace) => !workspace.includes('!'));

    return workspaces;
  } catch (error) {
    // TODO: Error handling
    console.error(error);
    process.exit(1);
  }
};
