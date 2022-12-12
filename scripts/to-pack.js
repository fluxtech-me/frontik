const shell = require("shelljs");
const path = require("node:path");

shell.config.fatal = true;
shell.config.verbose = true;
const cwd = process.cwd();
const packageJsonPath = path.resolve(cwd, "package.json");
const packageJson = require(packageJsonPath);

const PACKED_DIR = ".packed";
const packedDir = path.resolve(cwd, PACKED_DIR);
const packedFiles = packageJson.packableFiles || [];

shell.rm("-rf", packedDir);
shell.mkdir("-p", packedDir);
shell.cp("-r", packedFiles, PACKED_DIR);

const packedPackageJsonPath = path.resolve(packedDir, "package.json");
delete packageJson.scripts;
delete packageJson.devDependencies;
delete packageJson.browserslist;
delete packageJson.packableFiles;

shell.config.verbose = false;
shell.config.silent = true;
shell.echo(JSON.stringify(packageJson, null, 2)).to(packedPackageJsonPath);
