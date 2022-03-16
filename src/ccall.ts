import { definePlugin } from "./index";
function ccall(this: Record<string, Function>, id: string, ...args: any[]) {
  return this[id](...args);
}
export const useCCall = definePlugin(() => (m): typeof m & {
  ccall: Function;
} => {
  return { ...m, ccall };
});
