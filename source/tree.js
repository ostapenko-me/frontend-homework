function tree(height)
{
    return (height < 3) ? null : growTree(height);
}


function drawLayer(ch, num, height)
{
    let space = "", result = "";
    for(let i = 0; i<height-2-num; i++) space += " ";
    result += space;
    for(let i = 0;i<2*num+1;i++) result += ch;
    result += space + "\n";
    return result;
}

function growTree(height)
{
    let result = "";
    for(let i = 0; i < height-1; i++)
    {
        result += drawLayer("*",i,height);
    }
    result += drawLayer("|",0,height); 
    return result;
    
}