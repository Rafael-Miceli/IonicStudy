(function () {
    'use strict';

    angular.module('study').controller('imageController', ['$scope', imageController]);

    function imageController($scope) {
        
        $scope.images = [];
 
        $scope.loadImages = function() {
            for(var i = 0; i < 100; i++) {
                $scope.images.push({id: i, src: "http://placehold.it/50x50"});
            }
        }
        
    }

})();

