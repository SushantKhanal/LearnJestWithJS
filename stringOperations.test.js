const { reverseString } = require("./stringOperations");

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("String reverses", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
