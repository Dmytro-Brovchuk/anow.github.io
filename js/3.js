var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}


const secretShow = document.querySelector('secret')

function secretShow() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
