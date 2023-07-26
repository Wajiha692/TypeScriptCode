// let teacher = {
    // name: "Wajiha",
    // experience: "10",
    // func: () => console.log("its a function"),

// }

let teacher: {name: string, exp: number} = {
    name: "Wajiha",
    exp: 10,
};
//type declaration
//in typescript we can declare object with types and
//after declaraing it we'll declare the values of declared types.
//if you enter extra data while entering the data it will give
let student:{
    name: string;
    age: number;
}
student = {
  name: "Ali",
  age: 21,
};

console.log(student["name"]);
console.log(student.age);

