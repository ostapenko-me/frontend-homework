'use strict';

QUnit.module('Тестируем функцию fromRoman (перевод римских чисел в арабские', function () {
    QUnit.test('Возвращает десятичные цифры из введённых римских', function (assert) {
        assert.strictEqual(fromRoman('I'), 1, 'fromRoman(\'I\') === 1');
        assert.strictEqual(fromRoman('III'), 3, 'fromRoman(\'III\') === 3');
        assert.strictEqual(fromRoman('IV'), 4, 'fromRoman(\'IV\') === 4');
        assert.strictEqual(fromRoman('XI'), 11, 'fromRoman(\'XI\') === 11');
    });

    QUnit.test('Проверка на обработку нижнего регистра символов', function (assert) {
        assert.strictEqual(fromRoman('xI'), 11, 'fromRoman(\'xI\') === 11');
    });

    QUnit.test('Проверка на обработку некорректного ввода', function (assert) {
        assert.strictEqual(fromRoman(''), 0, 'fromRoman(\'\') === 0');
    });
});
