module.exports = ifeerv;

function ifeerv (thing) {
	if (typeof thing === 'function') {
		return thing();
	}

	return thing;
}
