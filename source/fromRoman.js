// Kolotovkin Maxim

function killSumbol(s,k) 
{
   var n = s.length;
   var i = 0;
   var ans = "";
   
   for(i = 0; i < n; i++)
   {
		if(i != k)
		{
			ans += s.charAt(i);
		}
		else
		{
			ans += "_";
		}
   }
   
   return ans;
}

function fromRoman(s)
{
	s = s.toUpperCase();
	
	var n = s.length;
	var i = 0;
	var c = '0';
	var summa = 0;
	var k = 0;
	
	for(i = 0; i < n; ++i)
	{
		k = s.indexOf("IV");		
		if(k != -1)
		{
			summa += 4;
			s = killSumbol(s,k);
			s = killSumbol(s,k+1);
		}
		
		k = s.indexOf("IX");		
		if(k != -1)
		{
			summa += 9;
			s = killSumbol(s,k);
			s = killSumbol(s,k+1);
		}
		
		k = s.indexOf("XC");		
		if(k != -1)
		{
			summa += 90;
			s = killSumbol(s,k);
			s = killSumbol(s,k+1);
		}
		
		k = s.indexOf("CM");		
		if(k != -1)
		{
			summa += 900;
			s = killSumbol(s,k);
			s = killSumbol(s,k+1);
		}
	}
	
	for(i = 0; i < n; ++i)
	{
		c = s.charAt(i);
		
		if(c == 'I') summa += 1;
		if(c == 'V') summa += 5;
		if(c == 'X') summa += 10;
		if(c == 'L') summa += 50;
		if(c == 'C') summa += 100;
		if(c == 'D') summa += 500;
		if(c == 'M') summa += 1000;
	}
	
	return summa;
}

