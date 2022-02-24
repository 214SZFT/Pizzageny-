app.controller('rendelesekCtrl', ($scope, $rootScope, dbFactory)=>{

    $scope.records = [];
    dbFactory.selectAll('rendelesek').then(function(res) {
        $scope.records = res.data;
    });
    
    $scope.megjelenit = (id)=>{
        console.log(id);
        $scope.pizzak = [];
        dbFactory.select('eladasreszletek', `rID = ${id}`).then((res)=>{
            $scope.pizzak = res.data;
            console.log(res.data);
        })
    }

    $scope.deleteRecord = (id)=>{
        console.log(id);
        dbFactory.delete("rendelesek", id).then((res)=>{
            console.log(res.data);
            for (let i = 0; i < $scope.records.length; i++) {
                if ($scope.records[i].ID == id) {
                    $scope.records.splice(i, 1);
                    break;
                }
            }
        });
    }

    $scope.deletePizza = ( id )=>{
        console.log(id);
        dbFactory.delete("rendelestetelek", id).then((res)=>{
            console.log(res.data);
            for (let i = 0; i < $scope.pizzak.length; i++) {
                if ($scope.pizzak[i].tetelID == id) {
                    $scope.pizzak.splice(i, 1);
                    break;
                }
            }
        });
    }

    $scope.updatePizza = (id, db)=>{
        db = document.getElementById("pizz").value;
        dbFactory.update("rendelestetelek", id, {db:db}).then((res)=>{
            console.log(res.data);
            for (let i = 0; i < $scope.pizzak.length; i++) {
                if ($scope.pizzak[i].tetelID == id) {
                    $scope.pizzak.db = db;
                    break;
                }
            }
        });
    }
})