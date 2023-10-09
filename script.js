document.addEventListener("DOMContentLoaded", function () {
    const images = ["Clock 1@4x.png", "Clock 2@4x.png", "Clock 3@4x.png", "Clock 4@4x.png", "Clock 5@4x.png", "Clock 6@4x.png", "Clock 7@4x.png", "Clock 8@4x.png"]; // Add more image file names as needed
    const imageElement = document.getElementById("changing-image");
    let currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }

    setInterval(changeImage, 400); // Change image every 5 seconds (adjust the interval as needed)
});

function changeImage() {
    document.getElementById("image").src = "LampOn.png"; // Change to the new image on hover
}

function restoreImage() {
    document.getElementById("image").src = "LampOff.png"; // Restore the original image on mouseout
}

function flipImage() {
    flipCardInner.style.transformOrigin = "center bottom";
    document.querySelector(".fall-over-inner").style.transform = "rotateX(180deg)";
}

function unflipImage() {
    flipCardInner.style.transformOrigin = "center bottom";
    document.querySelector(".fall-over-inner").style.transform = "rotateX(0deg)";
}

function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }


function lightmode() {
    var element = document.body;
    element.classList.toggle("light-mode");
  }
  
