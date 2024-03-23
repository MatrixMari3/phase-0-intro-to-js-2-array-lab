
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    return [...cats,name];
}

function prependCat(name){
    return ["Arnold", ...cats];
}

function removeLastCat(name){
    const newCats = cats.slice();
    newCats.pop();
    return newCats;
}

function removeFirstCat(name){
    const newCats = [...cats];
    newCats.shift();
    return newCats;
}