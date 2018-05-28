function addProduct(database, name, id) {
	database.add(name, id);
}
function getProduct(database, id) {
	let item = database.get(id);
	if( !item ) return null;
	return item;
}
function deleteProduct(database, id) {
	database.delete(id);
}

/*const database = {
	add: (name, id) => {throw new Error('Do not call this!!');},
	get: (id) => {throw new Error('Do not call this!!');},
	delete: (productId) => {
		throw new Error('Do not call this!!');
	}
}*/

export {addProduct, getProduct, deleteProduct};

/*const baseUrl = 'https://forverkliga.se/JavaScript/api/simple.php?world';

async function fetchCountries(myFetch) {
	let names = await myFetch(baseUrl)
	.then(response => response.json());
	return names;
}

export {baseUrl, fetchCountries};*/
