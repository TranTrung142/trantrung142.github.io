describe('Ex 1 - filter', function () {
    it('"This house is not nice!" should return "This house is nice!"', function () {
        assert.equal('This house is nice!', 'This house is not nice!'.filter('not'));
    });
});

describe('Ex 2 - bubbleSort', function () {
    it('[6, 4, 0, 3, -2, 1] should return [-2, 0, 1, 3, 4, 6]', function () {
        assert.deepEqual([-2, 0, 1, 3, 4, 6], [6, 4, 0, 3, -2, 1].bubbleSort());
    });
});

describe('Ex 3 - Student', function () {
    it('me.learn("Inheritance") should return "John just learned Inheritance"', function () {
        assert.equal('John just learned Inheritance', me.learn("Inheritance"));
    });
    it('teacher.teach("WAP") should return "Micheal is now teaching WAP"', function () {
        assert.equal('Micheal is now teaching WAP', teacher.teach("WAP"));
    });
});