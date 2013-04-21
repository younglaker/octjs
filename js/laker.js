 
    /********************* 001  randomNum   ***********************/   
    function randomNum(start, stop, type) {

        var rand_num = makeRandom(stop);
        while(rand_num <= start){     //include the stop
            rand_num = makeRandom(stop);
        }
        if(type == "int") {
           rand_num = parseInt(rand_num);
        }
        return rand_num;

    }
    
    function makeRandom(max) {
        return Math.random() * max;
    }

    /********************* 002  Imgscroll  *********************/
    function imgScroll(wraper, speed){

        var wraper = $(wraper);
        var img_list = wraper.find('ul');
        var w = img_list.find('li').outerWidth(true);
        
        img_list.animate({
            'margin-left': -w
            }, speed,
            function() {
                img_list.find('li').eq(0).appendTo(img_list);
                img_list.css({'margin-left': 0});
        });

    }


    /*********************  003   floatCloud  *********************/
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