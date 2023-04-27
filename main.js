var modelo = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/THm3NpBKg/model.json", listo)
Webcam.set({
    width:450,
    height: 400,
    image_format: "png",
    png_quality: 90
})
Webcam.attach("#camara")
function tomarFoto() {
    Webcam.snap(function (data_uri) {
        document.getElementById("captura").innerHTML = '<img id ="foto" src="' + data_uri + '"/>';
    })
}
function listo(){
    console.log("estoy listo");
}
function analizarFoto() {
    imagen = document.getElementById("foto");
    modelo.classify(imagen, resultado);
}
function resultado(error, respuesta) {
    if(!error){
        emocion1 = respuesta[0].label;
        emocion2 = respuesta[1].label;
        document.getElementById("emocion1").innerHTML = emocion1;
        document.getElementById("emocion2").innerHTML = emocion2;
        switch(emocion1){
            case "sorprendido": 
            document.getElementById("emoji1").innerHTML = "😮"
            break;
            case "triste":
            document.getElementById("emoji1").innerHTML = "😕"
            break; 
            case "feliz":
            document.getElementById("emoji1").innerHTML = "😀"
            break; 
            case "enojado":
            document.getElementById("emoji1").innerHTML = "😡"
            break; 
            case "confundido":
            document.getElementById("emoji1").innerHTML = "🤨"
            break; 
            case "serio":
            document.getElementById("emoji1").innerHTML = "😐"
            break;
            case "la roca":
            document.getElementById("emoji1").innerHTML = "🤔"
            break;
        } 
        switch(emocion2){
            case "sorprendido": 
            document.getElementById("emoji2").innerHTML = "😮"
            break;
            case "triste":
            document.getElementById("emoji2").innerHTML = "😕"
            break; 
            case "feliz":
            document.getElementById("emoji2").innerHTML = "😀"
            break; 
            case "enojado":
            document.getElementById("emoji2").innerHTML = "😡"
            break; 
            case "confundido":
            document.getElementById("emoji2").innerHTML = "🤨"
            break; 
            case "serio":
            document.getElementById("emoji2").innerHTML = "😐"
            break;
            case "la roca":
            document.getElementById("emoji2").innerHTML = "🤔"
            break;
        }
    }
}