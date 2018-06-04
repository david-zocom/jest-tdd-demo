
/*4 Skriv testfall för funktionen sellProduct(product). Funktionen tar ett objekt som parameter, som ska ha egenskaperna name, price och count. När funktionen anropas ska antalet produkter minskas med ett. Om det inte finns några kvar ska funktionen kasta ett exception med throw*/
// {name, price, count}
function sellProduct(product) {
	if( (typeof product) !== 'object' || !product )
		throw new Error('Must be an object');

	let convertedCount = Number(product.count);
	if( !isNaN(convertedCount) ) product.count = convertedCount;
	if( !product.name ){
		throw new Error('Missing name');
	}else if( typeof product.price !== 'number' ){
		throw new Error('Missing price');
	}else if( typeof product.count !== 'number' ){
		throw new Error('Missing count');
	}else if( product.count % 1 !== 0 ){
		throw new Error('Count must be an integer');
	}
	if( product.count < 1 )
		throw new Error('No products to sell');
	product.count--;
}

export {sellProduct};
