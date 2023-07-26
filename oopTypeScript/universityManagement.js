var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, rollNumber, courses) {
        var _this = _super.call(this, name, age) || this;
        _this.rollNumber = rollNumber;
        _this.courses = courses;
        return _this;
    }
    Student.prototype.registerForCourses = function () {
    };
    return Student;
}(Person));
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(name, age, _salary, courses) {
        var _this = _super.call(this, name, age) || this;
        _this._salary = _salary;
        _this.courses = courses;
        return _this;
    }
    Instructor.prototype.assignCourse = function () {
    };
    return Instructor;
}(Person));
var Course = /** @class */ (function () {
    function Course(id, courseName, students, instructor) {
        this.id = id;
        this.courseName = courseName;
        this.students = students;
        this.instructor = instructor;
    }
    Course.prototype.addStudent = function () {
    };
    Course.prototype.setInstructor = function () {
    };
    return Course;
}());
var Department = /** @class */ (function () {
    function Department(departmentName, courses) {
        this.departmentName = departmentName;
        this.courses = courses;
    }
    Department.prototype.addStudent = function () {
    };
    return Department;
}());
var student1 = new Student("Wajiha", 21, 52023, ["ICT", "Web"]);
console.log(student1);
var teacher1 = new Instructor("Israr Ali", 55, 50000, ["ICT", "DCCN"]);
console.log(teacher1);
