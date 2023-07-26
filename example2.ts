let nickNames = ["Imran", "Alexander", "Alex", "Alexander the Great"];
let preferences = [1,2,3];

function logNames(greeting:string, ...nicknames: (string | number)[]){
    for(const nickname of nicknames)
{
    console.log(`${greeting} ${nickname}`);    

}}
logNames("Hello", ...nickNames);
logNames("hey", ...preferences);