function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("gallery_expandedImg");
    // Get the image text
    var imgText = document.getElementById("gallery_imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

function myFunction2(imgs) {
    var expandImg = document.getElementById("gallery_expandedImg2");
    var imgText = document.getElementById("gallery_imgtext2");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

function myFunction3(imgs) {
    var expandImg = document.getElementById("gallery_expandedImg3");
    var imgText = document.getElementById("gallery_imgtext3");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}