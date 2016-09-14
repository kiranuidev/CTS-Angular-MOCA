(function () {
    angular.module("demoApp", []);

    angular.module("demoApp")
        .controller("myCtrl", function ($scope) {
            $scope.countries = ["india", "US"];
           /* $http.get("api/getDetails")
     .success(function (response) {
         $scope.userInformation = response;
     });*/
        });

    angular.module("demoApp")
        .service("demoSvc", function () {
            this.getDetails = function () {
                return ["kiran", "Balaji"];
            }
        })
})();
