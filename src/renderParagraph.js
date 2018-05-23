
function renderParagraph(text) {
	if( (typeof text) !== 'string' )
		throw new Error('Bad parameter');
	return '<p>' + text + '</p>';
}

export {renderParagraph};
