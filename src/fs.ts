import type { Plugin, WasmModule } from "./type";
import { definePlugin } from "./index";

// export const useFs = <I extends WasmModule>() => (
//   w: I
// ): I & { fs: () => "ccall" } => {
//   return { ...w, fs: () => "ccall" };
// };
export const useFs = definePlugin(() => <I>(m: I): I & {
  fs: () => "fs";
} => {
  return { ...m, fs: () => "fs" };
});
