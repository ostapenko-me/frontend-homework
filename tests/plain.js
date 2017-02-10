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

	 QUnit.test('Собственные тесты', function (assert) {
        assert.deepEqual(plain([[], [1, 8, 23]]), [1, 8, 23]);
        assert.deepEqual(plain([[42], [], [123, 147, -5], [-1, 2]]), [42, 123, 147, -5, -1, 2]);
        assert.deepEqual(plain([[1], [2, 3], [], [1]]), [1, 2, 3, 1]);
        assert.deepEqual(plain([[1], [2], [3], [456]]), [1, 2, 3, 456]);
    });
});
