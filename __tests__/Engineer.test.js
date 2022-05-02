const Engineer = require("../lib/Engineer.js");

test("creates an engineer", () => {
  const engineer = new Engineer(
    "fakeName",
    "fakeId",
    "fakeEmail",
    "fakeGithub"
  );

  expect(engineer.name).toBe("fakeName");
  expect(engineer.id).toBe("fakeId");
  expect(engineer.email).toBe("fakeEmail");
});

test("engineer getRole returns Engineer", () => {
  const engineer = new Engineer(
    "fakeName",
    "fakeId",
    "fakeEmail",
    "fakeGithub"
  );

  expect(engineer.getRole()).toBe("Engineer");
});

test("engineer has getGithub", () => {
  const engineer = new Engineer(
    "fakeName",
    "fakeId",
    "fakeEmail",
    "fakeGithub"
  );

  expect(engineer.getGithub()).toBe("https://github.com/fakeGithub");
});
