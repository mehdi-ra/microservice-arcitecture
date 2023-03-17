export function options(target: any, key: string) {
  Object.defineProperty(target, key, {
    value: options,
    writable: true,
    enumerable: true,
    configurable: true,
  });
}
