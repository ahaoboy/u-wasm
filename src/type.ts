export type WasmModule = {
  heap: Uint8Array;
  // 这里必须使用 O & Ti 这种形式, 否则会导致推断失败
  // use: <O, Ti>(this: Ti, plugin: (wasm: Ti) => O) => O;
  use: <O, Ti>(this: Ti, plugin: (wasm: Ti) => O) => O & Ti;
};

export type Plugin<I extends WasmModule, O extends WasmModule, C = {}> = (
  config?: C
) => (wasm: I) => O;

export type ThisParameterType<T> = T extends (
  this: infer U,
  ...args: any[]
) => any
  ? U
  : unknown;

