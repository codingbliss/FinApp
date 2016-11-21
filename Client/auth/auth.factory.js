function AuthInterceptor($rootScope, $q, AUTH_EVENTS) {
  return {
    responseError: function (response) {
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated,
      }[response.status], response);
      return $q.reject(response);
    }
  };
}

AuthInterceptor.$inject = ['$rootScope','$q', 'AUTH_EVENTS'];

export default AuthInterceptor;