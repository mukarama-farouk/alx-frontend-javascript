export default function createEmployeesObject(departmentName, employees) {
  const infor = {
    [departmentName]: [...employees],
  };
  return infor;
}
