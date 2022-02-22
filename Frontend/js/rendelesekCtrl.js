app.controller('rendelesekCtrl', ($scope, $rootScope, dbFactory)=>{

    $scope.records = [];
    dbFactory.selectAll('rendelesek').then(function(res) {
        $scope.records = res.data;
    });
    
    $scope.megjelenit = (id)=>{
        console.log(id);
        $scope.pizzak = [];
        dbFactory.select('rendelesreszletek').then((res)=>{
            console.log(res.data);
            $scope.pizzak = res.data
        })
    }

})