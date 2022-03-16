import { definePlugin } from "./index";

export const useFs = definePlugin(() => <I>(m: I): I & {
  fs: () => "fs";
} => {
  return { ...m, fs: () => "fs" };
});
