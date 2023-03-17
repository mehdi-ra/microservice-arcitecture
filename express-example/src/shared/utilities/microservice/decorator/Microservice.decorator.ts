/**
 * Using this file we connect the service to rabbitMQ.
 * and update them here.
 */
import {prepareAndRunExpressDriver} from '../functions/prepareAndRunExpressDriver';
import {IMicroserviceOptions} from '../interfaces/IMicroserviceOptions';
import {registerToRegistry} from '../functions/registerToRegistry';
import {SharedContainer} from '../../../';
import {Logger} from '../../Logger';

export function Microservice(options?: IMicroserviceOptions) {
  return function (target: any) {
    const logger = SharedContainer.get<Logger>(Logger);

    registerToRegistry(target)
      .then(() => prepareAndRunExpressDriver(target, options))
      .then(() => logger.log(`Registering and running completed for ${target.name}`))
      .catch((err: any) => {
        logger.error(err?.toString() || err);
      });
  };
}
