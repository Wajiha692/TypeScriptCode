function hello(name: string){
    console.log(`Hello ${name}`);
}
hello("Wajiha");

function optional(name: string, nameInPak?: string){
    console.log(`hello ${name} ${nameInPak}`);
}
optional("ALexander")  

function defaultfun(name="wajiha"){
    console.log( `hello ${name}`);
}
defaultfun();
defaultfun("ali");
defaultfun();

function returnhello(name = "wajiha"){
    return name
}
returnhello()

