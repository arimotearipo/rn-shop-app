/**
 * A DUMMY SCREEN TO BE USED TO TEST THE CALLING OF
 * AN API FROM THE UI. THIS COMPONENT IS NOT AN
 * INTEGRAL PART OF THE APPLICATION.
 */

import { View } from "react-native";
import { CustomTouchableOpacity } from "../components/customized-components/";
import axios from "axios";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

async function signupAPI() {
	try {
		const { data } = await axios.get("http://10.0.2.2:3000/api/users");
		console.log(JSON.stringify(data, null, 4));
	} catch (error) {
		console.error("Something wrong:", error);
	}
}

export default function API() {
	const [text, setText] = useState("");

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<TextInput
				keyboardType={"default"}
				placeholder={"..."}
				value={"nothing"}
				onChangeText={text}
			/>
			<CustomTouchableOpacity
				text={"Press me"}
				textStyle={{ fontSize: 24 }}
				onPress={signupAPI}
				style={{
					height: 50,
					width: "50%",
					borderWidth: 1,
					borderColor: "black",
					backgroundColor: "green",
					alignItems: "center",
					justifyContent: "center",
				}}
			/>
		</View>
	);
}
