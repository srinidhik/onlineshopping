var app = angular.module('StarterApp', ['ngMaterial']);

app.filter('rangeValues', function(){
  return function(input, min, max, unit) {
    min = parseInt(min); //Make string input int
    max = parseInt(max);

    var k = max-min+1;
    var i=min;
    while(k){
        input.push(i+" "+unit);
        k--;
        i++;
    }
    return input;
  };
})

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {

$scope.bone="Bone Carved Finial Curtain Rod Set";
$scope.limitNum=10;

$scope.here = function(){
    $scope.q2=$scope.q1.split(' ')[0];
    $scope.q2=$scope.q3.split(' ')[0];
}



    $scope.itemsForSale = {
        "product1":{
            "name":"Cinderella Story",
            "cost":1000,
            "img":"cinderella_book.jpg",
            "category":"book"
        },
        "product2":{
            "name":"Harry Potter Part-1",
            "cost":1000,
            "img":"harrypotter_book.jpg",
            "category":"book"
        },
        "product3":{
            "name":"Hogwarts badge",
            "cost":900,
            "img":"hogwarts_badge.jpg",
            "category":"keychain"
        },
        "product4":{
            "name":"Minion doll",
            "cost":850,
            "img":"minion.jpg",
            "category":"keychain"
        },
        "product5":{
            "name":"Elder Wand",
            "cost":900,
            "img":"elder_wand.jpg",
            "category":"keychain"
        },
        "product6":{
            "name":"Iron Man Mask",
            "cost":800,
            "img":"iron_man.jpg",
            "category":"keychain"
        },
        "product7":{
            "name":"Thor Hammer",
            "cost":900,
            "img":"thor_hammer.jpg",
            "category":"keychain"
        },
        "product8":{
            "name":"Rubiks Cube",
            "cost":850,
            "img":"rubiks_cube.jpg",
            "category":"puzzle"
        },
        "product9":{
            "name":"Triangle Cube",
            "cost":800,
            "img":"triangle_cube.jpg",
            "category":"puzzle"
        },
        "product10":{
            "name":"Silver Mirror Cube",
            "cost":750,
            "img":"silver_mirror_cube.jpg",
            "category":"puzzle"
        },
    };


}]);
