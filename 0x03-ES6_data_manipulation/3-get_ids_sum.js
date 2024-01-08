export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((acc, student) => {
    return acc + student.id
  }, 0);
}
