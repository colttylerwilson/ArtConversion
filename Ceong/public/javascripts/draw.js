//var sentiment = require('sentiment');
//var r1 = sentiment('Cats are stupid.');

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var value = local_data.value;

var y = 200;
var x = 0;
var currentRed =  22;
var currentGreen =  22;
var currentBlue =  22;
var currentColor = rgb(currentRed, currentGreen, currentBlue);
var radius = value;

window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){return setTimeout(f, 1000/60)} // simulate calling code 60 
 
window.cancelAnimationFrame = window.cancelAnimationFrame
    || window.mozCancelAnimationFrame
    || function(requestID){clearTimeout(requestID)} //fall back


function movediv(timestamp){
    x = x + 5;
    checkBounds();
    y = y + drunkWalk();
    drunkColor();
    ctx.beginPath();  
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = rgb(currentRed, currentGreen, currentBlue);
    ctx.fill();

    x = x + 5;
    checkBounds();
    y = y + drunkWalk();
    drunkColor();
    ctx.beginPath();  
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = rgb(currentRed, currentGreen, currentBlue);
    ctx.fill();

    x = x + 5;
    checkBounds();
    y = y + drunkWalk();
    drunkColor();
    ctx.beginPath();  
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = rgb(currentRed, currentGreen, currentBlue);
    ctx.fill();
    requestAnimationFrame(movediv) // call requestAnimationFrame again to animate next frame
}
requestAnimationFrame(movediv) // call requestAnimationFrame and pass into it animation function

function rgb(r, g, b){
  r = Math.floor(r);
  g = Math.floor(g);
  b = Math.floor(b);
  return ["rgb(",r,",",g,",",b,")"].join("");
}

function checkBounds()
{
  if (x > 700)
  {
    x = 0;
    y = y + 1;
  }
  if(y > 500)
  {
    y = y -1;
  }
  if(y < 0)
  {
    y = y + 1;
  }
  if(currentRed > 240)
  {
    currentRed--;
  }
  if(currentGreen > 240)
  {
    currentGreen--;
  }
  if(currentBlue > 240)
  {
    currentBlue--;
  }
  if(currentRed < 25)
  {
    currentRed++;
  }
  if(currentGreen < 25)
  {
    currentGreen++;
  }
  if(currentBlue < 25)
  {
    currentBlue++;
  }
}

function drunkWalk()
{
  var nextStep = 0;
  if(Math.floor(Math.random()* 2) == 0)
  {
    nextStep = nextStep - 2;
  }
  else{
    nextStep = nextStep + 2;
  }
  return nextStep;
}

function drunkColor()
{
  var drunkRed = 0;
  var drunkGreen = 0;
  var drunkBlue = 0;
  if(Math.floor(Math.random()* 10) == 0)
  {
    drunkRed = drunkRed + 22;
  }
  else
  {
    if(Math.floor(Math.random()* 2) == 0)
    {
      drunkRed = drunkRed - 22;
    }
    else
    {
      drunkRed = drunkRed + 22;
    }
  }
  if(Math.floor(Math.random()* 10) == 0)
  {
    drunkGreen = drunkGreen + 22;
  }
  else
  {
    if(Math.floor(Math.random()* 2) == 0)
    {
      drunkGreen = drunkGreen - 22;
    }
    else
    {
      drunkGreen = drunkGreen + 22;
    }
  }
  if(Math.floor(Math.random()* 10) == 0)
  {
    drunkBlue = drunkBlue + 22;
  }
  else
  {
    if(Math.floor(Math.random()* 2) == 0)
    {
      drunkBlue = drunkBlue - 22;
    }
    else
    {
      drunkBlue = drunkBlue + 22;
    }
  }
  currentRed = currentRed + drunkRed;
  currentGreen = currentGreen + drunkGreen;
  currentBlue = currentBlue + drunkBlue;
}