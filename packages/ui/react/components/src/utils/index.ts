export const cx = (...classNames: any[]): string =>
  classNames.filter(Boolean).join(' ');
