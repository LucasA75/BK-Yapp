import { Run } from './Run';

try {
  new Run().start().then();
} catch (error: any) {
  // eslint-disable-next-line no-console
  console.error(`catch ${error}`)
  process.exit(1);
}

process.on('uncaughtException', (_err) => {
  // eslint-disable-next-line no-console
  console.error(`uncaughtException ${_err}`)
  process.exit(1);
});
