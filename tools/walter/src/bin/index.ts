import * as CLI from '../commands';

export const bootstrap = async (): Promise<void> => {
  const cli = new CLI.ComamandLoader();
  await cli.init();
};
