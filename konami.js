function konami() {

	var arr = [];
	var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

	document.addEventListener('keyup', function(e) {
		arr.push(e.keyCode);
		if (arr.length >= 12) arr.shift();
		if (arr.toString() === konami.toString()) cheatMode();
	});

}

function cheatMode() {}
