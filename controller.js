var app = angular.module("myApp", []).controller("myCtrl", [
  "$scope",
  "UserService",
  function($scope, UserService){

    $scope.userObj = {};
    $scope.showgridView = true;
    $scope.showlistView = false;

    $scope.init = function(){
      UserService.get($scope.userObj).then(function(response){
        $scope.userData = response.data;
      });
    };
      $scope.createUser = function() {
      UserService.create($scope.userObj).then(function(response){
        alert("User Created Successfully");
        $scope.init();
      });
    };

    $scope.updateData = function(index){
      $scope.selectedIndex = index;
      $scope.checkUser();
      $scope.updatinguser = false;
      $scope.makingUser = false;
      $scope.userObj= $scope.userData[index];
    };

    $scope.deleteData = function(userObj){
      console.log(userObj);
      UserService.delete(userObj._id).then(function(response){
        alert("Are you sure you want to Delete");
        $scope.init();
      });
    };

    $scope.openModal = function(){
      $scope.userObj = {};
      $scope.makingUser = true;
      $scope.updatinguser = true;
    };

    $scope.updateUser = function(userObj){
      UserService.update(userObj._id).then(function(response){
        $scope.init();
      });
    };
    $scope.checkUser = function(){
      $("#modalLoginForm").modal();
    };
    
    $scope.gridView = function(){
      $scope.showgridView = true;
      $scope.showlistView = false;
    };
    $scope.listView = function(){
      $scope.showlistView = true;
      $scope.showgridView = false;
    };
  }
]);
