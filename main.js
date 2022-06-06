import angular from 'angular'

const  app = angular.module('app', []);
app.controller('TodoCtrl', function($scope) {
  $scope.todos = [
    {text:'learn angular', done:false},
    {text:'build an angular app', done:false}];

  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.markItemCompleted = function(todoText) {
    console.log("todoText parameter in markItemCompleted : ", todoText)
    var index = $scope.todos.findIndex((item,index)=> { return (item.text === todoText) })
    console.log(index)
    $scope.todos[index].done = !$scope.todos[index].done
    $scope.$apply()
  };

  $scope.student = {
    firstName: '',
    lastName: '',
    mobile: ''
  };
  // copy of student object
  $scope.details = {
    firstName: '',
    lastName: '',
    mobile: ''
  };
  $scope.submitForm = function (){
    $scope.details = angular.copy($scope.student)
  };
  $scope.approved = null;
  // when approve button clicked on react comp
  $scope.approveDetails = function() {
    $scope.approved = true
    $scope.$apply()
  };
  // when reject button clicked on react comp
  $scope.rejectDetails = function() {
    $scope.approved = false;
    $scope.$apply()
  };
  $scope.street = '';
  $scope.city = '';
  $scope.country = '';
  // get data from react
  $scope.sendValues = function(values) {
    console.log("values: ", values)
    $scope.street = values.street;
    $scope.city = values.city;
    $scope.country = values.country;
    $scope.$apply()
  };

})


export default app;