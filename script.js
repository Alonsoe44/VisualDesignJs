let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle = 'green';
//context.fillRect(100 ,100, 400, 400);

//center of contorl with a lot of parameters
let xspace = 3;
let yspace = 3;
let radius = 6;
let random = false;
let divisor = parseInt(Math.random()*10);
console.log(divisor);
let squareSide = 30;
let dividendo = 3;
context.lineWidth = 2;
if(!random){
    divisor = dividendo;
}

let condiStatement = 0;




let yHolder = 100+radius;

for(let j = 0; j <= squareSide; j++){
    for (let i = 0; i < squareSide; i++) {
        context.beginPath();
        context.arc(radiusxAnalicer(radius, i, xspace), yHolder, radius, 0, Math.PI * 2);
        context.stroke();
        if((i+j)%divisor==0) {
            context.beginPath();
            context.arc(radiusxAnalicer(radius, i, xspace), yHolder, radius - 5, 0, Math.PI * 2);
            context.stroke();
            //Ho ho ho no one will know
        }
    }
    yHolder = radiusxAnalicer(radius, j, yspace);
}

function radiusxAnalicer(radiuss, i,xxspace){
    return 100+radiuss+i*2*(radiuss+xxspace) ;
}
function radiusyAnalicer(radiuss, j, yyspace){
    return 100+radiuss+j*yyspace;
}
