// display modal, set the amount of time before it appears to 3 seconds

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
 
function display() {
    modal.style.display = "block";
}

setTimeout(display, 3000);

// gives the option to close modal with clicking on the x button

span.addEventListener('click', function() {
    modal.style.display = "none";
});



