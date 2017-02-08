function gcd2( n1, n2 ) {
	
	return ( n2 === 0 ) ? n1 : gcd2( n2, n1 % n2 );
}

function euclid( ...rest ) {

	return rest.reduce( gcd2, rest[ 0 ] );
}
