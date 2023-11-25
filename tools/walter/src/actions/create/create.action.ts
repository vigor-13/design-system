import * as prettier from 'prettier';
import * as fs from 'fs-extra';
import { CreateActionPrompt } from './create.prompt';
import packaeJsonTemplate from '../../../templates/_package.json';
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

  private readonly _createPackage = async (): Promise<void> => {
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

    const packageJson = packaeJsonTemplate;
    packageJson.name = this._data.name;

    const formattedJson = await prettier.format(JSON.stringify(packageJson), {
      parser: 'json-stringify',
    });

    await fs.writeFile(
      `${process.cwd()}/${this._data.name}/package.json`,
      formattedJson,
    );
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
