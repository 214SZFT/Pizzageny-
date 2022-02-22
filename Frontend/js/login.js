app.controller('loginCtrl', function($scope, $rootScope, dbFactory) {
    $scope.login=function () {
        
        if ($scope.nev==null || $scope.jelszo==null) {
            alert('Nem adtad meg a belépési adatokat!');
        }
        else
        {
            dbFactory.select('felhasznalok', 'nev="'+$scope.nev+'" AND jelszo="'+CryptoJS.SHA1($scope.jelszo)+'"')
            .then(function (response) {
                $scope.users=response.data;
                if ($scope.users.length==0) {
                    alert("Hibás belépési adatok!");
                } else {
                    sessionStorage.setItem('uID', $scope.users.ID);
                    sessionStorage.setItem('uName',$scope.users.nev);
                    $rootScope.loggedIn=1;
                    $rootScope.userName=$scope.users.nev;
                    console.log("Belépés sikerült!");
                    alert("Belépés sikerült!");
                }    
            })
        }
    }
    $scope.logout=function () {
        sessionStorage.removeItem('uID');
        sessionStorage.removeItem('uName');
        $rootScope.loggedIn=0;
        $rootScope.userName="";
    }
});