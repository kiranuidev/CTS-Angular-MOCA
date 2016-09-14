describe("Unit testing demoCtrl", function () {
    beforeEach(module("demoApp"));

    it("test country list", inject(function ($controller, $rootScope) {
        var scope = $rootScope.$new();
        var ctrl = $controller("myCtrl", {
            $scope: scope
        });
        assert.equal(2, scope.countries.length);
        /* $httpBackend.when("GET", "api/getDetails")
             .respond(["kiran", "rupalee", "balaji"]);

         var ctrl = $controller("myCtrl", {
             $scope: scope
         });
         $httpBackend.flush();
         scope.userInformation.should.contain("kiran");*/
    }));
});
