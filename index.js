function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    } else {
        image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    }
}

var bulb = false;
function TurnOnOff() {
    var image = document.getElementById('myimage2');
    if (bulb) {
        image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        bulb = false;
    } else {
        image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        bulb = true;
    }
}