import { createWASM, useCCall, cwrap } from "../src";
import fs from "fs";
import load from "./fib-single";
async function main() {
  const buf = fs.readFileSync("./test/fib.wasm");
  console.log("buf", buf);
  const wasm = await createWASM(buf);
  console.log(wasm);
  // console.log(wasm.wasm.module.asm);
  // console.log(Object.keys(wasm.wasm.module));
  // console.log(Object.keys(wasm.wasm.instance));

  // const m = await load({})
  // console.log(m)
}
main();
