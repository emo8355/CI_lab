const math = require("./app").math;

describe("math function", () => {
	test("multiply is correct", () => {
		const input1 = 11,
			input2 = 22,
			method = "times";

		output = 242;
		expect(math(input1, input2, method)).toEqual(output);
	});

	test("pass an invalid input", () => {
		const input1 = "11",
			input2 = 22,
			method = "times";

		output = "Parameter is not a number or the method is not supported!";
		expect(() => {
			math(input1, input2, method);
		}).toThrowError(
			"Parameter is not a number or the method is not supported!"
		);
	});
});
