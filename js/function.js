const path1 = 'https://rblxessentialservice.github.io/functions?';
var href = window.location.href

if (href == path1 + "create") {
    var thing = document.getElementById("create")
    console.log(thing.style.top)
    window.scrollTo({top: thing.style.top , left: 0, behavior: 'smooth'});
}