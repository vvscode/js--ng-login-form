export class MainController {
  constructor (users, $state) {
    'ngInject';

    this.authState = users.getAuthState();

    this.onSubmit = (login, password) => users.login(login, password)
      .then(() => $state.go('success'))
      .catch(() => $state.go('error'));
  }
}
