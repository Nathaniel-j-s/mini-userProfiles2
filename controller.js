angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.currentPage = 1;

  $scope.getUsers = function() {
  	mainService.getUsers($scope.currentPage).then(function(response) {
      $scope.users = response.data.data;
    });
  }

  $scope.prev = function() {
    $scope.currentPage--;
    if ($scope.currentPage < 1) {
      $scope.currentPage = 1;
    };
    $scope.getUsers();
  };
  $scope.next = function() {
    $scope.currentPage++;
    if ($scope.currentPage > 4) {
      $scope.currentPage = 4;
    };
    $scope.getUsers();
  };

  $scope.getUsers();

});
