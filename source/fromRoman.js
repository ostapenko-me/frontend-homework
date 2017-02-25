// Kolotovkin Maxim

// homeWork

function fromRoman(s) {
	s = s.toUpperCase();

	let summa = 0;
	const n = s.length;
	
	for(let i = 0; i < n; ++i) {
		let number = -1;
		
		number = s.indexOf("IV");	
		if(number != -1) {
			summa += 4;
			s = s.replace("IV", "::");
		}
		
		number = s.indexOf("IX");	
		if(number != -1) {
			summa += 9;
			s = s.replace("IX", "::");
		}
		
		number = s.indexOf("XC");	
		if(number != -1) {
			summa += 90;
			s = s.replace("XC", "::");
		}
		
		number = s.indexOf("CM");	
		if(number != -1) {
			summa += 900;
			s = s.replace("CM", "::");
		}
	}
	
	for(let i = 0; i < n; ++i) {
		let c = s.charAt(i);
		
		switch(c) {
			case 'I' : summa += 1; break;
			case 'V' : summa += 5; break;
			case 'X' : summa += 10; break;
			case 'L' : summa += 50; break;
			case 'C' : summa += 100; break;
			case 'D' : summa += 500; break;
			case 'M' : summa += 1000; break;
		}
	}
	
	return summa;
}
