const Manager = require("../lib/Manager.js");

test("creates an manager", () => {
  const manager = new Manager("fakeName", "fakeId", "fakeEmail", "fakeOfficeNumber");

  expect(manager.name).toBe("fakeName");
  expect(manager.id).toBe("fakeId");
  expect(manager.email).toBe("fakeEmail");
});

test("manager getRole returns Manager", () => {
  const manager = new Manager("fakeName", "fakeId", "fakeEmail", "fakeOfficeNumber");

  expect(manager.getRole()).toBe("Manager");
});


test("manager has officeNumber", () => {
  const manager = new Manager("fakeName", "fakeId", "fakeEmail", "fakeOfficeNumber");

  expect(manager.officeNumber).toBe("fakeOfficeNumber");
});
