require('ts-node/register');


const tsConfig = require('../../tsconfig.json');
const tsConfigPaths = require('tsconfig-paths');
const path = require('path');

tsConfigPaths.register({
  /*baseUrl: path.join(__dirname, '../../', tsConfig.compilerOptions.baseUrl),*/
  baseUrl: tsConfig.compilerOptions.baseUrl,
  paths: tsConfig.compilerOptions.paths
});


require('./src/service');
