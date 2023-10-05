import { Icon } from "@rneui/base";
import { View, StyleSheet, TouchableOpacity } from "react-native";

export function DrawerButton({ navigation }) {
	function handleOpenDrawer() {
		navigation.openDrawer();
	}

	return (
		<View style={styles.headerContainer}>
			<TouchableOpacity onPress={handleOpenDrawer}>
				<Icon name="menu" size={32} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		paddingTop: 40,
		paddingHorizontal: 20,
		backgroundColor: "#eae1eb",
		alignItems: "flex-start",
	},
});
