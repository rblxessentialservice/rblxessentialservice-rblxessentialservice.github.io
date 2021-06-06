const path1 = 'https://rblxessentialservice.github.io/functions?';
var href = window.location.href

function Scroll(toplevel) {
    window.scrollTo({top: toplevel, left: 0, behavior: 'smooth'});
}

if (href == path1 + "create") {
    var thing = document.getElementById("create"); Scroll(thing.getBoundingClientRect().top)
}
else if (href == path1 + "replace") {
    var thing = document.getElementById("replace"); Scroll(thing.getBoundingClientRect().top)
}
else if (href == path1 + "opacity") {
    var thing = document.getElementById("opacity"); Scroll(thing.getBoundingClientRect().top)
}
else if (href == path1 + "import") {
    var thing = document.getElementById("import"); Scroll(thing.getBoundingClientRect().top)
}
else if (href == path1 + "find") {
    var thing = document.getElementById("find"); Scroll(thing.getBoundingClientRect().top)
}
else if (href == path1 + "findall") {
    var thing = document.getElementById("findall"); Scroll(thing.getBoundingClientRect().top)
}