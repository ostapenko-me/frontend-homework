function gcd2( n1, n2 ) {
	
	if ( n2 == 0 ) {

		return n1;
	}
	
	return gcd2( n2, n1 % n2 );
}

/*function euclid( n1, n2, n3 ) {

	return gcd2( gcd2( n1, n2 ), gcd2( n2, n3 ) );
}*/

function euclid() {

	var gcd = arguments[ 0 ];

	for ( var i = 1; i < arguments.length; ++ i ) {

		gcd = gcd2( gcd, arguments[ i ] );
	}

	return gcd;
}