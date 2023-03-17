import {SharedContainer} from '../../../';
import {ServicesRegistry} from '../../ServicesRegistry';

export function options(target: any, key: string) {
  const registry = SharedContainer.get(ServicesRegistry);

  Object.defineProperty(target, key, {
    get: () => registry.get(target.constructor.name),
    enumerable: true,
    configurable: true,
  });
}
