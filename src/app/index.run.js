export function runBlock ($log, $rootScope, $state) {
  'ngInject';
  const onStateChangeError = $rootScope.$on('$stateChangeError', function (evt, toState, toParams, fromState, fromParams, error) {
      error = error || {};
      $log.debug('$stateChangeError', arguments);
      $state.go(error.redirectTo || 'home');
  });
  $rootScope.$on('$destroy', onStateChangeError);
}
