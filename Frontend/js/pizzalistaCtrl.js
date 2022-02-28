app.controller('pizzaCtrl',function($scope,$rootScope,dbFactory)
{
    $scope.pizzak = [];
    $scope.szam=[];
    $scope.rendelesek=[];
    dbFactory.selectAll('pizzak').then(function(res) {
        $scope.pizzak = res.data;
    });
    
})