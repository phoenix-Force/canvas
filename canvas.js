let c =document.querySelector('.c');
    c.height  = window.innerHeight;
    c.width = window.innerWidth;
    var ctx = c.getContext("2d");
    
//     for(let i=1;i<=6541;i++){
        
//         let x = Math.random() *window.innerWidth;
//         let y = Math.random() * window.innerHeight;
        
//         ctx.beginPath();
//         ctx.arc(x,y, 50, 0, 2 * Math.PI,false);
//         ctx.strokeStyle = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()})`
//         ctx.stroke();
        
//         console.log(x);
//         console.log(y);
// }
var noOfCircle = 200;


function Circle(x,y,dx,dy,radius,color_b,color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.color_b = color_b;
    this.radius = radius;
    this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y, this.radius, 0, 2 * Math.PI,false);
    ctx.strokeStyle="blue";
    ctx.stroke();
    // ctx.fillStyle =`this.color`;
    ctx.fill();
    }
    this.update  = function(){
        if(this.x+this.radius > innerWidth || this.x-this.radius<0){
            this.dx=-this.dx;
        }
        if(this.y+this.radius > innerHeight || this.y-this.radius<0){
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
    }
}



// let y = 100;
// let x = Math.random()*innerWidth;
// let y = Math.random()*innerHeight;
// let dx = (Math.random()-.5)*8;
// let dy = (Math.random()-.5)*8;
var radius = 60;
var circles= [];
for(let i =1;i<=noOfCircle;i++){
    let x = Math.random()*(innerWidth-2*radius)+radius;
    let y = Math.random()*(innerHeight-2*radius)+radius;
    let dx = (Math.random()-.5);
    let dy = (Math.random()-.5);
    circles.push(new Circle(x,y,dx,dy,radius,"black","blue"));
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for(let i =0;i<=noOfCircle;i++){
        circles[i].draw();
        circles[i].update();

    }

}
animate();
