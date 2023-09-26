// Takes a string that represents a floating number (with decimal places)
// and converts them into number formatted in accounting format (with commas)
export function numberInAccount(number) {
	const dotIndex = number.indexOf(".");

	const trailingNumbers = number.substring(dotIndex, number.length);

	let result = "";
	let j = 0;
	for (let i = number.length - 4; i >= 0; i--) {
		j++;
		result = number[i] + result;
		if (j % 3 == 0 && i != 0) {
			result = "," + result;
		}
	}

	return result + trailingNumbers;
}
