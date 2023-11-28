import { StyleDictionaryFactory } from './build';

const bootstrap = (): void => {
  const styleDictionaryFactory = new StyleDictionaryFactory();
  styleDictionaryFactory.build();
};

bootstrap();
