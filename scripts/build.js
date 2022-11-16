const { exec } = require("child_process");
const util = require("util");
const execPromise = util.promisify(exec);

const SOURCE_DIR = "src";
const BUILD_DIR = "dist";

const build = async () => {
  try {
    await execPromise(`mkdir -p dist`);
    await execPromise(`rm -rf dist`);
    await execPromise(
      `npx sass --no-source-map --stop-on-error ${SOURCE_DIR}:${BUILD_DIR}`
    );
    await execPromise(`npx babel ${SOURCE_DIR} --out-dir ${BUILD_DIR}`);
  } catch (error) {
    console.error(error);
  }
};

build();
