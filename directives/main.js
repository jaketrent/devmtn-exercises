angular.module('app', [])

angular.module('app').directive('dvColor', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element[0].setAttribute('style', 'color: ' + attrs.dvColor)
    }
  }
})

angular.module('app').controller('TableCtrl', function ($scope) {
  $scope.feedNumbers = [1, 2, 3, 5, 7, 11]
})

angular.module('app').directive('dvTable', function () {
  return {
    restrict: 'E',
    scope: {
      numbers: '='
    },
    templateUrl: 'table.html'
  }
})