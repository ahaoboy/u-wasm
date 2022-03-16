import { definePlugin } from "./index";
export const useCWrap = definePlugin(() => <I>(m: I): I & {
  cwrap: () => "cwrap";
} => {
  return { ...m, cwrap: () => "cwrap" };
});
