var app = angular.module("myApp",[]);
var x;
app.controller('myCtrl',function($scope){
    $scope.firstname = 'Osama';
    $scope.lastname = 'Bin Junaid'.toUpperCase();
});
app.run(function($rootScope){
    $rootScope.color = "blue";
})
app.controller("priceController",function($scope){
    $scope.quantity = 10;
    $scope.price = 5;
    $scope.total = function () { return ($scope.quantity * $scope.price) };
})
// app.controller('myWelcome',function($scope,$http){
//     $http.get("test.json")
//     .then(function (response){
//         $scope.welcomeMsg = response.statusText;
//         $scope.header = response.headers();
//         $scope.config = response.config.toString();
//     },function(response){
//         $scope.welcomeMsg = response.statusText;
//         $scope.header = response.headers()["date"];
//     }
// )});

app.controller("checkboxCtrl",function($scope){
    $scope.names = ["Emil", "Tobias", "Linus"];
})

app.controller("serverCtrl",function($scope,$http){
    $http.get("https://my-json-server.typicode.com/typicode/demo/db")
    .then(function(response){
            $scope.post = response.data;
            console.log(response.statusText);
    },function(err){
            console.log("An Error Occured");
            err.statusText;
    }
)});

app.controller("tcAccept",function($scope){
    $scope.isClicked=true;
    $scope.clik = function(evnt){
        console.log(evnt.path.toString());
        $scope.isClicked = ! $scope.isClicked;
    }
})

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'https://tryit.w3schools.com/**'
  ]);
});
