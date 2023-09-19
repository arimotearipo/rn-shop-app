export function generateId() {
	// Generate random alphanumeric id
	return Math.random().toString(36).substring(2, 9);
}
