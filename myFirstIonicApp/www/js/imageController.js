(function () {
    'use strict';

    angular.module('study').controller('imageController', ['$scope', imageController]);

    function imageController($scope) {
        
        $scope.lockers = [];      
        $scope.tableLockers = [];
        
        var locker = function(){
            var id = id,
            row = row,
            col = col,
            nome = nome;
            
            
            return {
                id: id,
                row: row,
                col: col,
                nome: nome
            }
        }
        
        $scope.loadLockers = function() {
            var id = 1;
            
            for(var row = 1; row < 4; row++) {
                
                for (var col = 1; col < 13; col++) {
                    var newLocker = new locker();
                    
                    newLocker.id = id;    
                    newLocker.col = col;
                    newLocker.row = row;
                    newLocker.nome = "Row: " + row + "Col: " + col;                    
                
                    $scope.lockers.push(newLocker);
                    
                    id++;    
                }                                
                
            }
            
            var groupArray = function groupBy( array , f )
            {
              console.log(array);                  
              var groups = {};
              array.forEach( function( o )
              {
                var group = JSON.stringify( f(o) );
                groups[group] = groups[group] || [];
                groups[group].push( o );  
              });
              return Object.keys(groups).map( function( group )
              {
                return groups[group]; 
              })
            }
            
            console.log($scope.lockers);
            
            var result = groupArray($scope.lockers, function(item)
            {
              return [item.row];
            });
            
            $scope.tableLockers = result;
            console.log(result);
        }     
        
        
        $scope.alugandoLocker = function(lockerId){
            console.log(lockerId);
        }
        
    }

})();

