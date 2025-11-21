// Welcome message
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully!");
    alert("Welcome to the Tourist Spots Website!");
});

// Highlight tourist spots on hover
const spots = document.querySelectorAll(".spot");

spots.forEach(spot => {
    spot.addEventListener("mouseenter", () => {
        spot.style.transform = "scale(1.05)";
        spot.style.transition = "0.3s";
        spot.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    });

    spot.addEventListener("mouseleave", () => {
        spot.style.transform = "scale(1)";
        spot.style.boxShadow = "none";
    });
});

// Button to show date and time
function showDateTime() {
    const now = new Date();
    const output = "Current Date & Time: " + now.toLocaleString();
    alert(output);
}

// Auto-change background color every 5 seconds
const colors = ["#F1FAEE", "#E8F0FE", "#FFF4E6", "#F0F4C3"];
let index = 0;

setInterval(() => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
}, 5000);
