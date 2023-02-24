import {userApi} from '@domain/user/user.api';

export const bootstrap = (function () {
  return {
    init: () => {
      /**
       * Run every service on a different process
       */
      userApi({port: 3000});
    },
  };
})();
