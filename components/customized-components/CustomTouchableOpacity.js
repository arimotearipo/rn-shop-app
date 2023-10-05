import { Text, TouchableOpacity } from "react-native";

/**
 * Properties
 * style - the styling object for the button container
 * text - the text to be displayed inside the button container
 * textStyle - styling for the text that was displayed
 * onPress - the function to handle what happens the button is pressed
 * disabled - boolean value of where the button is disabled or not
 */
export function CustomTouchableOpacity({
	style,
	text = "",
	textStyle = {},
	onPress,
	disabled = false,
}) {
	return (
		<TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
			<Text style={textStyle}>{text}</Text>
		</TouchableOpacity>
	);
}
