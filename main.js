canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
car_width=75
car_height=100
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
carx=5
cary=225
function add() {
background_imgtag=new Image()
background_imgtag.onload=uploadBackground
background_imgtag.src=background_image
car_imgtag=new Image()
car_imgtag.onload=uploadgreencar
car_imgtag.src=greencar_image
}
function uploadBackground() {
ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)

}

function uploadgreencar() {
ctx.drawImage(car_imgtag,carx,cary,car_width,car_height)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(cary>=0){
		cary=cary-10
		uploadBackground()
		uploadgreencar()
	}
}

function down()
{
	if(cary<=650){
		cary=cary+10
		uploadBackground()
		uploadgreencar()
	}
}

function left()
{
	if(carx>=0){
		carx=carx-10
		uploadBackground()
		uploadgreencar()
	}
}

function right()
{
	if(carx<=750){
		carx=carx+10
		uploadBackground()
		uploadgreencar()
	}
}
