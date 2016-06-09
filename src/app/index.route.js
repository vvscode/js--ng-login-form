export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('success', {
      url: '/success',
      templateUrl: 'app/success/success.html',
      controller: 'SuccessController',
      controllerAs: 'success',
      resolve: {
        authentificated: ['users', '$q', function(users, $q) {
          return users
            .isAuthentificated()
            .then((result) => $q[result ? 'resolve' : 'reject'] ("It's only for nonauthentificated users"));
        }]
      }
    })
    .state('error', {
      url: '/error',
      templateUrl: 'app/error/error.html',
      controller: 'ErrorController',
      controllerAs: 'error',
      resolve: {
        authentificated: ['users', '$q', function(users, $q) {
          // For error route we should invert logic for 'success'
          return users
            .isAuthentificated()
            .then((result) => $q[result ? 'reject' : 'resolve'] ("It's only for nonauthentificated users"));
        }]
      }
    });

  $urlRouterProvider.otherwise('/');
}
