import { View, Text, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import { Picker } from "@react-native-picker/picker";

export function CustomPicker({
	name,
	rules = {},
	control,
	style,
	label = "Please select",
	labelStyle,
	selections,
}) {
	const defaultValue = selections[0].value;

	return (
		<>
			<View style={{ width: "80%" }}>
				<Text style={labelStyle}>{label}</Text>
			</View>
			<Controller
				control={control}
				name={name}
				rules={rules}
				defaultValue={defaultValue}
				render={({ field: { onChange, value } }) => (
					<View style={style}>
						<Picker onValueChange={onChange} selectedValue={value}>
							{selections.map((option) => (
								<Picker.Item
									key={option.value}
									label={option.label}
									value={option.value}
									style={{ fontSize: 16 }}
								/>
							))}
						</Picker>
					</View>
				)}
			/>
		</>
	);
}
