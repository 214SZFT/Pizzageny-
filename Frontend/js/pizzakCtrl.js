
app.controller('mainCtrl', function($scope, $rootScope, dbFactory) {
    $scope.feedback = '';
    $scope.records = [];
    dbFactory.selectAll('pizzak').then(function(res) {
        $scope.records = res.data;
    });

    $scope.newRecord = function() {
        $scope.record = [];
        $rootScope.mode = 1;
        $scope.modalTitle = "Új pizza felvétele";
        $scope.buttonText = "Felvesz";
        $scope.buttonColor = "success";
    }


    $scope.updateRecord = function(id) {
        $rootScope.mode = 2;
        $scope.modalTitle = "Pizza feltételeinek módosítása";
        $scope.buttonText = "Módosít";
        $scope.buttonColor = "warning";

        dbFactory.select('pizzak', 'id=' + id).then(function(res) {
            $scope.record = res.data;
        })
    }

    $scope.deleteRecord = function(id) {
        $rootScope.mode = 3;
        $scope.modalTitle = "Pizza törlése";
        $scope.buttonText = "Töröl";
        $scope.buttonColor = "danger";

        dbFactory.select('pizzak', 'id=' + id).then(function(res) {
            $scope.record = res.data;
        })
    }



    $scope.crud = function() {
        if ($scope.mode == 1) {

            let values = {
                nev: "'" + $scope.record.nev + "'",
                feltet: "'" + $scope.record.feltet + "'",
                kaloria: "'" + $scope.record.kaloria + "'",
                ar: $scope.record.ar,
            }

            dbFactory.insert('pizzak', values).then(function(res) {
                $scope.feedback = res.data.message;
            });

            $scope.records.push($scope.record);
            $scope.record = [];
        }

        if ($scope.mode == 2) {

            let values = {
                nev: "'" + $scope.record.nev + "'",
                feltet: "'" + $scope.record.feltet + "'",
                kaloria: "'" + $scope.record.kaloria + "'",
                ar: $scope.record.ar,
            }

            let id = $scope.record.ID;

            dbFactory.update('pizzak', id, values).then(function(res) {
                $scope.feedback = res.data.message;

                let index = $scope.records.findIndex(item => item.ID === id);
                $scope.records[index] = $scope.record;
                $scope.record = [];

            });

        }

        if ($scope.mode == 3) {
            dbFactory.delete('pizzak', $scope.record.ID).then(function(res) {
                $scope.feedback = res.data.message;
                let index = $scope.records.findIndex(item => item.ID === $scope.record.ID);
                $scope.records.splice(index, 1);
                $scope.record = [];
            });
        }

    }
});