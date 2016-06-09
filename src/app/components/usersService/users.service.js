export class UsersService {
  constructor ($log, $http, $q) {
    'ngInject';

    this._$log = $log;
    this._$http = $http;
    this._$q = $q;

    this._currentUser = null;
    this._usersUrl = '/fake-api/users.json';
    this._authState = { };
  }

  checkCredentials(login, password) {
    return this._$http
      .get(this._usersUrl)
      .then((resp) => {
        const user = resp.data.users.find((item) => item.password === password && item.login === login);
        if (!user) {
          const error = `No user with login "${login}" and password "${password}" found`;
          this._$log.warn(error);
          return this._$q.reject(error);
        }
        return user;
      });
  }

  login(login, password) {
    return this.checkCredentials(login, password)
      .then((user) => {
        this._currentUser = user;
        this._authState.isAuthentificated = true;
      })
  }

  logout() {
    this._currentUser = null;
    this._authState.isAuthentificated = false;
    return this._$q.resolve();
  }

  isAuthentificated() {
    return this._$q.resolve(!!this._currentUser);
  }

  getAuthState() {
    return  this._authState;
  }
}
