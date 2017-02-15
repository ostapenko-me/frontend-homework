'use strict';

QUnit.module('Тестируем функцию plain', function () {
	QUnit.test('Работает с единственным массивом', function (assert) {
		assert.deepEqual(plain([[]]), [], 'Работает с пустым массивом');
		assert.deepEqual(plain([[42]]), [42], 'Работает с массивом из одного элемента');
		assert.deepEqual(plain([[1, 2, 3, 4]]), [1, 2, 3, 4], 'Сохраняет порядок элементов');
	});

	QUnit.test('Работает с несколькими массивами', function (assert) {
		assert.deepEqual(plain([[], []]), [], 'Работает с пустыми массивами');
		assert.deepEqual(plain([[42], [42]]), [42, 42]);
		assert.deepEqual(plain([[42, 42], [42]]), [42, 42, 42]);
		assert.deepEqual(plain([[1], [2], [3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
	});
	
	QUnit.test('Работает с разными типами данных', function (assert) {
		assert.deepEqual(plain([['Hello', 'My name', 'is'], ['Rishat']]), ['Hello', 'My name', 'is', 'Rishat']);
		assert.deepEqual(plain([[[4.2], [4.2]], [42.0, 42.0], [5.8]]), [4.2, 4.2, 42.0, 42.0, 5.8]);
		assert.deepEqual(plain([[true], [false], [true], [true, false, false]]), [true, false, true, true, false, false]);
	});
});
