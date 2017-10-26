var app = angular.module('blackboardApp', []);

function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

app.controller('mainController', function($scope){
  $scope.posts = [];
  $scope.newPost = {created_by: '', text: '', created_at: ''};
  
  $scope.post = function(){
    $scope.newPost.created_at = Date.now();
    if ($scope.newPost.created_by!="") {
    	$scope.newPost.created_by= "by " + jsUcfirst($scope.newPost.created_by)
    }
    $scope.newPost.text = jsUcfirst($scope.newPost.text)
    $scope.posts.push($scope.newPost);
    $scope.newPost = {created_by: '', text: '', created_at: ''};
  };
});