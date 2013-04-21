
	var star_block =  document.getElementById("star_block");
	var ctx_star = star_block.getContext("2d");
	var canvas_width = star_block.width;
	var canvas_height = star_block.height;
	var star_count = 20;
	var pi = Math.PI;
	var ctxAs=0;
	var ctxAe=1;
	var ctxN=0;
	var t;
	var star_array = new Array;


	function createStars() {

		for (var i = 0; i < star_count; i++) {
			var star_x = randomNum(0, canvas_width, "float");
			var star_y = randomNum(0, canvas_height, "float");
            var opacity = randomNum(0, 1, "float");
			var star_radius = randomNum(0, 5, "float");
            star_array.push(new Star(star_x, star_y, star_radius,opacity));
		}

	}

    function Star(x, y, radius, opacity) {

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.opacity = opacity; // 0-1

        // returns a string that will be used to set the fillStyle of the <canvas>
        this.fillStyle = function() {
            return "rgba(255, 255, 255, " + (this.opacity) + ")";
        }

    }

    function updateStars() {

        ctx_star.clearRect(0, 0, canvas_width, canvas_height);
        for (var i = 0; i < star_array.length; i++) {
            var star = star_array[i];
        }
        renderStars();
    }

    function renderStars() {

        for (var i = 0; i < star_array.length; i++) {
            var star = star_array[i];
		    ctx_star.fillStyle = "black";
            ctx_star.fillStyle = star.fillStyle();
			ctx_star.save();
			ctx_star.beginPath();
			ctx_star.arc(star.x, star.y, star.radius, 0, 2 * pi, true);
			// ctx_star.createLinearGradient(star.radius / 2, star.radius / 2,)
			ctx_star.fill();
			ctx_star.restore();
        }
    }

	function removeStar() {

        console.log(canvas_width);

	}

	window.onload = function(){

        setInterval(function(){
        	removeStar();
        	createStars();
        	updateStars();
        }, 4000);

	}