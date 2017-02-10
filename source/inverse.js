'use strict';

const inverse = elements => [...elements].splice(0, 1).concat([...elements].splice(1).reverse());
