export * from "./ccall";
export * from "./cwrap";
import type { WasmModule, Plugin } from "./type";
function use(plugin) {
  console.log("use", Object.keys(this));
  return plugin(this);
}

export async function createWASM(data: Uint8Array): Promise<WasmModule> {
  const instance = ((await WebAssembly.instantiate(
    data,
    {}
  )) as any) as WasmModule;
  console.log("instance", instance.instance.exports);
  return {
    ...instance,
    use,
  };
}

export function definePlugin<C = {}, T = {}>(
  plugin: (config?: C) => (wasm: WasmModule) => WasmModule & T
): (config?: C) => (wasm: WasmModule) => WasmModule & T {
  return plugin;
}
