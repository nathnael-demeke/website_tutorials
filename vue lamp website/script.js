var toggleButton = document.getElementById("button")
var light = document.getElementById("light")
toggleButton.onclick = function () {
        toggleButton.classList.toggle("active")
        light.classList.toggle("on")
}
