import {isNumber, add} from '../isNumber.js';

describe('isNumber test suite', () => {
	test('5 is a number', () => {
		let param = 5;
		let expected = true;
		let actual = isNumber(param);
		expect(actual).toBe(expected);
	});

	test('string is not a number', () => {
		expect(isNumber('hej')).toBe(false);
	})
})

describe('add', () => {
	test('0.1+0.2', () => {
		expect(add(0.1, 0.2)).toBeCloseTo(0.3);
	})
})


//
