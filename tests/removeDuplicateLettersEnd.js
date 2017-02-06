'use strict';

QUnit.module('Тестируем функцию removeDuplicateLettersEnd', function () {
	QUnit.test('Оставляет без изменений строки, где все символы уникальны', function (assert) {
		assert.strictEqual(removeDuplicateLettersEnd('1234'), '1234');
		assert.strictEqual(removeDuplicateLettersEnd('abcd'), 'abcd');
		assert.strictEqual(removeDuplicateLettersEnd('олдж фыва'), 'олдж фыва');
		assert.strictEqual(removeDuplicateLettersEnd(',.;=\n\t '), ',.;=\n\t ');
	});

	QUnit.test('Удаляет повторяющиеся символы, оставляя только один', function (assert) {
		assert.strictEqual(removeDuplicateLettersEnd('1111'), '1');
		assert.strictEqual(removeDuplicateLettersEnd('aaaa'), 'a');
		assert.strictEqual(removeDuplicateLettersEnd('ыыыы'), 'ы');
		assert.strictEqual(removeDuplicateLettersEnd('==== ||||'), '= |');
	});

	QUnit.test('Оставляет символ, который встречался в строке позже всего', function (assert) {
		assert.strictEqual(removeDuplicateLettersEnd('11121'), '21');
		assert.strictEqual(removeDuplicateLettersEnd('qqqwq'), 'wq');
		assert.strictEqual(removeDuplicateLettersEnd('ыыыцы'), 'цы');
		assert.strictEqual(removeDuplicateLettersEnd('===*= |||+|'), '*= +|');
	});

	QUnit.test('Работает правильно на случайных строчках', function (assert) {
		assert.strictEqual(removeDuplicateLettersEnd('мама мыла раму'), 'ыл раму');
		assert.strictEqual(removeDuplicateLettersEnd('от топота копыт'), 'а копыт');
		assert.strictEqual(removeDuplicateLettersEnd('hello world'), 'he world');
	});

	QUnit.test('Негативное тестирование функции', function(assert) {
		assert.strictEqual(removeDuplicateLettersEnd(''), '', 'okay - (\'\')');
		assert.strictEqual(removeDuplicateLettersEnd(), '', 'okay - ()');
		assert.strictEqual(removeDuplicateLettersEnd('my                code'), 'my code', 'okay - (my                code)');
	});
		
});
