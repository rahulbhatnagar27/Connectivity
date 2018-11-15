var app = angular.module("myApp").factory("UserService", [
  "$http",
  function ($http) {
    return {
      get: function () {
        return $http.get("http://192.168.1.34:8085/users/alldetails");
      },
      create: function (userData) {
        return $http.post("http://192.168.1.34:8085/users/ucreate", userData);
      },
      update: function (userObj) {
        return $http.patch(
          "http://192.168.1.34:8085/users/update/" + userObj.userId,
          userObj
        );
      },
      delete: function (userId) {
        return $http.delete("http://192.168.1.34:8085/users/delete/" + userId);
      }
    };
  }
]);
