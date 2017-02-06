function gcd2( n1, n2 ) {
	
	return ( n2 == 0 ) ? n1 : gcd2( n2, n1 % n2 );
}

/*function euclid( n1, n2, n3 ) {

	return gcd2( gcd2( n1, n2 ), n3 );
}*/

function euclid() {

	let gcd = arguments[ 0 ];
	for ( let i = 1; i < arguments.length; ++ i ) {

		gcd = gcd2( gcd, arguments[ i ] );
	}
	return gcd;
}