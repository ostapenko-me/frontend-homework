'use strict';

const inverse = function (elements) {
	return [...elements].splice(0, 1).concat([...elements].splice(1).reverse());
};
