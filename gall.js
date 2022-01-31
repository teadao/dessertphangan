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

function myFunction1(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("gallery_expandedImg1");
    // Get the image text
    var imgText = document.getElementById("gallery_imgtext1");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

function myFunction2(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("gallery_expandedImg2");
    // Get the image text
    var imgText = document.getElementById("gallery_imgtext2");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}