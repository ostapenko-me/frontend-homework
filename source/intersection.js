'use strict';

const intersection = function () {
  const mas = [];
	for(let i = 0; i < arguments.length; i++) {
		mas.push(arguments[i]);
	}
	const mas_inter = mas[0];
	mas.shift();
	while(mas.length > 0) {
	 	for (let i = 0; i < mas_inter.length; i++)	{
			let inp = 0;
			for(let j = 0; j < mas[0].length; j++) {
				if(mas[0][j] === mas_inter[i]) {
          inp = 1;
        }
	 			if(isNaN(mas[0][j]) && isNaN(mas_inter[i])) {
          inp = 1;
        }
			}
			if (!inp) {
	 	 		mas_inter.splice(i, 1);
	 	 		i--;
			}
	 	}
	 	mas.shift();
	}
	return mas_inter;
}
