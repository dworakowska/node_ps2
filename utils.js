function uniq(tab) {
    const result = [];

    for (let i = 0; i < tab.length; i++) {

        if (result.indexOf(tab[i]) === -1) {
            result.push(tab[i]);
        }
    }
    return result;
}

function diff(a, b) {
    const result = [];

    a.forEach(function (element) {
        if (b.indexOf(element) === -1) {
            result.push(element);
        }
    });

    return result;
}




module.exports = {
    uniq: uniq,
    diff: diff
};