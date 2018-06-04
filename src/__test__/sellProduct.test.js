import {sellProduct} from '../sellProduct.js';


test('throws when product is not an object', () => {
	expect( () => sellProduct(null) ).toThrow();
});
test('throws when product does not contain {name, price, count}', () => {
	expect( () => sellProduct({ name: 'hej', price: 54.3 }) ).toThrow();
	expect( () => sellProduct({ name: 'hej', count: 88 }) ).toThrow();
	expect( () => sellProduct({ price: 723.12, count: 88 }) ).toThrow();
})
test('decrease amount when count > 0', () => {
	let p = { name: 'anka', price: 10, count: 5 };
	sellProduct(p);
	expect( p.count ).toBe(4);
})
test('throws if no objects to sell', () => {
	let p = { name: 'keps', price: 3500, count: 0 };
	expect( () => sellProduct(p) ).toThrow();
});

test('count is not a number', () => {
	let p = { name: 'kitten', price: 5848484, count: 'meow' };
	expect( () => sellProduct(p) ).toThrow();
})
test('count is not an integer', () => {
	let p = { name: 'sunglasses', price: 456, count: 2.36 };
	expect( () => sellProduct(p) ).toThrow();
});
test('sells if count can be converted from string to number', () => {
	let p = { name: 'grävmasking', price: 20191, count: '10' };
	sellProduct(p);
	expect(p.count).toBe(9);
})

// speciella tal: Infinity, NaN
// price borde vara ett positivt Number eller 0 eller en konverteringsbar String
// name ska vara en icke-tom String
