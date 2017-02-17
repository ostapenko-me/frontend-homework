'use strict';

QUnit.module('Тестируем функцию removeAllDuplicateLetters', function () {
	QUnit.test('Удаляет идущие подряд буквы', function (assert) {
		assert.strictEqual(removeAllDuplicateLetters('111'), '', "removeAllDuplicateLetters('111') === ''");
		assert.strictEqual(removeAllDuplicateLetters('www'), '', "removeAllDuplicateLetters('www') === ''");
		assert.strictEqual(removeAllDuplicateLetters('...'), '', "removeAllDuplicateLetters('...') === ''");
		assert.strictEqual(removeAllDuplicateLetters('   '), '', "removeAllDuplicateLetters('   ') === ''");
	});

	QUnit.test('Не удаляет буквы, встречающиеся один раз', function (assert) {
		assert.strictEqual(removeAllDuplicateLetters('123'), '123', "removeAllDuplicateLetters('123') === '123'");
		assert.strictEqual(removeAllDuplicateLetters('abc'), 'abc', "removeAllDuplicateLetters('abc') === 'abc'");
		assert.strictEqual(removeAllDuplicateLetters(',./'), ',./', "removeAllDuplicateLetters(',./') === ',./'");
		assert.strictEqual(removeAllDuplicateLetters('\n\t '), '\n\t ', "removeAllDuplicateLetters('\n\t ') === '\n\t '");
	});

	QUnit.test('Удаляет повторяющиеся буквы в разных словах', function (assert) {
		assert.strictEqual(removeAllDuplicateLetters('привет, мир'), 'пвет, м', "removeAllDuplicateLetters('привет, мир') === 'пвет, м'");
		assert.strictEqual(removeAllDuplicateLetters('hello, world'), 'he, wrd', "removeAllDuplicateLetters('hello, world') === 'he, wrd'");
		assert.strictEqual(removeAllDuplicateLetters('мама мыла раму'), 'ылру', "removeAllDuplicateLetters('мама мыла раму') === 'ылру'");
		assert.strictEqual(removeAllDuplicateLetters('"Кукареку!", сказал Петух'), 'Кр!,сзлПтх', "removeAllDuplicateLetters('Кукареку!, сказал Петух') === 'Кр!,сзлПтх'");
	});
	
	QUnit.test('Удаляет повторяющиеся буквы в отдельно взятом слове', function (assert) {
		assert.strictEqual(removeAllDuplicateLetters('Хакунаматата!'), 'Хкунм!', "removeAllDuplicateLetters('Хакунаматата!') === 'Хкунм!'");
		assert.strictEqual(removeAllDuplicateLetters('Джава'), 'Джв', "removeAllDuplicateLetters('Джава') === 'Джв'");
		assert.strictEqual(removeAllDuplicateLetters('Здоровенный'), 'Здрвеый', "removeAllDuplicateLetters('Здоровенный') === 'Здрвеый'");
		assert.strictEqual(removeAllDuplicateLetters('йаазьььь'), 'йз', "removeAllDuplicateLetters('йаазьььь') === 'йз'");
	});
	
	QUnit.test('Не удаляет одни и теже буквы с различным регистром', function (assert) {
		assert.strictEqual(removeAllDuplicateLetters('хАЯтЬлелЕяТь'), 'хАЯтЬеЕяТь', "removeAllDuplicateLetters('хАЯтЬлелЕяТь') === 'хАЯтЬеЕяТь'");
		assert.strictEqual(removeAllDuplicateLetters('моНОтонНость'), 'мОнсь', "removeAllDuplicateLetters('моНОтонНость') === 'мОнсь'");
		assert.strictEqual(removeAllDuplicateLetters('Аль Пачино'), 'Аль Пачино', "removeAllDuplicateLetters('Аль Пачино') === 'Аль Пачино'");
		assert.strictEqual(removeAllDuplicateLetters('ОтличносТь'), 'ОтличносТь', "removeAllDuplicateLetters('ОтличносТь') === 'ОтличносТь'");
	});
});
