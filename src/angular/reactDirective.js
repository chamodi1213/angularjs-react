import app from '../../main'
import React from "react";
import ReactDOM from "react-dom"
import AppComp from "../react/AppComp"

// will be called in index.html as react-directive
const reactDirective = app.directive('reactDirective', function() {
  return {
      template: '<div id="reactapp"></div>',
      scope: {
        todos: '=',
        markComplete:'&',
        details: '=',
        approveDetails: '&',
        rejectDetails: '&',
        sendValues: '&',
      },
      link: function(scope, el, attrs){
            scope.newItem = (value) => {alert (value)}
            const reactapp = document.getElementById('reactapp')
            // watch changes to scope.details
            scope.$watch('details', function(newValue, oldValue) {
                if (angular.isDefined(newValue)) {
                 ReactDOM.render(
                    <AppComp details={newValue} todos={scope.todos} newItem={scope.newItem} 
                    markComplete={scope.markComplete} 
                    approveDetails={scope.approveDetails}
                    rejectDetails={scope.rejectDetails}
                    sendValues={scope.sendValues}/>
                    , reactapp);
                    console.log("details newValue", newValue)
                }
            }, true);
            // watch changes to scope.todos
            scope.$watch('todos', function(newValue, oldValue) {
                if (angular.isDefined(newValue)) {
                 ReactDOM.render(
                    <AppComp todos={newValue} details={scope.details} newItem={scope.newItem} 
                    markComplete={scope.markComplete} 
                    approveDetails={scope.approveDetails}
                    rejectDetails={scope.rejectDetails}
                    sendValues={scope.sendValues}/>
                    , reactapp);
                    console.log("todos newValue", newValue)
                }
            }, true);

        }
    }
})

export default reactDirective
