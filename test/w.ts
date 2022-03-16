import { createWasm } from "../src/index";
import { useCCall } from "../src/ccall";
import { useCWrap } from "../src/cwrap";
import { useFs } from "../src/fs";
import { readFileSync } from "fs";
export async function load() {
  const buf = readFileSync("./test/math.wasm");
  const cwrap = useCWrap();
  const ccall = useCCall();
  const fs = useFs();
  const w = await createWasm(buf);
  const wasm = w.use(cwrap).use(ccall).use(fs);
  console.log(wasm.ccall("add", 1, 1));
  const fib = wasm.cwrap("fib");
  console.log(fib(10));
  return wasm;
}
load();
