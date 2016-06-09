/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { SuccessController } from './success/success.controller';
import { ErrorController } from './error/error.controller';
import { UsersService } from '../app/components/usersService/users.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { AuthFormDirective } from '../app/components/auth-form/auth-form.directive';

angular.module('jsNgLoginForm', ['ngMessages', 'ui.router'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('users', UsersService)
  .controller('MainController', MainController)
  .controller('ErrorController', ErrorController)
  .controller('SuccessController', SuccessController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('authForm', AuthFormDirective);
