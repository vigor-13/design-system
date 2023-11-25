#!/usr/bin/env node
import { bootstrap } from './bin';
bootstrap().catch((error) => {
  // TODO: Error handling
  console.error(error);
  process.exit(1);
});
