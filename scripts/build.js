const shell = require("shelljs");
shell.config.fatal = true;
shell.config.verbose = true;

const SOURCE_DIR = "src";
const BUILD_DIR = "dist";

shell.rm("-rf", BUILD_DIR);
shell.cp("-R", SOURCE_DIR, BUILD_DIR);
shell.rm("-rf", `${BUILD_DIR}/**/*.scss`);
shell.rm("-rf", `${BUILD_DIR}/**/*.js`);
shell.exec(
  `npx sass --no-source-map --stop-on-error --color ${SOURCE_DIR}:${BUILD_DIR}`,
  { silent: true }
);
shell.exec(`npx babel ${SOURCE_DIR} --out-dir ${BUILD_DIR}`, {
  silent: true,
});
