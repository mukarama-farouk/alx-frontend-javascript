import listOfStudents from "./9-hoisting.js";
import studentsList from './9-hoisting';

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)
