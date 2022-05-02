const Employee = require("../lib/Employee.js");

test("creates an employee", () => {
  const employee = new Employee("fakeName", "fakeId", "fakeEmail");

  expect(employee.name).toBe("fakeName");
  expect(employee.id).toBe("fakeId");
  expect(employee.email).toBe("fakeEmail");
});
