'use strict';

//стандартный вариант:
	function chess(size)
	{
		if (size < 2) return null;
	
		var numOfCouple = size >> 1;
		

		var evenStr = "", oddStr = "";
		for (var i = 0; i < numOfCouple; i++)
		{
			evenStr = evenStr + "* ";
			oddStr  = oddStr  + " *";
		};
		
		//проверяем на четность
		if (size & 1)
		{
			//если размер нечетен - требуетс¤ добавить "непарный" символ
			evenStr = evenStr + '*';
			oddStr  = oddStr  + ' ';		
		};
	
		evenStr = evenStr + '\n';
		oddStr  = oddStr  + '\n';
	
		var coupleStr = evenStr + oddStr;
		var chessField = "";
		
		for (var i = 0; i < numOfCouple; i++)
		{
			chessField = chessField + coupleStr;
		};
	
		if (size & 1)
		{
			chessField = chessField + evenStr;
		};
	
		return chessField;
	}
//*/
/*сокращенный вариант (без циклов)
	function chess(size)
	{
		if (size < 2) return null;
	
		var numOfCouple = (size >> 1) + 1;
		
		var evenStr = new Array(numOfCouple).join("* ");
		var oddStr  = new Array(numOfCouple).join(" *"); 
				
		//проверяем на четность
		if (size & 1)
		{
			//если размер нечетен - требуетс¤ добавить "непарный" символ
			evenStr = evenStr + '*';
			oddStr  = oddStr  + ' ';		
		};
	
		evenStr = evenStr + '\n';
		oddStr  = oddStr  + '\n';
	
		var coupleStr = evenStr + oddStr;
	
		var chessField = new Array(numOfCouple).join(coupleStr);
	
		if (size & 1)
		{
			chessField = chessField + evenStr;
		};
	
		return chessField;
	}
*/
