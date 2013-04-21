
	var star_block =  document.getElementById("star_block");
	var ctx_star = star_block.getContext("2d");
	var canvas_width = star_block.width;
	var canvas_height = star_block.height;
	var star_count = 20;
	var pi = Math.PI;

	function drawStar() {

		for (var i = 0; i < star_count; i++) {
			var star_x = randomNum(0, canvas_width, "float");
			var star_y = randomNum(0, canvas_height, "float");
			var star_radius = randomNum(0, 5, "float");
			ctx_star.save();
			ctx_star.beginPath();
			ctx_star.arc(star_x, star_y, star_radius, 0, 2 * pi, true);
			ctx_star.fillStyle = "#fff";
			ctx_star.fill();
			ctx_star.restore();
		}

	}

	function removeStar() {
        ctx_star.clearRect(0, 0, canvas_width, canvas_height);
	}

	window.onload = function(){
        // setInterval(function(){
        	// removeStar();
        	drawStar();
        	$("#star_block").fadeIn(1000).delay(1000).fadeOut(1000);
        // }, 4000);
	}