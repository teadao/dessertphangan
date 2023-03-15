var expandedImg = null;
var imgText = null;

function myFunction(imgs) {
    if (expandedImg !== null) {
        expandedImg.parentElement.style.display = "none";
    }
    // Get the expanded image
    expandedImg = document.getElementById("gallery_expandedImg");
    // Get the image text
    imgText = document.getElementById("gallery_imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandedImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandedImg.parentElement.style.display = "block";
}

function myFunction1(imgs) {
    if (expandedImg !== null) {
        expandedImg.parentElement.style.display = "none";
    }
    // Get the expanded image
    expandedImg = document.getElementById("gallery_expandedImg1");
    // Get the image text
    imgText = document.getElementById("gallery_imgtext1");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandedImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandedImg.parentElement.style.display = "block";
}

function myFunction2(imgs) {
    if (expandedImg !== null) {
        expandedImg.parentElement.style.display = "none";
    }
    // Get the expanded image
    expandedImg = document.getElementById("gallery_expandedImg2");
    // Get the image text
    imgText = document.getElementById("gallery_imgtext2");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandedImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandedImg.parentElement.style.display = "block";
}
