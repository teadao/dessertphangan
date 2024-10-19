var expandedImg = null; 
var imgText = null;

function myFunction(imgs) {
    // Get the modal and expanded image elements
    var modal = document.getElementById("galleryModal");
    expandedImg = document.getElementById("gallery_expandedImg");
    imgText = document.getElementById("gallery_imgtext");

    // Use the same src and alt attributes
    expandedImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;

    // Display the modal
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("galleryModal");
    modal.style.display = "none";
}
