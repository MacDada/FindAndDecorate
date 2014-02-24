(function() {
    module('fad.contains() flat');

    var c = fad.contains;

    test('found in equal node', function() {
       ok(c('hello', ['hello']));
       ok(c('hello', ['hello', 'world']));
       ok(c('hello', ['say', 'hello']));
       ok(c('hello', ['say', 'hello', 'world']));
    });

    test('found in split node', function() {
       ok(c('hello', ['hel', 'lo']));
       ok(c('hello', ['hel', 'lo', 'world']));
       ok(c('hello', ['say', 'hel', 'lo']));
       ok(c('hello', ['say', 'hel', 'lo', 'world']));
    });

    test('found in extended node', function() {
        ok(c('hello', ['hello world']));
        ok(c('hello', ['say hello']));
        ok(c('hello', ['say hello world']));
    });

    test('found in extended split node', function() {
        ok(c('hello', ['hel', 'lo world']));
        ok(c('hello', ['say hel', 'lo']));
        ok(c('hello', ['say hel', 'lo world']));
        ok(c('hello', ['say h', 'el', 'lo world']));
        ok(c('hello', ['say h', 'el', 'l', 'o world']));
    });

    test('not found', function() {
        strictEqual(false, c('hello', []));
        strictEqual(false, c('hello', ['']));
        strictEqual(false, c('hello', ['a']));
        strictEqual(false, c('hello', ['hel lo']));
    });

    test('"almost" found but "there is second"', function() {
        ok(c('hello', ['hel', 'hello']));
        ok(c('hello', ['hel', 'hel', 'lo']));
        ok(c('hello', ['hel', 'l', 'hello']));
        ok(c('hello', ['hel', 'l', 'hel', 'lo']));
    });

//    module('fad.contains() recursive');
//
//    test('found in equal node', function() {
//        ok(c('hello', [['hello']]));
//    });
})();
