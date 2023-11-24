import { CreateActionPrompt } from './create.prompt';

interface Data {
  workspace: string;
  name: string;
}

/**
 * Create internal package.
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

  public handle = async (): Promise<void> => {
    try {
      await this._getTargetWorkspace();
      await this._getPackageName();
      console.log(this._data);
    } catch (error) {
      // TODO: Error handling
      console.error(error);
      process.exit(1);
    }
  };
}
