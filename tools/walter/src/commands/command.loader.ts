import * as Commander from 'commander';
// import path from 'node:path';
// import * as fs from 'fs-extra';
// import * as JsYaml from 'js-yaml';
import * as packageJson from '../../package.json';
import { printWelcomeMessage } from '../utils';

export class ComamandLoader {
  private readonly _program = Commander.program;

  /**
   * Set package.json info to commander
   */
  private readonly _setProgramInfo = (): void => {
    const { name, version, description } = packageJson as any;
    this._program.name(name).version(version).description(description);
  };

  /**
   * Set actions to command
   */
  private readonly _setCommandActions = (): void => {};

  /**
   * Initialize Commander
   */
  public init = (): void => {
    // const pnpmWorkspace = fs.readFileSync(
    //   path.resolve(__dirname, '../../../pnpm-workspace.yaml'),
    //   'utf-8',
    // );
    // console.log(pnpmWorkspace);
    printWelcomeMessage();
    this._setProgramInfo();
    this._setCommandActions();
  };
}
