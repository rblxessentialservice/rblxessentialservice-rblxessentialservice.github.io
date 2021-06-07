const listButton = document.getElementById('list')
const listItem = document.getElementById('list-item')
var open = true;
function OnClickList() {
    if (open == true) {
        open = false
        listItem.style.gridTemplateColumns = 'auto 0'
    } else {
        open = true
        listItem.style.gridTemplateColumns = '0 auto'
    }
}