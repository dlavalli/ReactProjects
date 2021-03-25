import { timesTwo } from "./functions";

// the syntax that we're using here comes from the jest library
// which is automatically included when we use create-react-app.
// See https://jestjs.io/docs/getting-started

// We are also using the Expect framework to validate conditions,
// see https://github.com/Automattic/expect.js for more info

test(
  "Multiplies by two",                  // The name of the test
  () => {                                 //  What should be tested
    expect(timesTwo(4)).toBe(8);
   }
);
