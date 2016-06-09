export function AuthFormDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/auth-form/auth-form.html',
    scope: {
        submitHandler: '&'
    },
    controller: AuthFormController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class AuthFormController {
  constructor () {
    'ngInject';

    this.login = '';
    this.password = '';
    this.submit = function() {
        this.submitHandler({
          login: this.login,
          password: this.password
        });
    }
  }
}
