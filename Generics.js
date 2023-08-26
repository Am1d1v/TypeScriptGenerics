// Generics
function toArray() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    return arg;
}
toArray(1, 2, 3);
toArray('a', 'a');
