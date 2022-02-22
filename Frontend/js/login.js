var app= angular.module('LoginApp',[]);

app.run(function($rootScope, $http){
    if (sessionStorage.getItem['uID']) {
        $rootScope.loggedIn=1;
        $rootScope.userName=sessionStorage.getItem('uName');  
    }
    else{
        $rootScope.loggedIn=0;
    }
});

app.controller('loginCtrl', function($scope,$http, $rootScope) {
    $scope.login=function () {
        console.log("Valami");
        if ($scope.nev==null || $scope.jelszo==null) {
            alert('Nem adtad meg a belépési adatokat!');
        }
        else
        {
            $http({
                method:"PORST",
                url:"./Backend/getOneRecord.php",
                data:{
                    "table":"felhasznalok",
                    'felt':'nev="'+$scope.nev+'" AND jelszo="'+CryptoJS.SHA1($scope.jelszo)+'"'
                }
            })
            .then(function (response) {
                $scope.users=response.data;
                if ($scope.users.length==0) {
                    alert("Hibás belépési adatok!");
                } else {
                    sessionStorage.setItem('uID', $scope.users.ID);
                    sessionStorage.setItem('uName',$scope.users.nev);
                    $rootScope.loggedIn=1;
                    $rootScope.userName=$scope.users.nev;
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