'use strict';


const unique = (from, to = []) => {
	from.forEach((item) => {
		if (!to.includes(item)) { to.push(item); }
	});

	return to;
}


const union = (...args) => {
	if (args.length < 1) { return []; }
	if (args.length == 1) { return unique(args[0]); }

	let union = args[0];

	for (let i = 1; i < args.length; i++) {
		unique(args[i], union);
	}

	return union;
}

