export default function createReportObject(employeesList) {
  const reportSummary = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments: () => {
      const departments = Object.keys(reportSummary.allEmployees);
      return departments.length;
    },
  };
  return reportSummary;
}
