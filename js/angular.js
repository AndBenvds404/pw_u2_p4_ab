const app = angular.module('myAppAngular', [])
        .controller('HolaMundoCtrl', function($scope) {
            $scope.mensaje = 'Hola Mundo con Angular';
        });