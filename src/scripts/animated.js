function randomizeFonts() {
    var fonts = [
        "Taviraj-Black", 
        "Taviraj-Bold", 
        "Taviraj-Light", 
        "Taviraj-Regular", 
        "Taviraj-BlackItalic", 
        "Taviraj-BoldItalic", 
        "Taviraj-LightItalic", 
        "Taviraj-Italic", 
        "QuattrocentoSans-Bold", 
        "QuattrocentoSans-Regular", 
        "QuattrocentoSans-Italic", 
        "QuattrocentoSans-BoldItalic"
    ]
    
    var textButtons = document.getElementsByClassName("text-button");

    for (var i = 0; i < textButtons.length; i++) {
        textButtons[i].style.fontFamily = fonts[Math.floor(Math.random()*fonts.length)];
    }
}