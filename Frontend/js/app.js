var app = new angular.module('pizzaApp', []);


app.run(function($rootScope){
    $rootScope.title = "Pizzák kezelése";
    $rootScope.mode = 0;
    
});