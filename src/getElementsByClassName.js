// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {

	var elements = document,
	results = [];

	function traverse(elem) {

		if (elem.classList && elem.classList.contains(className)) {
			results.push(elem);
		}

		if (elem.hasChildNodes()) {
			var children = elem.childNodes;
			for (var i = 0; i < children.length; i++) {
				traverse(children[i]);
			}
		}
	}

	traverse(elements);
	return results;
};
