'use strict';

// Kolotovkin Maxim

QUnit.module('Тестируем функцию fromRoman', function () {
	QUnit.test('fromRoman работает правильно', function (assert) {
		assert.strictEqual(fromRoman('I'), 1);
		assert.strictEqual(fromRoman('V'), 5);
		assert.strictEqual(fromRoman('M'), 1000);
		assert.strictEqual(fromRoman('l'), 50);
		assert.strictEqual(fromRoman('d'), 500);

		assert.strictEqual(fromRoman('iv'), 4);
		assert.strictEqual(fromRoman('iiii'), 4);
		assert.strictEqual(fromRoman('CM'), 900);

		assert.strictEqual(fromRoman('MCMIV'), 1904);
		assert.strictEqual(fromRoman('MCMXC'), 1990);
		assert.strictEqual(fromRoman('mmxvii'), 2017);
		
		// my own tests
		
		assert.strictEqual(fromRoman('DCCXXI'), 721);
		assert.strictEqual(fromRoman('CMXCIX'), 999);
		assert.strictEqual(fromRoman('MCMLXXXIV'), 1984);
	});
});
