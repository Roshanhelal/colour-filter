function setup(){
    canvas=createCanvas(650,480)
    canvas.position(110,250)
    video=createCapture(VIDEO)
    video.hide();
    tint_colour="";
}

function draw(){ 
image(video,0,0,640,480) 
tint(tint_colour)
 } 
 
 function apply_filter(){ 
tint_colour = document.getElementById("colour_name").value;
 }

 function take_snapshot(){
    save("selfie.png")
 }