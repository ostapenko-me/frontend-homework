'use strict';

QUnit.module('Тестируем функцию inverse', function () {
	QUnit.test('Функция работает с пустым массивом', function (assert) {
		assert.deepEqual(inverse([]), []);
	});

	QUnit.test('Функция работает с массивом длины один', function (assert) {
		assert.deepEqual(inverse([1]), [1]);
		assert.deepEqual(inverse(['a']), ['a']);
		assert.deepEqual(inverse([null]), [null]);
		assert.deepEqual(inverse([false]), [false]);
	});

	QUnit.test('Функция работает с любыми массивами', function (assert) {
		assert.deepEqual(inverse([1, 2]), [1, 2]);
		assert.deepEqual(inverse(['a', 'b']), ['a', 'b']);
		assert.deepEqual(inverse([null, false]), [null, false]);

		assert.deepEqual(inverse([1, 2, 3, 4, 5]), [1, 5, 4, 3, 2]);
		assert.deepEqual(inverse([1, 2, 3, 4, 5, 6]), [1, 6, 5, 4, 3, 2]);
		assert.deepEqual(inverse(['a', 'b', 'c', 'd', 'e']), ['a', 'e', 'd', 'c', 'b']);
	});
	
	QUnit.test('Дополнительные тесты', function (assert) {
		assert.deepEqual(inverse([1, 2, 'a', 'b', 'c']), [1, 'c', 'b', 'a', 2]);
		assert.deepEqual(inverse(['а', 'б', 'в', 'г', 'д']), ['а', 'д', 'г', 'в', 'б']);
		assert.deepEqual(inverse(['a', 'b', ' ', 'а', 'б']), ['a', 'б', 'а', ' ', 'b']);
	});
});
