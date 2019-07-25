// Custom implementation of Object.create
function createObject(parent) {
    function F() {}
    F.prototype = parent
    return new F()
}
