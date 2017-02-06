'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
		assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
		assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
		assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
		assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
		assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
		assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
		assert.strictEqual(euclid(2012, 8, 24), 4, 'euclid(2012, 8, 24) === 4');
		assert.strictEqual(euclid(78, 1014, 585), 39, 'euclid(78, 1014, 585) === 39');
		assert.strictEqual(euclid(275, 8800, 1225), 25, 'euclid(275, 8800, 1225) === 25');
		assert.strictEqual(euclid(2017, 1131537, 272295), 2017, 'euclid(2017, 1131537, 272295) === 2017');
	});
});
