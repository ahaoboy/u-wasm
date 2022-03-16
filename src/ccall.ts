import { definePlugin } from "./index";
import { ccall } from "e-emscripten";
const _ccall: typeof ccall = (id: string, ...args: any[]) => {
  return [] as any
};
export const useCCall = definePlugin(() => (m): typeof m & {
  ccall: typeof ccall;
} => {
  return { ...m, ccall: _ccall };
});
