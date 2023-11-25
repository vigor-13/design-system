import * as fs from 'fs-extra';

export const isWriteableDirectory = async (
  directory: string,
): Promise<boolean> => {
  try {
    await fs.access(directory, fs.constants.W_OK);
    return true;
  } catch (error) {
    return false;
  }
};
