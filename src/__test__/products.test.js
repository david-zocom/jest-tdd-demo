//import {baseUrl, fetchCountries} from '../products.js';
import {addProduct, getProduct, deleteProduct} from '../products.js';

test('add calls database with correct parameters', () => {
	let item = 'sparkcykel', itemId = 5;
	const addFunc = jest.fn();
	addProduct({ add: addFunc }, item, itemId);
	expect(addFunc.mock.calls.length).toBe(1);
	expect(addFunc.mock.calls[0][0]).toBe(item);
	expect(addFunc.mock.calls[0][1]).toBe(itemId);
})

test('get calls database with correct parameters', () => {
	let itemId = 5;
	const getFunc = jest.fn();
	getProduct({ get: getFunc }, itemId);
	expect(getFunc.mock.calls.length).toBe(1);
	expect(getFunc.mock.calls[0][0]).toBe(itemId);
})

test('get returns null if no item in database', () => {
	let item = 'baseball', itemId = 18;
	const getFunc = jest.fn();
	let newItem = getProduct({ get: getFunc }, itemId);
	expect(newItem).toBeNull();
})
test('get returns correct item', () => {
	let item = 'baseball', itemId = 18;
	const getFunc = jest.fn();
	getFunc.mockReturnValueOnce({ name: item, id: itemId })
	addProduct({ add: jest.fn() }, item, itemId);
	let newItem = getProduct({ get: getFunc }, itemId);
	expect(newItem).toEqual({ name: item, id: itemId });
})
/*describe('fetchCountries', () => {
	test('called fetch with correct parameters', () => {
		fetchCountries( url => {
			expect(url).toBe(baseUrl);
		} );
	})

	test('returns list of country names', () => {
		let countryNames = fetchCountries(url => {
			return new Promise( (resolve, reject) => {
				resolve([ 'Sverige', 'Norge' ]);
			} );
		});
		expect( typeof countryNames ).toBe( 'object' );
		expect( countryNames.length ).not.toBeUndefined();
		countryNames.forEach( x => {
			expect( typeof x ).toBe( 'string' );
		})
	})
})*/
