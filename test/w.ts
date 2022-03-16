import { createWASM } from "../src/index";
import { useCCall } from "../src/ccall";
import { useCWrap } from "../src/cwrap";
import { useFs } from "../src/fs";
import { readFileSync } from "fs";
export async function load() {
  const buf = readFileSync("./test/math.wasm");
  const cwrap = useCWrap();
  const ccall = useCCall();
  const fs = useFs();
  const w = await createWASM(buf);
  const wasm1 = w.use(cwrap).use(ccall).use(fs);
  console.log(wasm1.fs());
  console.log(wasm1.ccall());
  console.log(wasm1.cwrap());
  return wasm1;
}
load();
