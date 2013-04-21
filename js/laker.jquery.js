/****************************************************************
*laker.js : Jquery Plugins
*Copyright (c) Laker Huang
*Start from 2013.04.15.
*Latest update 2013.04.15
*
*
*Welcome to use and change the code.
*
*
****************************************************************/




(function($) {

    /*********************  001  randomNum   ***********************/
    $.fn.extend({  
        randomNum: function(options) {
            var defaults = {
                start: 0,
                stop: 10,
                type: "float"
            }; 
            //用$.extend方法，扩展一个对象
            var obj = $.extend(defaults, options);
            return $.fn.randomNum.checkNum(obj.start, obj.stop, obj.type);
        }

    });


    $.fn.randomNum.checkNum = function(start, stop, type) {
        var rand_num = $.fn.randomNum.makeRandom(stop);
        while(rand_num < start){
            rand_num = $.fn.randomNum.makeRandom(stop);
        }
        if(type == "int") {
           rand_num = parseInt(rand_num);
        }
        return rand_num;
    }

    $.fn.randomNum.makeRandom = function(max) {
        return Math.random() * max;
    }


    /*********************  002  imgScroll   ***********************/
    $.fn.extend({  
        imgScroll: function(options) {

            var defaults = {
                direction: "to_left",
                speed: 200
            }; 

            var obj = $.extend(defaults, options);

            var img_list = this.find("ul");
            var w = img_list.find("li").outerWidth(true);

            if(obj.direction == "to_left"){
                img_list.animate({
                    "margin-left": - w
                    }, obj.speed,
                    function() {
                        img_list.find("li").eq(0).appendTo(img_list);
                        img_list.css({"margin-left": 0});
                });            
            }

            if(obj.direction == "to_right") {
                img_list.find("li:last").prependTo(img_list);
                img_list.css({"margin-left": - w});
                img_list.animate({"margin-left": 0}, obj.speed);
            } 
        }

    });


    /*********************  003   floatCloud  *********************/    
    $.fn.extend({  
        floatCloud: function(options) {

            var defaults = {
                direction: "right",
                position: 0,
                distance: 100,
                speed: 1000
            }; 

            var obj = $.extend(defaults, options);

            this.mouseenter(function(){
                this.stop();
            });

            switch(obj.direction) {
                case "right": 
                            this.animate({
                                'margin-right': obj.position + obj.distance
                                }, obj.speed
                            ).animate({
                                'margin-right': obj.position
                                }, obj.speed
                            );
                            break;
                case "left":
                            this.animate({
                                'margin-left': obj.position + obj.distance
                                }, obj.speed
                            ).animate({
                                'margin-left': obj.position
                                }, obj.speed
                            );
                            break;
            }
        }

    });


})(jQuery); 



/*(function($){
    $.fn.randomNum = function(options){
  
        var defaultVal = {
            start: 0,
            stop: 10,
            type: "float"
        };

        var obj = $.extend(defaultVal, options);  
        console.log("c="+obj.start+","+ obj.stop+","+obj.type);  
        return a(obj.start, obj.stop, obj.type);
    }

    a = function(start, stop, type) {
        var rand_num = makeRandom(stop);
        while(rand_num < start){
            rand_num = makeRandom(stop);
        }
        if(type == "int") {
           rand_num = parseInt(rand_num);
        }
        console.log("a="+rand_num);
        return rand_num;
    }
    makeRandom = function(max) {
        return Math.random()*max;
    }
 })(jQuery)*/