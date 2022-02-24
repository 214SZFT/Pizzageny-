var app = new angular.module('pizzaApp', []);

app.run(function ($rootScope) {
    $rootScope.title = 'Pizza statisztika';
    $rootScope.osszosszeg=0;
});
