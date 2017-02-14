'use strict';

QUnit.module('Тестируем функцию sortString', function () {
	QUnit.test('Функция сортирует буквы в отдельных словах по алфавиту', function (assert) {
		assert.strictEqual(sortString('fedcba'), 'abcdef', 'Работает с английским алфавитом');
		assert.strictEqual(sortString('zyxwvu'), 'uvwxyz');
		assert.strictEqual(sortString('жёедгвба'), 'абвгдеёж', 'Работает с русским алфавитом');
		assert.strictEqual(sortString('вбава'), 'аабвв');
	});

	QUnit.test('Функция сортирует слова в предложении по алфавиту', function (assert) {
		assert.strictEqual(sortString('f e d c b a'), 'a b c d e f', 'Работает с английским алфавитом');
		assert.strictEqual(sortString('z y x w v u'), 'u v w x y z');
		assert.strictEqual(sortString('ж ё е д г в б а'), 'а б в г д е ё ж', 'Работает с русским алфавитом');
		assert.strictEqual(sortString('в б а в а'), 'а а б в в');
	});

	QUnit.test('Функция работает правильно', function (assert) {
		assert.strictEqual(sortString('мама мыла раму'), 'аамм алмы амру');
		assert.strictEqual(sortString('космический корабль летит на марс'), 'абклорь амрс ан еиийккмоссч еилтт');
		assert.strictEqual(sortString('i love frontend'), 'defnnort elov i');
		assert.strictEqual(sortString('hello world'), 'dlorw ehllo');
	});

	QUnit.test('Функция работает верно', function (assert) {
  	assert.strictEqual(sortString('купи кипу пик'), 'икп икпу икпу', 'Язык ломается и там, и там, всё верно');
    assert.strictEqual(sortString('ママソープフレーム'), 'ーーソフプママムレ', 'Работает с японским алфавитом');
    assert.strictEqual(sortString('˙†∂∆˚ ®∂∫ ß∆˚ç ©©∂'), '†˙˚∂∆ ˚∆çß ©©∂ ®∂∫', 'Работает с рандомными символами');
	});
});
