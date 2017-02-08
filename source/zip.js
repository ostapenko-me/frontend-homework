function zip(...objects)
{
	let result = {};
	for (let i = 0; i < objects.length; ++i)
	{
		for (let property in objects[i])
		{
			if (!(property in result))
			{
				result[property] = objects[i][property];
				console.log(objects[i][property]);
			}
		}
	}	
	return result;
}