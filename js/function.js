const path1 = 'https://rblxessentialservice.github.io/functions?';
var href = window.location.href

if (href == path1 + "create") {
    var thing = document.getElementById("create")
    window.scrollTo({top: thing.getBoundingClientRect().top , left: 0, behavior: 'smooth'});
} else if (href == path1 + "replace") { 
    var thing = document.getElementById("replace")
    window.scrollTo({top: thing.getBoundingClientRect().top, left: 0, behavior: 'smooth'});
}