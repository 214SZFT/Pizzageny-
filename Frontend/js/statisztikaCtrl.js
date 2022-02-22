app.controller('satisztikaCtrl', function ($scope, $rootScope, dbFactory) {
    dbFactory.selectAll('eladasok').then(function (res) {
        $scope.records = res.data;
        console.log(res.data);
    });
});
