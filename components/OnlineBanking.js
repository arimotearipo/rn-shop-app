import { View, StyleSheet } from "react-native";
import CustomPicker from "../components/CustomPicker";

export default function OnlineBanking({ control }) {
	const banksSelection = [
		{ label: "Hong Leong Bank", value: "Hong Leong Bank" },
		{ label: "Maybank", value: "Maybank" },
		{ label: "CIMB Bank", value: "CIMB Bank" },
		{ label: "RHB Bank", value: "RHB Bank" },
		{ label: "Public Bank", value: "Public Bank" },
		{ label: "HSBC", value: "HSBC" },
	];

	return (
		<View style={styles.container}>
			<CustomPicker
				control={control}
				name={"bank"}
				rules={{ required: "Please select a bank" }}
				style={styles.customPickerContainer}
				labelStyle={styles.labelStyle}
				label={"Please select a bank:"}
				selections={banksSelection}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "80%",
		height: 80,
		marginBottom: 20,
	},
	customPickerContainer: {
		width: "100%",
		borderWidth: 1,
	},
	labelStyle: {
		fontSize: 16,
		fontWeight: "bold",
	},
});
