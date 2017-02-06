'use strict';


const union = (...args) => {
	var union = [];

	args[0].forEach((el) => {
		if (typeof el == "string") {
			if (!union.includes(el)) union.push(el);
			return;
		}

		union.push(el);
	})

	for (var i = 1; i < args.length; i++) {
		args[i].forEach((el) => { if (!union.includes(el)) union.push(el); });
	}

	return union;
}
