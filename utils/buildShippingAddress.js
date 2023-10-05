// A function to join strings that will form a shipping address
import { DEFAULT_SHIPPING } from "./constants";

export function buildShippingAddress(shippingData) {
	return `${
		shippingData.shippingAddress || DEFAULT_SHIPPING.shippingAddress
	}\n${shippingData.zipcode || DEFAULT_SHIPPING.zipcode} ${
		shippingData.city || DEFAULT_SHIPPING.city
	}\n${shippingData.country || DEFAULT_SHIPPING.country}`;
}
