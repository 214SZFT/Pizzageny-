app.controller('kosarCtrl',function($scope,$rootScope,dbFactory)
{
    $scope.pizzak=[];
    $scope.values=[
        {pizzaID:5,db:3},
        {pizzaID:6,db:2},
        {pizzaID:7,db:1},
        {pizzaID:5,db:3},
    ];
    dbFactory.selectAll('pizzak').then(function(res) {
        $scope.pizzak = res.data;

    $scope.kiras=[];
    for(var i=0;i<$scope.values.length;i++)
    {
        let index=$scope.pizzak.findIndex(pizza=>pizza.ID==$scope.values[i].pizzaID);
        $scope.kiras.push({nev:$scope.pizzak[index].nev,db:$scope.values[i].db});
    }
    console.log($scope.pizzak);
    localStorage.setItem('rendelesek',JSON.stringify($scope.values));
});
})