objects= [];
video="";
status="";


function preload()
{
    video= createVideo('video.mp4');
    video.hide();
    
}

function setup()
{
    canvas= createCanvas(480,380);
    canvas.center();
}


function gotResult(error,results)
{
if(error)
{
    console.log(error);
    console.log("CONGRATS YOUR WEBSITE IS NOT WORKING FIX IT");
}

console.log(results);
console.log("YOUR EXAM RESULTS ARE: 100%-  get it lol");
objects= results;
}



function draw()
{
    image(video,0,0,480,380);
    if (status !="")
    {
     objectDetector.detect(video,gotResult);
     for (i=0; i< objects.length;i++)
     {
        document.getElementById("status").innerHTML= "Status: Objects Detected";
        document.getElementById("number_of_objects").innerHTML= "Number of objects detected: "+objects.length;

        fill("#FF000");
        noFill();
        stroke("#FF000");
        percent=floor(objects[i].confidence * 100);
        text(objects[i].label + " "+ percent + "%", objects[i].x +15 , objects[i].y +15);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

     }
    }
    
}


function start()
{
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= "Status: Object Detecting";

}


function modelLoaded()
{
    console.log("CONGRATS YOUR WEBSITE WORKS -.-");
    status= true;
    video.loop();
    video.speed(1);
    video.volume(0);

}