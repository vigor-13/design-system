import * as CLI from '../commands';

export const bootstrap = (): void => {
  const cli = new CLI.ComamandLoader();
  cli.init();
};
