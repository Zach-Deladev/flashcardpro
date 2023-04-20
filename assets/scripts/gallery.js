const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const imgselected = document.getElementById("imgselect");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");

// create array for image indexs 
const imgindex = [1, 2, 3, 4, 5];

// initialize current image index
let currentImageIndex;

//  open and close popup functions
function openPopup(i) {
    popup.style.transform = "translateY(0)";
    imgselected.src = `./assets/imgs/g-${i}.jpg`;
  
} 

function closePopup() {
    popup.style.transform = "translateY(-100%)";
    imgselected.src = "";
    
}


//  dynamically create images and add them to the galleryImg div
imgindex.forEach(i => {
    const image = document.createElement("img");
    image.src = `../assets/imgs/g-${i}.jpg`;
    image.classList.add("galleryImg");

    image.addEventListener("click", () => {
        currentImageIndex = i;
        openPopup(i);
    });

    gallery.appendChild(image);
});


// next and previous buttons functionality
function showNextImage() {
    if (currentImageIndex < imgindex.length) {
        currentImageIndex++;
    } else {
        currentImageIndex = 1;
    }
    openPopup(currentImageIndex);
}

function showPrevImage() {
    if (currentImageIndex > 1) {
        currentImageIndex--;
    } else {
        currentImageIndex = imgindex.length;
    }
    openPopup(currentImageIndex);
}


// event listeners for the popup and buttons 

popup.addEventListener("click", closePopup);

nextBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    showNextImage();
});
prevBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    showPrevImage();
});