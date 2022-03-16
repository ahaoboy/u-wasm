import { createWasm, useCCall, useCWrap } from "../src";
import fs from "fs";
import load from "./fib-single";
async function main() {
  const buf = fs.readFileSync("./test/fib.wasm");
  console.log("buf", buf);
  const wasm = await createWasm(buf);
  console.log(wasm);
}
main();
