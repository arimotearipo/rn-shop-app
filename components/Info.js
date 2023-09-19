import { Text, View, StyleSheet } from "react-native";

export default function Info({ title, description }) {
	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>{title}</Text>
			<Text style={styles.descriptionText}>{description}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingBottom: 10,
		paddingHorizontal: 10,
		// borderWidth: 2,
	},
	titleText: {
		fontWeight: "bold",
		fontSize: 16,
	},
	descriptionText: {
		fontSize: 16,
	},
});
