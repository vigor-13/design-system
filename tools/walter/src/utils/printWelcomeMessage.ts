import welcome from 'cli-welcome';
import chalk from 'chalk';
import * as PackageJson from '../../package.json';

export const printWelcomeMessage = (): void => {
  const asciiArt =
    "       _                                 _       \r\n__   _(_) __ _  ___  _ __ ___  _   _ ___| |_   _ \r\n\\ \\ / / |/ _` |/ _ \\| '__/ _ \\| | | / __| | | | |\r\n \\ V /| | (_| | (_) | | | (_) | |_| \\__ \\ | |_| |\r\n  \\_/ |_|\\__, |\\___/|_|  \\___/ \\__,_|___/_|\\__, |\r\n         |___/                             |___/ ";

  const color = chalk.hex(`#B5CDD7`);
  const packageJson: any = PackageJson;

  welcome({
    title: `Welcome Walter CLI`,
    tagLine: `by vigor-13`,
    bgColor: `#B5CDD7`,
    color: `#000000`,
    bold: true,
    clear: true,
    version: `${packageJson.version}`,
    description: `${color(
      asciiArt,
    )}\n\nLet's get you set up with a new package.`,
  });
};
