window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

var up = false;
var down = false;
var left = false;
var right = false;
var character = document.getElementById("target");
var x = 0;
var y = 0;

function onKeyDown(event) {
	var keyCode = event.keyCode;
	switch (keyCode) {
		case 87: // W
			up = true;
			break;
		case 65: // A
			left = true;
			break;
		case 83: // S
			down = true;
			break;
		case 68: // D
			right = true;
			break;
	}
}

function onKeyUp(event) {
	var keyCode = event.keyCode;
	switch (keyCode) {
		case 87: // W
			up = false;
			break;
		case 65: // A
			left = false;
			break;
		case 83: // S
			down = false;
			break;
		case 68: // D
			right = false;
			break;
	}
}

function moveCharacter() {
	if (up || left || down || right) {
		character.style.animation = "movingCharacter 1s steps(4) infinite";
		character.classList.remove("face-up");
		character.classList.remove("face-left");
		character.classList.remove("face-down");
		character.classList.remove("face-right");
	}
	if (!(up || left || down || right)) {
		character.style.animation = "none";
	}
	if (up) {
		character.classList.add("face-up");
	}
	if (left) {
		character.classList.add("face-left");
	}
	if (down) {
		character.classList.add("face-down");
	}
	if (right) {
		character.classList.add("face-right");
	}
	window.requestAnimationFrame(moveCharacter);
}

window.requestAnimationFrame(moveCharacter);
