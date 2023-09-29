// Console.log a JSON object in a nicely indented format
// for better reading
export function printf(description = "", obj) {
	console.log(description, JSON.stringify(obj, null, 4));
}
