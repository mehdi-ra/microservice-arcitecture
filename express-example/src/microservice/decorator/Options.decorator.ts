import {MicroserviceTokens} from '../providers';

export function options(target: any, key: string) {
  const options = Reflect.getMetadata(MicroserviceTokens.MICROSERVICE_TOKEN_OPTIONS, target.constructor);

  Object.defineProperty(target, key, {
    value: options,
    writable: true,
    enumerable: true,
    configurable: true,
  });
}
