"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTeacher = void 0;
function printTeacher(firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
}
exports.printTeacher = printTeacher;
console.log(printTeacher('John', 'Doe'));
console.log(printTeacher('Mukarama', 'Farouk'));
console.log(printTeacher('Smith', 'Wood'));
