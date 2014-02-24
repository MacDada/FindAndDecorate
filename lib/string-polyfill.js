/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/contains#Polyfill
 */
if (!String.prototype.contains) {
    String.prototype.contains = function() {
        return -1 !== String.prototype.indexOf.apply(this, arguments);
    };
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith#See%20also
 */
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function(searchString, position) {
            position = position || 0;

            return this.indexOf(searchString, position) === position;
        }
    });
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith#Polyfill
 */
if (!String.prototype.endsWith) {
    Object.defineProperty(String.prototype, 'endsWith', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (searchString, position) {
            position = position || this.length;
            position = position - searchString.length;

            var lastIndex = this.lastIndexOf(searchString);

            return -1 !== lastIndex && lastIndex === position;
        }
    });
}
