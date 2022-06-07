function greeter(person) {
    return "Hello, ".concat(person);
}
// let person: number = 5;
var person = 5; //'Joe Biden'; // {name: 'Joe Biden'};
person = 5;
person = 'Joe Biden';
document.body.innerHTML = greeter(person);
var president;
president = 'Donald Trump';
function greeter2(person) {
    return "Hello, ".concat(person.firstName, " ").concat(person.lastName);
}
var potus = {
    firstName: 'Joe'
};
potus.age = 99;
console.log(potus);
//document.body.innerHTML = greeter2(potus);
var Student = /** @class */ (function () {
    /*firstName: string;
    lastName: string;
    age: number;
    private ssn: string;*/
    function Student(firstName, lastName, age, ssn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.ssn = ssn;
        /*this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.ssn = ssn;*/
    }
    Student.prototype.print = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName).concat(this.age, " ").concat(this.ssn));
    };
    Student.prototype.getGrades = function () {
        return [1, 2, 3];
    };
    return Student;
}());
var student = new Student('Joe', 'Biden', 99, '123-45-6789');
//student.firstName = 'Joe';
//student.lastName = 'Biden';
document.body.innerHTML = greeter2(student);
student.print();
console.log(student.ssn);
var grades = student.getGrades();
grades.push('foo');
function removeFromArray(array, index) {
    array.splice(index, 1);
    return array;
}
var objs = removeFromArray([{}, {}, {}], 1);
var numbers = [1, 2, 3];
numbers.push('foo');
var numbers2 = removeFromArray(numbers, 2);
numbers2.push('foo');
console.log(numbers2);
var strings = ['foo', 'bar', 'baz'];
//strings.push(5);
var strings2 = removeFromArray(strings, 1);
strings2.push(5);
console.log(strings2);
