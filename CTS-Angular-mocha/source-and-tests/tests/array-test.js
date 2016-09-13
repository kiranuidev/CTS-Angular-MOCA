describe("Array Functionality", function () {

    describe("indexOf()", function () {
        it("should return -1 when theris no data", function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(2, [1, 2, 3].indexOf(3));
        });

    })

});
