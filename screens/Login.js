import CustomInput from "../components/CustomInput";
import CustomTouchableOpacity from "../components/CustomTouchableOpacity";
import { View, StyleSheet, Text } from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigation = useNavigation();

	function handleLogin(data) {
		console.log("Logging in");
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.header}>Login to RN Shop App</Text>
			</View>
			<View style={styles.inputContainer}>
				<CustomInput
					control={control}
					name={"username"}
					style={styles.input}
					placeholder="Username"
					rules={{ required: "Username is required" }}
				/>
				<CustomInput
					control={control}
					name={"password"}
					style={styles.input}
					placeholder="Password"
					rules={{
						required: "Password is required",
						minLength: {
							value: 6,
							message: "Password needs to be at least 6 characters",
						},
					}}
					secureTextEntry={true}
				/>
			</View>
			<CustomTouchableOpacity
				style={[
					styles.loginButton,
					{
						backgroundColor:
							Object.keys(errors).length != 0 ? "#59595c" : "#47e3ff",
					},
				]}
				text={"Login"}
				textStyle={styles.buttonText}
				onPress={handleSubmit(handleLogin)}
				disabled={Object.keys(errors).length != 0}
			/>
			<CustomTouchableOpacity
				style={styles.signupButton}
				text={"Signup"}
				textStyle={styles.buttonText}
				onPress={() => navigation.navigate("Signup")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#eae1eb",
		justifyContent: "center",
		alignItems: "center",
	},
	headerContainer: {
		justifyContent: "center",
		marginBottom: 40,
	},
	header: {
		fontSize: 32,
		fontWeight: "bold",
	},
	inputContainer: {
		marginBottom: 20,
		width: "80%",
	},
	input: {
		width: "100%",
		height: 40,
		borderRadius: 10,
		borderWidth: 1,
		marginBottom: 10,
		justifyContent: "center",
		paddingHorizontal: 10,
		backgroundColor: "#f0f0ff",
	},
	loginButton: {
		width: "50%",
		height: 40,
		backgroundColor: "#47e3ff",
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	signupButton: {
		width: "50%",
		height: 40,
		backgroundColor: "#4d47ff",
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 10,
	},
	buttonText: {
		fontSize: 20,
		color: "white",
	},
});
