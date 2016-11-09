ifeerv
------

If Function Execute Else Return Value

example
-------

```js
var ife = require('ifeerv');

var obj = {
	a : 'test'
	, b : function () {
		return 'test2'
	}
};

var obj2 = {
	a : ife(obj.a)
	, b : ife(obj.b)
};

```

use case
--------

I pass a lot of objects around and sometimes I need sometimes a value isn't
good enough. I need to get some bit of data that is in some other scope. This
is pretty easy to do by just setting the value of some object property to a 
function and call the function. But, I'm annoyed with having to check to see if
a given property is a function and if so, execute it otherwise just use the
value directly. This tiny module wraps up the test-for-function-type-and-
execute-else-return-the-value logic.

license
-------

MIT
