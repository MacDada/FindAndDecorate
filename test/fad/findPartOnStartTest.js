(function() {
    module('fad.findPartOnStart()');

    var fpos = fad.findPartOnStart;

    test('same is found', function() {
        equal('abc', fpos('abc', 'abc'));
    });

    test('is found on start', function() {
        equal('abc', fpos('abc', 'abcde'));
        equal('end.', fpos('end.', 'end. Some more stuff!'));
    });

    test('same start', function() {
        equal('ab', fpos('abcd', 'ab'));
        equal('ab', fpos('abcd', 'abxyz'));
    });

    test('not found', function() {
        strictEqual(false, fpos('abc', ''));
        strictEqual(false, fpos('abc', 'def'));
        strictEqual(false, fpos('bcde', 'abcdef'));
        strictEqual(false, fpos('bcdef', 'abcdef'));
    });

    test('errors on invalid arguments', function() {
        throws(function() {
            fpos();
        });
        throws(function() {
            fpos(true, 'abc');
        });
        throws(function() {
            fpos('abc', true);
        });
        throws(function() {
            fpos('', '');
        });
        throws(function() {
            fpos('', 'abc');
        });
    });
})();
