var test = require('tape');
var ifeerv = require('./');

test('executes a function returning value', function (t) {
	var val = ifeerv(function () { 
		return 'asdf-asdf';
	});

	t.equals(val, 'asdf-asdf');

	t.end();
});

test('returns a non-function value', function (t) {
	var val = ifeerv('asdf-asdf');

	t.equals(val, 'asdf-asdf');

	t.end();
});

