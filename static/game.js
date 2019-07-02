var socket = io();
socket.on('message', function(data) {
    console.log(data);
});

var movement = {
    up: false,
    down: false,
    left: false,
    right: false
}
document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 65: //A
	    movement.left = true;
	    break;
	case 87: //W
	    movement.up = true;
	    break;
	case 68: //D
	    movement.right = true;
	    break;
	case 83: //S
	    movement.down = true;
	    break;
    }
});
document.addEventListener('keyup', function(event) {
    switch (event.keyCode) {
	case 65: //A
	    movement.left = false;
	    break;
	case 87: //W
	    movement.up = false;
	    break;
	case 68: //D
	    movement.right = true;
	    break;
	case 83: //S
	    movement.down = true;
	    break;
    }
});

socket.emit('new player');
setInterval(function() {
  socket.emit('movement', movement);
}, 1000 / 60);









