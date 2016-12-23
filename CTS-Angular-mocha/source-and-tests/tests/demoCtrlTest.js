//Describe what you are doing.
describe("Unit Testing Demo Contrller",function(){
    var scope;
    //Instantiate the module before each unit test.
    beforeEach(function(){
        module("demoApp");
        console.log("module created");
    });
    //Instatiate the controller
    beforeEach(inject(function($controller,$rootScope){
        scope = $rootScope.$new();
        var ctrl = $controller("myCtrl", {
            $scope: scope
        });
    }));

    it("TESTCase-1",function(){
        
         assert.equal(2,scope.countries.length);
    });
      it("TESTCase-2",function(){
        scope.addCountry("UK");
         assert.equal(3,scope.countries.length);
    });
});
