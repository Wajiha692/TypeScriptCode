class Person{

    public name: string;
    public age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age= age;
    }
 
    public get getName() : string {
        return this.name;
    }
     
}
class Student extends Person{
    public rollNumber: number;
    public courses: string[];

    constructor(name: string, age: number, rollNumber: number, courses: string[]){
        super(name, age)
        this.rollNumber = rollNumber;
        this.courses = courses;
    }
    registerForCourses(){

    }
}
class Instructor extends Person{
    private _salary: number;
    public courses: string[];

    constructor(name: string, age: number, _salary: number, courses: string[]){
        super(name, age)
        this._salary = _salary;
        this.courses = courses;
    }
    assignCourse(){

    }
}

class Course{
    public id: number;
    public courseName: string;
    public students: string[];
    public instructor: string[];

    constructor(
        id: number,
        courseName: string,
        students: string[],
        instructor: string[]){
        
            this.id = id;
            this.courseName = courseName;
            this.students = students;
            this.instructor = instructor;
        }
        addStudent(){

        }
        
       setInstructor() {
            
        }
        
}

class Department{
    public departmentName: string;
    public courses: string[];

    constructor(departmentName: string, courses: string[]){
        this.departmentName = departmentName;
        this.courses = courses;
    }
    addStudent(){

    }
}
let student1 = new Student("Wajiha", 21, 52023, ["ICT", "Web"])
console.log(student1);
let teacher1 = new Instructor("Israr Ali", 55, 50000, ["ICT", "DCCN"]);
console.log(teacher1);
