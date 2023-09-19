import { generateId } from "../utils";

function newProduct(name, price, description) {
	return {
		id: generateId(),
		name,
		price,
		description,
	};
}

const products = [
	newProduct("Book", 60, "Something you can read"),
	newProduct("Laptop", 2300, "Do your work with this machine"),
	newProduct("Chair", 220, "You can sit on it"),
	newProduct("Desk", 450, "Place your computer and other stuff here"),
	newProduct(
		"Lorep Ipsum",
		123456,
		"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
	),
	newProduct("Watch", 85, "Tells the time"),
	newProduct("Mouse", 25, "Clickity thing"),
	newProduct("Keyboard", 60, "For typing on your computer"),
	newProduct("T-Shirt", 59.9, "Something to wear"),
	newProduct("Speaker", 129, "Plays sound"),
	newProduct("Swimming Goggles", 12.9, "So you can open your eyes underwater"),
	newProduct("Book", 60, "Something you can read"),
	newProduct("Laptop", 2300, "Do your work with this machine"),
	newProduct("Chair", 220, "You can sit on it"),
	newProduct("Desk", 450, "Place your computer and other stuff here"),
	newProduct(
		"Lorep Ipsum",
		123456,
		"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
	),
	newProduct("Watch", 85, "Tells the time"),
	newProduct("Mouse", 25, "Clickity thing"),
	newProduct("Keyboard", 60, "For typing on your computer"),
	newProduct("T-Shirt", 59.9, "Something to wear"),
	newProduct("Speaker", 129, "Plays sound"),
	newProduct("Swimming Goggles", 12.9, "So you can open your eyes underwater"),
	newProduct("Book", 60, "Something you can read"),
	newProduct("Laptop", 2300, "Do your work with this machine"),
	newProduct("Chair", 220, "You can sit on it"),
	newProduct("Desk", 450, "Place your computer and other stuff here"),
	newProduct(
		"Lorep Ipsum",
		123456,
		"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
	),
	newProduct("Watch", 85, "Tells the time"),
	newProduct("Mouse", 25, "Clickity thing"),
	newProduct("Keyboard", 60, "For typing on your computer"),
	newProduct("T-Shirt", 59.9, "Something to wear"),
	newProduct("Speaker", 129, "Plays sound"),
	newProduct("Swimming Goggles", 12.9, "So you can open your eyes underwater"),
	newProduct("Book", 60, "Something you can read"),
	newProduct("Laptop", 2300, "Do your work with this machine"),
	newProduct("Chair", 220, "You can sit on it"),
	newProduct("Desk", 450, "Place your computer and other stuff here"),
	newProduct(
		"Lorep Ipsum",
		123456,
		"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
	),
	newProduct("Watch", 85, "Tells the time"),
	newProduct("Mouse", 25, "Clickity thing"),
	newProduct("Keyboard", 60, "For typing on your computer"),
	newProduct("T-Shirt", 59.9, "Something to wear"),
	newProduct("Speaker", 129, "Plays sound"),
	newProduct("Swimming Goggles", 12.9, "So you can open your eyes underwater"),
	newProduct("Book", 60, "Something you can read"),
	newProduct("Laptop", 2300, "Do your work with this machine"),
	newProduct("Chair", 220, "You can sit on it"),
	newProduct("Desk", 450, "Place your computer and other stuff here"),
	newProduct(
		"Lorep Ipsum",
		123456,
		"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
	),
	newProduct("Watch", 85, "Tells the time"),
	newProduct("Mouse", 25, "Clickity thing"),
	newProduct("Keyboard", 60, "For typing on your computer"),
	newProduct("T-Shirt", 59.9, "Something to wear"),
	newProduct("Speaker", 129, "Plays sound"),
	newProduct("Swimming Goggles", 12.9, "So you can open your eyes underwater"),
];

export default products;
