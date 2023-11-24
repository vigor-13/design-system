import * as Commander from 'commander';
import * as packageJson from '../../package.json';
import { CreateAction } from '../actions';
import { printWelcomeMessage } from '../utils';

export class ComamandLoader {
  private readonly _program = Commander.program;

  private readonly _setProgramInfo = (): void => {
    const { name, version, description } = packageJson as any;
    this._program.name(name).version(version).description(description);
  };

  private readonly _setCommandActions = (): void => {
    // default Action
    this._program.action(async () => {
      const createAction = new CreateAction();
      await createAction.handle();
    });
  };

  private readonly _parse = async (): Promise<void> => {
    await this._program
      .parseAsync()
      .then(() => {})
      .catch((error) => {
        // TODO: Error handling
        console.error(error);
        process.exit(1);
      });
  };

  public init = async (): Promise<void> => {
    try {
      printWelcomeMessage();
      this._setProgramInfo();
      this._setCommandActions();
      await this._parse();
    } catch (error) {
      // TODO: Error handling
      console.error(error);
      process.exit(1);
    }
  };
}
