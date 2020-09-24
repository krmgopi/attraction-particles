var canvas = document.getElementById('particleAttraction');
var ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight; 
width = innerWidth;
height = innerHeight;

var particles = [];
var colors = ['rgb(204,255,204)', 'rgb(255,204,204)'];

function particle(){
    this.x = Math.random() * width ; 
    this.y = Math.random() * height ;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0; 
    this.life = 1;
    this.lifemax = 50;
    this.gravity = 0;
    this.alpha = 1;
    this.w = 0.3;
    this.h = 0.3;

    this.draw = function() {
        // ctx.fillStyle = "rgba(255,255,10,"+this.alpha+")";
        for(i=0; i<colors.length; i++){
            // ctx.fillStyle = "rgba(255,255,10,"+this.alpha+")";
            ctx.fillStyle = colors[i+this.alpha];
            // console.log(`${colors[i]} + ${this.alpha}`);
            console.log('hi');
        }
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }

    this.update = function() {
        this.w+=0.1;
        this.h+=0.1; 
        this.vy += this.gravity;
        this.vx += this.ax; 
        this.vy += this.ay; 
        this.vx *= 0.91;
        this.vy *= 0.91;
        this.y += this.vy;
        this.x += this.vx;
        this.life++;
    
        if (this.y > canvas.height / 2 && this.x < canvas.width / 2) {
            this.vx += 1; 
        }
    
        if (this.y < canvas.height / 2 && this.x < canvas.width / 2) {
            this.vy += 1;
        }   
      
        if (this.y > canvas.height / 2 && this.x > canvas.width / 2) {
            this.vy -= 1; 
        }   
    
       
        if (this.y < canvas.height / 2 && this.x > canvas.width / 2) {
           this.vx -= 1; 
        }

        deltaX = this.x - width/2
        deltaY = this.y - height/2

        if(Math.sqrt(deltaX**2 + deltaY**2) < 50) {
            this.alpha -= 0.1;  
            this.w -= 1;
            this.h -= 1;
        } 
    }
}

setInterval(function(){
            
    ctx.fillStyle = "rgba(0,0,0,0.5)";  
    ctx.fillRect(0,0,width,height);
    
    for(var i = 0; i < 20; i++) {
        particles.push(new particle());
    } 
    
    for(var i in particles) {
       particles[i].draw();
       particles[i].update(); 
       
       if(particles[i].life >= particles[i].lifemax) {
          delete particles[i]; 
       }
    }
    
}, 30);

console.log(canvas);