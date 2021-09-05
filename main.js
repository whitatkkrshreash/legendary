var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    if (Content=="take my selfie" ){
        speak();    
    }
    
   
}
function speak() {
    var synth= window.speechSynthesis;
    speak_data="Taking your selfie in 999999 seconds";
    var utterthis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },2000);
   
}
camera=document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });

 function take_snapshot() {
     Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
     } );
 }

 function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();

 }