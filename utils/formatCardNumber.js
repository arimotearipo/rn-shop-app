export default function formatCardNumber(numberText) {
	if (numberText < 8) return numberText;

	const finalFourDigits = numberText.substring(
		numberText.length - 4,
		numberText.length
	);
	const beginningDigits = numberText.substring(0, numberText.length - 4).length;

	let redactedNumber = "";

	for (let i = 0; i < beginningDigits; i++) {
		redactedNumber += "*";
	}

	return redactedNumber + finalFourDigits;
}
