import { Text, TouchableOpacity } from "react-native";

export default function CustomTouchableOpacity({
	style,
	text = "",
	textStyle,
	onPress,
	disabled = false,
}) {
	return (
		<TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
			<Text style={textStyle}>{text}</Text>
		</TouchableOpacity>
	);
}
