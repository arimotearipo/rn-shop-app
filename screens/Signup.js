import { View, StyleSheet, Text } from "react-native";
import CustomTouchableOpacity from "../components/CustomTouchableOpacity";
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { signupAPI } from "../service";

export default function Signup() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigation = useNavigation();

	function validateIfPasswordsMatch({ password, confirmPassword }) {
		return password === confirmPassword || "Passwords do not match";
	}

	function handleSignup(data) {
		signupAPI({
			fullname: data.fullname,
			username: data.username,
			password: data.password,
		})
			.then((response) => {
				console.log("Signup success");
				console.log(response);
				navigation.navigate("Login");
			})
			.catch((err) => {
				console.log("Signup failed");
				console.error(err);
			});
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.header}>Signup to RN Shop App!</Text>
			</View>
			<View style={styles.inputContainer}>
				<CustomInput
					control={control}
					name={"fullname"}
					style={styles.input}
					placeholder={"Full Name"}
					rules={{ required: "Full name is required" }}
				/>
				<CustomInput
					control={control}
					name={"username"}
					style={styles.input}
					placeholder={"Username"}
					rules={{ required: "Username is required" }}
				/>
				<CustomInput
					control={control}
					name={"password"}
					style={styles.input}
					placeholder={"Password"}
					rules={{
						required: "Password is required",
						minLength: {
							value: 6,
							message: "Passwords must be at least 6 characters",
						},
					}}
					secureTextEntry={true}
				/>
				<CustomInput
					control={control}
					name={"confirmPassword"}
					style={styles.input}
					placeholder={"Confirm Password"}
					rules={{ validate: validateIfPasswordsMatch }}
					secureTextEntry={true}
				/>
			</View>
			<CustomTouchableOpacity
				style={[
					styles.signupButton,
					{
						backgroundColor:
							Object.keys(errors).length != 0 ? "#59595c" : "#47e3ff",
					},
				]}
				text={"Signup"}
				textStyle={styles.buttonText}
				onPress={handleSubmit(handleSignup)}
				disabled={Object.keys(errors).length != 0}
			/>
			<CustomTouchableOpacity
				style={styles.loginButton}
				text={"Go to Login"}
				textStyle={styles.buttonText}
				onPress={() => navigation.navigate("Login")}
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
		borderBottomWidth: 1,
		marginBottom: 10,
		justifyContent: "center",
		paddingHorizontal: 10,
		backgroundColor: "#f0f0ff",
	},
	signupButton: {
		width: "50%",
		height: 40,
		backgroundColor: "#47e3ff",
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	loginButton: {
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
