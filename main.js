
status_of_coco = "";

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(475,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}

status1 = "";

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Status = Detecting Object"
    text = document.getElementById("text1").value;
}

function modelloaded(){
    console.log("Modelloaded!!");
    status1 = true;
}