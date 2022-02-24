app.controller('satisztikaCtrl', function ($scope, $rootScope, dbFactory) {
    dbFactory.selectAll('eladasok').then(function (res) {
        $scope.records = res.data;
        console.log(res.data);
    });
});
app.controller('statCtrl', function ($scope, $rootScope, dbFactory) {
    dbFactory.selectAll('eladasok').then(function (res) {
        $scope.records = res.data;
        var szamolo=0;
        for(let i=0;i<$scope.records.length;i++){
            szamolo+=parseInt($scope.records[i].ossz);
        }
        $rootScope.osszosszeg=szamolo;
        
        console.log(res.data);
    });
});
