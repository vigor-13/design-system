import * as fs from 'fs-extra';

export const isExistDirectory = async (directory: string): Promise<boolean> => {
  try {
    const isExist = await fs.exists(directory);
    if (isExist) return true;
    return false;
  } catch (error) {
    // TODO: Error handling
    console.error(error);
    process.exit(1);
  }
};
