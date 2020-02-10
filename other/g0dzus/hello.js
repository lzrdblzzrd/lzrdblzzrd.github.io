/*Coded by g0dz*/
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 252);

}

var x = 0;

var titleText = [ ">", "> g", "> g0", "> g0d", " > g0dz", "> g0dz.", "> g0dz.u", "> g0dz.us", "< g0dz.u", "< g0dz.", "< g0dz", "< g0d", "< g0", "g <", "<", "<", ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

$(document).keydown(function(event) {
    if (event.keyCode == 123) {
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        return false; //Prevent from ctrl+shift+i
    }
});

$(document).on("contextmenu",function(e){        
   e.preventDefault();
});