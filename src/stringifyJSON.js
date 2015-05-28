// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {

	if (typeof obj === "number" || typeof obj === "boolean") {
		return String(obj);
	}

	if (typeof obj === "string") {
		return '"' + obj + '"';
	}

	if (obj === null) {
		return "null";
	}

	if (typeof obj === "function" || obj === undefined) {
		return null;
	}

	if (Array.isArray(obj)) {
		return "[" + obj.map(function(o) {
			return stringifyJSON(o);
		}).join(",") + "]";
	}

	if (Object.prototype.toString.call(obj) === "[object Object]") {
		var result = [];
		Object.keys(obj).forEach(function(key) {
			var val = stringifyJSON(obj[key]);
			if (val !== null) {
				result.push('"' + key + '":' + val);
			}
		});
		return "{" + result.join(",") + "}";
	}
};
