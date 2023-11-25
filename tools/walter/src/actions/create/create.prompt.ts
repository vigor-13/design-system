import inquirer, { type QuestionCollection } from 'inquirer';
import { getPnpmWorkspaces } from '../../utils';

interface TargetWorkspace {
  workspace: string;
}

interface PackageName {
  name: string;
}

export class CreateActionPrompt {
  public getTargetWorkspace = async (): Promise<TargetWorkspace> => {
    try {
      const workspaces = await getPnpmWorkspaces();
      const inquirerOption: QuestionCollection = {
        type: 'list',
        name: 'workspace',
        message: 'Where would you like to create your package?',
        choices: workspaces,
        default: 0,
      };
      const result = await inquirer.prompt<TargetWorkspace>(inquirerOption);
      return result;
    } catch (error) {
      // TODO: Error handling
      console.error(error);
      process.exit(1);
    }
  };

  public getPackageName = async (): Promise<PackageName> => {
    try {
      const inquirerOption: QuestionCollection = {
        type: 'input',
        name: 'name',
        message: 'What is the package name?',
      };
      const result = await inquirer.prompt<PackageName>(inquirerOption);

      // TODO: 현재 코드베이스에 추가된 패키지 이름 가져와서 중복되는지 확인해야함.

      return result;
    } catch (error) {
      // TODO: Error handling
      console.error(error);
      process.exit(1);
    }
  };
}
