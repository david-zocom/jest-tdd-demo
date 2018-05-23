import {renderParagraph} from '../renderParagraph.js';

describe('render paragraph', () => {
	test('renders hejdå', () => {
		expect(renderParagraph('hejdå')).toBe('<p>hejdå</p>');
	})

	test('throws if parameter not a string', () => {
		expect(() => renderParagraph({})).toThrow();
	})
})
