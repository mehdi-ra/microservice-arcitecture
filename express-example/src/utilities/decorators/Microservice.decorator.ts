// eslint-disable-next-line space-before-function-paren
export function Microservice<T extends {new (..._args: any[]): {}}>(constructor: T) {
  return class extends constructor {};
}
