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

module.exports = { math };
