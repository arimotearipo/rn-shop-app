import { View, Text, TextInput } from "react-native";
import { Controller } from "react-hook-form";

export function CustomInput({
	control,
	name,
	style,
	placeholder = "",
	keyboardType = "default",
	rules = {},
	secureTextEntry = false,
}) {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error },
			}) => (
				<>
					<View
						style={[
							style,
							{
								borderColor: error ? "red" : style.borderColor || "gray",
								marginBottom: 0,
							},
						]}
					>
						<TextInput
							keyboardType={keyboardType}
							placeholder={placeholder}
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
							secureTextEntry={secureTextEntry}
						/>
					</View>
					<View style={[{ marginBottom: style.marginBottom }]}>
						{error && (
							<Text style={{ color: "red" }}>{error.message || "Error"}</Text>
						)}
					</View>
				</>
			)}
		/>
	);
}
