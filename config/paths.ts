import * as path from 'path';

const rootDir = path.resolve(__dirname, '..');

const buildDir = path.resolve(rootDir, 'build');
const nodeModuleDir = path.resolve(rootDir, 'node_modules');
const outDir = path.resolve(rootDir, 'out');
const srcDir = path.resolve(rootDir, 'src');

export {
  buildDir,
  nodeModuleDir,
  outDir,
  rootDir,
  srcDir,
};
