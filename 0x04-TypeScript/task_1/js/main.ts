export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; 
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export function printTeacher(firstName:string, lastName:string): string {
    return `${firstName[0]}. ${lastName}`;

}

export interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}

console.log(printTeacher('John', 'Doe'));
console.log(printTeacher('Mukarama', 'Farouk'));
console.log(printTeacher('Smith', 'Wood'));

export interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

export interface StudentClass{
    workOnHomework(): string;
    displayName(): string;
}

const StudentClass: StudentClassConstructor = class StudentClassImplement implements StudentClass {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }
    
      displayName(): string {
        return this.firstName;
    }

}