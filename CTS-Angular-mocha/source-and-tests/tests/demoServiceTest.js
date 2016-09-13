describe("Unit testing Service", function () {
    beforeEach(module("demoApp"));

    it("service test", inject(function (_demoSvc_) {
        assert.equal(2, _demoSvc_.getDetails().length)
    }));
});
