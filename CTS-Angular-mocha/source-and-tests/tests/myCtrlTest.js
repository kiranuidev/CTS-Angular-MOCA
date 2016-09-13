describe("Unit testing demoCtrl", function () {
    beforeEach(module("demoApp"));

    it("ctrl.user should exist", inject(function ($controller, $rootScope, $httpBackend) {
        var scope = $rootScope.$new()
        $httpBackend.when("GET", "api/getDetails")
            .respond(["kiran", "rupalee", "balaji"]);

        var ctrl = $controller("myCtrl", {
            $scope: scope
        });
        $httpBackend.flush();
        scope.userInformation.should.contain("kiran");
    }));
});
