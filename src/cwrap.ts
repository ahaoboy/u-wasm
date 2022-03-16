import { definePlugin } from "./index";
function cwrap(this: Record<string, Function>, id: string) {
  return this[id].bind(this);
}
export const useCWrap = definePlugin(() => <I>(m: I): I & {
  cwrap: Function;
} => {
  return { ...m, cwrap };
});
