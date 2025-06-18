// 1. Declare a variable name 'imageContainer' and store the html element with the id 'imageContainer'
//  - Using querySelector, store the selector #imageContainer

let imageContainer = document.querySelector("#imageContainer");

// 2. Add at least four image urls to the imageUrls array
let imageUrls = ["https://live.staticflickr.com/2574/3797687669_323c627a0e.jpg", 
    "https://static.vecteezy.com/system/resources/previews/022/726/415/non_2x/lilo-and-stitch-cartoon-free-vector.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ58jyNcmfxPL4cYiZlfo3K3i_0xNx9C1nLQ&s",
"https://static.vecteezy.com/system/resources/previews/023/450/336/non_2x/lilo-and-stitch-cartoon-poses-editorial-free-vector.jpg"];

// 3. Selecting the imageUrls array, create a forEach loop.
imageUrls.forEach(function(images){
    let image = document.createElement("img");
    image.src = images;
    imageContainer.appendChild(image);
})

// In side the body of the loop:
//  - Create an image element and store it in a variable named 'image'
//  - Update the src of the image element to equal the function parameter (the array element)
//  - Append the image to the image container.

