
describe('sum', function () {
    it('sum([1, 2, 3, 4]) should return 10', function () {
        assert.equal(10, sum([1, 2, 3, 4]));
    });
});

describe('multiply', function () {
    it('multiply([1, 2, 3, 4]) should return 24', function () {
        assert.equal(24, multiply([1, 2, 3, 4]));
    });
});

describe('reverse', function () {
    it('reverse("jag testar") should return "ratset gaj"', function () {
        assert.equal('ratset gaj', reverse("jag testar"));
    });
});

describe('filterLongWords', function () {
    it("filterLongWords(['I', 'am', 'Spider', 'Man'], 2) should return ['Spider', 'Man']", function () {
        assert.deepEqual(['Spider', 'Man'], filterLongWords(['I', 'am', 'Spider', 'Man'], 2));
    })
});
