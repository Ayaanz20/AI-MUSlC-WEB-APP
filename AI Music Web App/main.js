song1='';
song2='';
song1_status='';
song2_status='';
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function preload(){
song1=loadSound('music.mp3');
song2=loadSound('harry potter.mp3');


}
function modelLoaded(){
    console.log('PoseNet is initialised');
}
function gotPoses(results){
    if(results.length>0){
        scoreRightWrist=results[0].pose.keypoints[10].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log('scoreRightWrist='+scoreRightWrist+'scoreLeftWrist='+scoreLeftWrist);

        rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log('rightWristX='+rightWristX+'rightWristY'+rightWristY);

leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log('leftWristX='+leftWristX+'leftWristY'+leftWristY);
    }
}

