var canvas = document.getElementById("canvas");

var cWidth    = canvas.width;
var cHeight    = canvas.height;

var context = canvas.getContext('2d');




var stars = [];
function removeStars() {
    
    
    for(var l = stars.length-1, i = l; i >= 0; i--) {
        if(stars[i].life < 0) {
            stars[i] = stars[stars.length-1];
            stars.length--;
            
        }
    }
    
}



function Star(x, y, speed, dir, life) {
    var _this = this;
    
    this.x = x;
    this.y = y;
    
    var xInc = Math.cos(dir) * speed;
    var yInc = Math.sin(dir) * speed;
    
    
    
    this.life = life;
    
    
    
    this.update = function() {
        
        this.x += xInc;
        this.y += yInc;
        
        this.life--;
        
        
    }
    
}



function clear() {
    context.clearRect(0, 0, cWidth, cHeight);
}



function draw() {
    
    context.fillStyle = "#000";
    
    removeStars();
    
    for(var i = 0; i < stars.length; i++) {
        
        var s = stars[i];
        
        context.fillRect(s.x-1, s.y-1, 2, 2);
        
        s.update();
    }
    
    
}




function makeStars(coordX, coordY) {
    
    var starAmt = Math.random()*20 + 50;
    
    for(var i = 0; i < starAmt; i++) {
        
        var dir = Math.random()*2*Math.PI;
        var speed = Math.random()*3 + 2;
        var life = Math.random()*10 + 10;
        
        stars[stars.length] = new Star(coordX, coordY, speed, dir, life);
        
    }
    
    
}






var t;
function update() {
    
    if(t != null)
        clearTimeout(t);
    
    
    clear();
    draw();
    
    
    t = setTimeout(update, 33);
    
}
update();










canvas.addEventListener("click", function(e) {
    
    var x, y;
    if (!e) e = window.event;
        
    if (e.pageX || e.pageY)     {
        x = e.pageX;
        y = e.pageY;
    }
    if (e.clientX || e.clientY)     {
        x = e.clientX;
        y = e.clientY;
    }
    
    var p = canvas;
    while(p.parentNode != null) {
        x -= p.offsetLeft    - p.scrollLeft;
        y -= p.offsetTop    - p.scrollTop;
        p = p.parentNode;
    }
    
    
    
    makeStars(x, y);
    
    
    
}, true);