(function() {
    module('fad.findPartOnEnd()');

    var fpoe = fad.findPartOnEnd;

    test('same is found', function() {
        equal('abc', fpoe('abc', 'abc'));
    });

    test('is found on end', function() {
        equal('cde', fpoe('cde', 'abcde'));
        equal('want this', fpoe('want this', 'I want this'));
    });

    test('not found', function() {
        strictEqual(false, fpoe('abc', ''));
    });

    test('errors on invalid arguments', function() {
        throws(function() {
            fpoe();
        });
        throws(function() {
            fpoe(true, 'abc');
        });
        throws(function() {
            fpoe('abc', true);
        });
        throws(function() {
            fpoe('', '');
        });
        throws(function() {
            fpoe('', 'abc');
        });
    });
})();
