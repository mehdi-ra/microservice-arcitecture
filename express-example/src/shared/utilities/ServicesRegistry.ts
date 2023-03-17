import {IServicesRegistryOptions} from '../interfaces/IServicesRegistryOptions';
import {inject, injectable} from 'inversify';
import {Logger} from './Logger';
import {Express} from 'express';

@injectable()
export class ServicesRegistry {
  private registryMap = new Map<string, IServicesRegistryOptions>();
  public constructor(@inject(Logger) private logger: Logger) {}

  // --------------------------------------------------- Public methods|

  public register(options: IServicesRegistryOptions): void {
    if (this.registryMap.has(options.name)) {
      this.logger.debug(`trying to register existed ${options.name} service`);
    }

    if (!this.registryMap.has(options.name)) {
      this.registryMap.set(options.name, options);
    }
  }

  public assignExpress(name: string, express: Express): void {
    if (this.registryMap.has(name)) {
      this.registryMap.get(name)!.express = express;
    }
  }

  public get(name: string): IServicesRegistryOptions | undefined {
    return this.registryMap.get(name);
  }
}
