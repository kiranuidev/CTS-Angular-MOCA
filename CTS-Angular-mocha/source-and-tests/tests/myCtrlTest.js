describe("Unit testing demoCtrl", function () {
    var scope, ctrl;
    beforeEach(module("demoApp"));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        scope.messageFromTest = "Hey  unit test";
        var ctrl = $controller("myCtrl", {
            $scope: scope
        });
    }));
    it("test country list", function () {
        assert.equal(2, scope.countries.length);
    });
    it("test addCountry", function () {
        scope.addCountry("UK");
        assert.equal(3, scope.countries.length);
    });
});
