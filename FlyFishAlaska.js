var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
 
function display() {
    modal.style.display = "block";
}

setTimeout(display, 3000);

span.addEventListener('click', function() {
    modal.style.display = "none";
});



