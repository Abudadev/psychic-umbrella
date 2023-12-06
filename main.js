var noseX=0;
var noseY=0;
var pic;

function preload(){
 pic = loadImage("https://i.postimg.cc/gJF5Q0vp/360-F-196755947-xrfgd-VFs-Mk4-Jzd2k-L9-Gb-Dcb-J7-Wwd9yqw-removebg-preview.png");
}

function setup(){
 c = createCanvas(550,550);
 c.center();
 video = createCapture(VIDEO);
 video.size(550,550);
 video.hide();
 poseNet = ml5.poseNet(video,ml);
 poseNet.on("pose",gotpose);
}

function draw(){
 image(video,0,0,550,550);
 image(pic,noseX,noseY,105,65)
}

function take_snapshot(){
 save("save.jpg");
}

function ml(){
    console.log("Model working")
}

function gotpose(result){
 
    if(result.length > 0){
        console.log(result);
        noseX = result[0].pose.nose.x - 45;
        noseY = result[0].pose.nose.y - 5;

        console.log("nose X is " + noseX);
        console.log("nose Y is " + noseY);
    }
}