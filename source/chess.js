'use strict';

function chess(size){
	if (size < 2) {
		return null;
	};

	//узнаем колическто парных символов
	const numOfCouple = (size >> 1) + 1;
	
	let evenStr = new Array(numOfCouple).join('* ');
	let oddStr  = new Array(numOfCouple).join(' *'); 
				
	//проверяем на четность
	if (size & 1){
		//если размер нечетен - требуется добавить "непарный" символ
		evenStr = `${evenStr}*`;
		oddStr  = `${oddStr} ` ;		
	};

	evenStr = `${evenStr}\n`;
	oddStr  = `${oddStr}\n`;
	
	let coupleStr = `${evenStr + oddStr}`;
	
	let chessField = new Array(numOfCouple).join(coupleStr);
	
	if (size & 1){
		chessField =  `${chessField + evenStr}`;
	};
	
	return chessField;
};
