(function () {
    angular.module("demoApp", []);

    angular.module("demoApp")
        .controller("myCtrl", function ($scope) {
            $scope.countries = ["india", "US"];
            $scope.name="kiran";
        
        $scope.addCountry = function(country){
          $scope.countries.push(country);  
        };
          
        });

    angular.module("demoApp")
        .service("demoSvc", function () {
            this.getDetails = function () {
                return ["kiran", "Balaji"];
            }
        });
   angular.module("demoApp")
        .directive('demoDir', function() {
  return{
      template:"<span>This span is appended from directive.</span><label>{{name}}</label>",
      link:function(scope,element,attrs){
          console.log(scope);
      }
  };
});

})();
