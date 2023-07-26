function hello(name) {
    console.log("Hello ".concat(name));
}
hello("Wajiha");
function optional(name, nameInPak) {
    console.log("hello ".concat(name, " ").concat(nameInPak));
}
optional("ALexander");
function defaultfun(name) {
    if (name === void 0) { name = "wajiha"; }
    console.log("hello ".concat(name));
}
defaultfun();
defaultfun("ali");
defaultfun();
function returnhello(name) {
    if (name === void 0) { name = "wajiha"; }
    return name;
}
returnhello();
