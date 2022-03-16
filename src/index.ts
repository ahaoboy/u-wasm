export * from "./ccall";
export * from "./cwrap";
import type { WasmModule, Plugin } from "./type";
function use(plugin) {
  return plugin(this);
}

export async function createWASM(data: Uint8Array): Promise<WasmModule> {
  const instance = ((await WebAssembly.instantiate(data, {})) as any) as any;
  const { exports } = instance.instance;
  return {
    ...exports,
    use,
  };
}

export function definePlugin<C = {}, T = {}>(
  plugin: (config?: C) => (wasm: WasmModule) => WasmModule & T
): (config?: C) => (wasm: WasmModule) => WasmModule & T {
  return plugin;
}
