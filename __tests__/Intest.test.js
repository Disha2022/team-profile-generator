const Intern = require("../lib/intern.js");

test("creates an intern", () => {
  const intern = new Intern("fakeName", "fakeId", "fakeEmail", "fakeSchool");

  expect(intern.name).toBe("fakeName");
  expect(intern.id).toBe("fakeId");
  expect(intern.email).toBe("fakeEmail");
});

test("Intern getRole returns intern", () => {
  const intern = new Intern("fakeName", "fakeId", "fakeEmail", "fakeSchool");

  expect(intern.getRole()).toBe("Intern");
});

test("intern has getSchool", () => {
  const intern = new Intern("fakeName", "fakeId", "fakeEmail", "fakeSchool");

  expect(intern.getSchool()).toBe("fakeSchool");
});
