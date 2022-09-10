//https://teachablemachine.withgoogle.com/models/7cBtGnJiV/
var soundDog = 0;
var soundCow = 0;
var soundCat = 0;
var soundGoose = 0;

function listen() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/7cBtGnJiV/model.json")
    modelLoaded()
}
function modelLoaded() {
    console.log("The model has loaded!")
    classifier.classify(gotResults)

}
function gotResults(error, results) {
    if (error) {
        console.error(error)
    }
    else {

        console.log(results)
        console.log(results[0].label)
        console.log(results[0].confidence)
        document.getElementById("noise").innerHTML = "I can hear-" + results[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy-" + (results[0].confidence * 100).toFixed(2) + "%";
        if (results[0].label == "dog") {
            soundDog = soundDog + 1
            document.getElementById("numb4Dog").innerHTML = "Number of dog sounds - " + soundDog
       
        }

        else if(results[0].label =="cow"){
            soundCow = soundCow + 1
          document.getElementById("numb4Cow").innerHTML = "Number of Cow sounds - " + soundCow
         
        }

        else if(results[0].label == "cat"){
            soundDog = soundCat + 1
            document.getElementById("numb4Cat").innerHTML = "Number of Cat sounds - " + soundCat
           
        }
        else{
            soundGoose = soundGoose + 1
            document.getElementById("numb4Goose").innerHTML = "Number of Geese sounds - " + soundGoose
        
        }


        r = Math.floor(Math.random() * 255)
        g = Math.floor(Math.random() * 255)
        b = Math.floor(Math.random() * 255)
        document.getElementById("noise").style.color = 'rgb(' + r + ',' + g + ',' + b + ')'
        document.getElementById("accuracy").style.color = 'rgb(' + r + ',' + g + ',' + b + ')'
    }
}
