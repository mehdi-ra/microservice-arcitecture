import {IServicesRegistryOptions} from '../interfaces/IServicesRegistryOptions';
import {inject, injectable} from 'inversify';
import {Logger} from './Logger';

@injectable()
export class ServicesRegistry {
  private registryMap = new Map<string, IServicesRegistryOptions>();
  public constructor(@inject(Logger) private logger: Logger) {}

  // --------------------------------------------------- Public methods|

  public register(options: IServicesRegistryOptions): void {
    if (!this.registryMap.has(options.name)) {
      this.registryMap.set(options.name, options);
    }

    if (this.registryMap.has(options.name)) {
      this.logger.debug(`trying to register existed ${options.name} service`);
    }
  }

  public get(name: string): IServicesRegistryOptions | undefined {
    return this.registryMap.get(name);
  }
}
