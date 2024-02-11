// JavaScript code for handling button clicks
document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'available.html'; // Redirects to available.html if 'Yes' is clicked
});

let noButtonClickCount = 0;
let phraseIndex = 0;
let gifChanged = false; // Flag to track whether the GIF has been changed

const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');
const gifImage = document.getElementById('gif'); // Reference to the GIF element
const phrases = [
    "Are you sure?",
    "Are you really sure??",
    "Are you really really sure???",
    "Think again?",
    "Don't believe in second chances?",
    "Why are you being so cold?",
    "Maybe we can talk about it?",
    "I am not going to ask again!",
    "Ok now this is hurting my feelings!",
    "You are now just being mean!",
    "Why are you doing this to me?",
    "Please give me a chance!",
    "I am begging you to stop!",
    "Come on, don't break my heart!",
    "You're giving me a workout with all these no's!",
    "Are you trying to challenge my persistence?",
    "Is 'no' your favorite word today?",
    "Let's turn those no's into maybe's and then yes's!",
    "I promise saying yes will make you smile!",
    "I'll bring the snacks if you bring the yes!"
];

document.getElementById('noBtn').addEventListener('click', function() {
    noButtonClickCount++;

    // Change text of the No button to persuade her
    if (phraseIndex < phrases.length) {
        noButton.textContent = phrases[phraseIndex];
        phraseIndex++;
    }

    // Change the GIF when the first "No" button is clicked
    if (!gifChanged) {
        gifImage.src = './imgs/secondnewgif.gif'; // Update the src attribute with the new GIF file
        gifChanged = true; // Update the flag to indicate the GIF has been changed
    }

    // Increase the width and height of the Yes button proportionally
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const currentWidth = yesButton.offsetWidth;
    const currentHeight = yesButton.offsetHeight;

    const incrementWidth = 1600 / 21; // Divide the desired final width by 21 steps
    const incrementHeight = 600 / 21; // Divide the desired final height by 21 steps
    const incrementFontSize = 6; // Set the increment value for font size

    // Limit the final size of the Yes button to 1600x800
    if (noButtonClickCount >= 21) {
        alert("There, you can't say no anymore :P"); // Show alert before hiding No button
        document.getElementById('noBtn').style.display = 'none'; // Hide No button after 21 clicks
    }

    if (currentWidth + incrementWidth <= 1600 && currentHeight + incrementHeight <= 600) {
        yesButton.style.width = (currentWidth + incrementWidth) + 'px';
        yesButton.style.height = (currentHeight + incrementHeight) + 'px';
        yesButton.style.fontSize = (parseFloat(window.getComputedStyle(yesButton).fontSize) + incrementFontSize) + 'px';
    } else {
        yesButton.style.width = '1600px'; // Set width to 1600px if it exceeds
        yesButton.style.height = '600px'; // Set height to 800px if it exceeds
    }
});
