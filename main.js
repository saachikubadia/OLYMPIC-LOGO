canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "Grey";
ctx.lineWidth = 4;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Blue";
ctx.lineWidth = 5;
ctx.arc(250,215,50,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Black";
ctx.lineWidth = 5;
ctx.arc(360,215,50,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(460,215,50,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Yellow";
ctx.lineWidth = 5;
ctx.arc(310,255,50,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Green";
ctx.lineWidth = 5;
ctx.arc(410,255,50,0,2 * Math.PI);
ctx.stroke();







