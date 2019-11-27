$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});


function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
if (!e.target.matches('.dropbtn')) {
var myDropdown = document.getElementById("myDropdown");
if (myDropdown.classList.contains('show')) {
  myDropdown.classList.remove('show');
}
}
}