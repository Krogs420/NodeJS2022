

//Hoisting
console.log(add(5, 28))

//Gets hoisting
function add (a, b) {
    return a + b;
}

const addAnonymousFunction = function (a, b) {
    return a + b;
}

const addArrowFunction = (a, b) => {
    return a + b;
}

const arrowFunctionCompact = (a, b) => a + b;

console.log(addArrowFunction(3, 6));
console.log(arrowFunctionCompact(3, 6));

console.log(addAnonymousFunction(3, 6));

function genericActionExecutor(anyCallbackFunction, name) {
    return anyCallbackFunction(name);
}

const spitting = (name) => `${name} is spitting.`;
console.log(genericActionExecutor(spitting, "Amanda"));

const shooting = (name) => `${name} is shooting.`;
console.log(genericActionExecutor(shooting, "Malte"));

console.log(genericActionExecutor((name) => `${name}`, "is running away", name));