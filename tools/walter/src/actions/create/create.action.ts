import * as prettier from 'prettier';
import * as fs from 'fs-extra';
import path from 'node:path';
import { CreateActionPrompt } from './create.prompt';
import { isExistDirectory } from '../../utils';

interface Data {
  workspace: string;
  name: string;
}

/**
 * Create internal package
 */
export class CreateAction {
  private readonly _prompt = new CreateActionPrompt();
  private readonly _data: Data = {
    workspace: '',
    name: '',
  };

  private readonly _getTargetWorkspace = async (): Promise<void> => {
    const { workspace } = await this._prompt.getTargetWorkspace();
    this._data.workspace = workspace;
  };

  private readonly _getPackageName = async (): Promise<void> => {
    const { name } = await this._prompt.getPackageName();
    this._data.name = name;
  };

  private readonly _createDirectory = async (): Promise<void> => {
    const workspaceDirectory = `${process.cwd()}/${this._data.workspace}`;

    if (!(await isExistDirectory(workspaceDirectory))) {
      // TODO: Error handling
      console.error('no such workspace directory');
      process.exit(1);
    }

    process.chdir(this._data.workspace);

    const packageDirectory = `${process.cwd()}/${this._data.name}`;

    if (await isExistDirectory(packageDirectory)) {
      // TODO: Error handling
      console.error('already exist package!');
      process.exit(1);
    }

    await fs.mkdir(this._data.name, { recursive: true });
  };

  private readonly _copyTemplate = async (): Promise<void> => {
    try {
      const templateDir = path.resolve(__dirname, './templates/default');
      const destinationDir = `${process.cwd()}/${this._data.name}`;
      await fs.copy(templateDir, destinationDir);
    } catch (error) {
      // TODO: Error handling
      console.error(error);
      process.exit(1);
    }
  };

  private readonly _updatePackageJson = async (): Promise<void> => {
    try {
      const filePath = `${process.cwd()}/${this._data.name}/package.json`;

      const file: string = await fs.readFile(filePath, 'utf-8');
      const newPackageJson = JSON.parse(file);
      newPackageJson.name = this._data.name;

      const formattedJson = await prettier.format(
        JSON.stringify(newPackageJson),
        {
          parser: 'json-stringify',
        },
      );

      await fs.writeFile(
        `${process.cwd()}/${this._data.name}/package.json`,
        formattedJson,
      );
    } catch (error) {
      // TODO: Error handling
      console.error(error);
      process.exit(1);
    }
  };

  private readonly _createPackage = async (): Promise<void> => {
    await this._createDirectory();
    await this._copyTemplate();
    await this._updatePackageJson();
  };

  public handle = async (): Promise<void> => {
    try {
      await this._getTargetWorkspace();
      await this._getPackageName();
      await this._createPackage();
    } catch (error) {
      // TODO: Error handling
      console.error(error);
      process.exit(1);
    }
  };
}
