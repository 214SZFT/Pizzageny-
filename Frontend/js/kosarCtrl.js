app.controller('kosarCtrl',function($scope,$rootScope,dbFactory)
{
    $scope.values=[
        {id:1,db:3},
        {id:2,db:2},
        {id:3,db:1},
        {id:1,db:3},
    ];
    console.log($scope.values);
    localStorage.setItem('rendelesek',JSON.stringify($scope.values));
})