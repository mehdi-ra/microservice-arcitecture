import {Router} from 'express';
import {Logger} from '../../Logger';
import {SharedContainer} from '../../..';
import {generateRandomPort} from './generateRandomPort';
import {mainExpress} from '../../../drivers/mainExpress';
import {IMicroserviceOptions} from '../interfaces/IMicroserviceOptions';
import {ServicesRegistry} from '../../ServicesRegistry';

export function prepareAndRunExpressDriver(target: any, options?: IMicroserviceOptions) {
  const registry = SharedContainer.get(ServicesRegistry);
  const logger = SharedContainer.get<Logger>(Logger);

  const expressOptions = options?.express || {};
  const express = options?.express.instance || mainExpress;
  const port = expressOptions?.port || generateRandomPort();

  return new Promise((resolve, reject) => {
    if (expressOptions?.routers) {
      expressOptions.routers.forEach((router: Router) => {
        express.use(router);
      });
    }

    express.listen(port, () => {
      logger.log(`Express is up and listening on port ${port}`);
      registry.assignExpress(target.name, express);
    });
  });
}
