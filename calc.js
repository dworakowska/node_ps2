
function add(a, b, callback) {
    let result = a + b;
    callback(result)
}

function sub(a, b, callback) {
    let result = a - b;
    callback(result);
}

function multi(a, b, callback) {
    let result = a * b;
    callback(result);
}

function div(a, b, callback) {
    let result = a / b;
    callback(result);
}

module.exports = {
    add: add,
    sub: sub,
    multi: multi,
    div: div,
};