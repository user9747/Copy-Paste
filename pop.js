
function pasteFirebase() {
    console.log("paste")
}
function copyFirebase() {
    console.log("copy")
}

document.getElementById("paste").addEventListener('click', pasteFirebase)
document.getElementById("copy").addEventListener('click', copyFirebase)