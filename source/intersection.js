'use strict';

const intersection = function () {
  var mas = [];
	var i = 0;
	for(i = 0; i < arguments.length; i++) {
		mas.push(arguments[i]);
	}
	var j = 0;
	var inp = 0;
	var mas_inter = mas[0];
	mas.shift();
	while(mas.length > 0) {
	 	for (i = 0; i < mas_inter.length; i++)	{
			inp = 0;
			for(j = 0; j < mas[0].length; j++) {
				if(mas[0][j] === mas_inter[i]) inp = 1;
	 			if(isNaN(mas[0][j]) == true && isNaN(mas_inter[i]) == true) inp = 1;
			}
			if (inp == 0) {
	 	 		mas_inter.splice(i, 1);
	 	 		i--;
			}
	 	}
	 	mas.shift();
	}
	return mas_inter;
}
