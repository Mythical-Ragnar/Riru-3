// Get the modal
var modal = document.getElementById("popup-modal");

// Get the button that opens the modal
var btn = document.getElementById("popup-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    setTimeout(function() {
        modal.classList.add("show");
    }, 50); // Add a slight delay for transition effect
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.classList.remove("show");
    setTimeout(function() {
        modal.style.display = "none";
    }, 300); // Delay the hiding of the modal after transition effect
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("show");
        setTimeout(function() {
            modal.style.display = "none";
        }, 300); // Delay the hiding of the modal after transition effect
    }
}
