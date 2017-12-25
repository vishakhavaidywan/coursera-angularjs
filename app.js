(function () {
    'use strict'; // this is a change for git demo
    angular.module("NameCalculator", [])
    .controller('NameCalculatorCtrl', function ($scope) {
        $scope.name = '';
        $scope.totalVal = 0;

        $scope.displayNumeric = function(){
            var totalNameValue = calculateNumericForString($scope.name);
            $scope.totalVal = totalNameValue;
        }

        function calculateNumericForString(string) {
            var totalStringVal = 0;
            for(var i=0; i< string.length; i++){
                totalStringVal += string.charCodeAt(i);
            }
            return totalStringVal;
        }
    });
})();