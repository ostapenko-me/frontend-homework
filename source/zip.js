/*function zip(...objects){
	let result = {};
	objects.forEach(function(element, index, array){
		for (let property in element){
			if (!(property in result)){
				result[property] = element[property];
			}
		}
	});
	return result;
}*/

let zip = (...objects) => Object.assign({}, ...objects.reverse());
