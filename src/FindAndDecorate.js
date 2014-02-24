var fad = {};

/**
 * @param {String} find
 * @param {String} searchIn
 * @returns {Boolean}
 */
fad.findPartOnStart = function(find, searchIn) {
    console.log('fad.findPartOnStart(): find, searchIn:', find, searchIn);

    if ('string' !== typeof find || 'string' !== typeof searchIn) {
        throw 'InvalidArgumentException: expected String: find or searchIn';
    }

    var findLength = find.length;

    if (0 === findLength) {
        throw 'InvalidArgumentException';
    }

    for (var i = 0; i < findLength; i++) {
        var partToFind = find.substr(0, findLength - i);

        console.log('fad.findPartOnStart(): partToFind:', partToFind);

        if (searchIn.startsWith(partToFind)) {
            return partToFind;
        }
    }

    return false;
};

/**
 * @param {String} find
 * @param {String} searchIn
 * @returns {Boolean}
 */
fad.findPartOnEnd = function(find, searchIn) {
    console.log('fad.findPartOnEnd(): find, searchIn:', find, searchIn);

    if ('string' !== typeof find || 'string' !== typeof searchIn) {
        throw 'InvalidArgumentException: expected String: find or searchIn';
    }

    var findLength = find.length;

    if (0 === findLength) {
        throw 'InvalidArgumentException';
    }

    for (var i = 0; i < findLength; i++) {
        var partToFind = find.substr(0, findLength - i);

        console.log('fad.findPartOnEnd(): partToFind:', partToFind);

        if (searchIn.endsWith(partToFind)) {
            return partToFind;
        }
    }

    return false;
};

/**
 * @param {String}  find
 * @param {Array}   searchIn
 * @param {Integer} start (optional)
 * @returns {Boolean}
 */
fad.contains = function(find, searchIn, start) {
    console.log(
        'fad.contains(): find, searchIn:',
        find, searchIn
    );

    if ("undefined" === typeof start) {
        start = 0;
    }

    if ('number' !== typeof start || 0 !== (start % 1)) {
        throw 'InvalidArgumentException: expected Integer: start'
    }

    var alreadyFound = '';
    var stillToFind = find;
    var foundPart;
    var searchInLength = searchIn.length;

    for (var i = start; i < searchInLength; i++) {
        console.log(
            'fad.contains(): i, alreadyFound, stillToFind:',
            i, alreadyFound, stillToFind
        );

        if ('' === alreadyFound) {
            if (searchIn[i].contains(stillToFind)) {
                // found all inside current node
                return true;
            }

            foundPart = fad.findPartOnEnd(stillToFind, searchIn[i]);

            console.log(
                'fad.contains(): foundPart:',
                foundPart
            );

            if (false === foundPart) {
                continue;
            }
        } else {
            foundPart = fad.findPartOnStart(stillToFind, searchIn[i]);

            console.log(
                'fad.contains(): foundPart:',
                foundPart
            );

            // powinniśmy byli znaleźć kontynuację, a nie znaleźliśmy :(
            if (false === foundPart) {
                if (start < searchInLength) {
                    console.log();

                    return fad.contains(find, searchIn, start + 1);
                } else {
                    return false;
                }
            }
        }

        alreadyFound += foundPart;

        if (alreadyFound === find) {
            return true;
        }

        stillToFind = find.substring(alreadyFound.length);
    }

    return false;
};
