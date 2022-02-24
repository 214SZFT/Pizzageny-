app.controller('pizzaCtrl',function($scope,$rootScope,dbFactory)
{
    $scope.pizzak = [];
    dbFactory.selectAll('pizzak').then(function(res) {
        $scope.pizzak = res.data;
    });
})