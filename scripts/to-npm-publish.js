const shell = require("shelljs");
const path = require("node:path");
shell.config.fatal = true;
shell.config.verbose = true;

const cwd = process.cwd();
const PACKED_DIR = ".packed";
const packedDir = path.resolve(cwd, PACKED_DIR);

shell.cd(packedDir);
shell.exec("npm publish");
