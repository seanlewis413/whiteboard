var app = angular.module('blackboardApp', []);

app.controller('mainController', function($scope){
  $scope.posts = [];
  $scope.newPost = {created_by: '', text: '', created_at: ''};
  
  $scope.post = function(){
    $scope.newPost.created_at = Date.now();
    if ($scope.newPost.created_by!="") {
    	$scope.newPost.created_by= "by " + $scope.newPost.created_by
    }
    $scope.posts.push($scope.newPost);
    $scope.newPost = {created_by: '', text: '', created_at: ''};
  };
});