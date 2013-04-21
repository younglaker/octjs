
	$(document).ready(function() {
		
		var window_width = $(window).width();
		var window_height = $(window).height();
		$(".img_list1 li, .img_list2 li").css("width", window_width);


		/*********************   shining_stars  *********************/
		function twinkleStars(star) {
			var coordinate_x = randomNum(0, 1200, "float");
			var coordinate_y = randomNum(0, 900, "float");
			$(".star").css({
				"position": "absolute",
				"top": coordinate_x,
				"left": coordinate_y
				}).hide().fadeIn(1000).delay(1000).fadeOut(1000);
		};

		/*********************   floatCloud  *********************/
		function floatCloud (cloud, direction, position, distance, speed) {
			var cloud = $(cloud);

			cloud.mouseenter(function(){
				cloud.stop();
			});

			switch(direction) {
				case "right": 
							cloud.animate({
								'margin-right': position + distance
								}, speed
							).animate({
								'margin-right': position
								}, speed
							);
							break;
				case "left":
							cloud.animate({
								'margin-left': position + distance
								}, speed
							).animate({
								'margin-left': position
								}, speed
							);
							break;
			}


		}

		/*********************   conduct  *********************/
        var x=setInterval(
            function() {
                $(".scrolling_block1").imgScroll({direction: "to_right", speed: 400});
                $(".scrolling_block2").imgScroll({direction: "to_right", speed: 1000});
                $(".scrolling_block3").imgScroll({direction: "to_right", speed: 600});
            }, 4000
        );

        $(".scrolling_block3").hover(function(){
            clearInterval(x);
        },function(){
            x=setInterval(
                function() {
                $(".scrolling_block1").imgScroll({direction: "to_right", speed: 400});
                $(".scrolling_block2").imgScroll({direction: "to_right", speed: 1000});
                $(".scrolling_block3").imgScroll({direction: "to_right", speed: 600});
                }, 4000
            );
        });

/*		setInterval(
			function() {
				twinkleStars(".star");
			}, 4000
		);*/


		setInterval(
			function() {
				floatCloud("#cloud_5", "left", 0, 50, 2000);
			}, 2000
		);
		setInterval(
			function() {
				floatCloud("#cloud_2", "left", 20, 200, 4000);
			}, 4000
		);
		setInterval(
			function() {
				floatCloud("#cloud_1", "right", 0, 40, 2500);
			}, 2500
		);

	});