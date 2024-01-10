interface Student {
    firstName:string;
    lastName: string;
    age: number;
    location: string;
}

const studentA: Student = {
    firstName: 'Katty',
    lastName: 'Farouk',
    age: 20,
    location: 'Tamale'
}
const studentB: Student = {
    firstName: 'Muba',
    lastName: 'Farouk',
    age: 18,
    location: 'Kumasi'
}

const  studentsList: Student[] = [studentA, studentB]

const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);