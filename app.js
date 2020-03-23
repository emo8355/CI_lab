const math = (num1, num2, method) => {
	method_list = ["add", "minus", "times", "divide"];
	if (
		num1 !== Number(num1) ||
		num2 !== Number(num2) ||
		!method_list.includes(method)
	) {
		throw new Error(
			"Parameter is not a number or the method is not supported!"
		);
	} else {
		if (method == "times") {
			return num1 * num2;
		} else if (method == "add") {
			return num1 + num2;
		}
	}
};

// const input1 = "11",
// 	input2 = 22,
// 	method = "times";

// console.log(math(input1, input2, method));
module.exports = { math };
