// Variable to store the interval ID for the animation
let animationInterval;

// Function to start animation
function startAnimation() {
    // disables the start button and enables the stop button
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;

    // Moves the image every 500 milliseconds
    animationInterval = setInterval(moveMeme, 500);
}

// function to stop the animation
function stopAnimation() {
    // disables the stop button and enable the start button
    document.getElementById('stopButton').disabled = true;
    document.getElementById('startButton').disabled = false;

    // Clear the interval to stop the animation
    clearInterval(animationInterval);
}

// Function to move the meme image to a random position around the center
function moveMeme() {
    // Get the meme image element
    const meme = document.getElementById('meme');

    // Generate random positions for the image 
    const randomX = (Math.random() - 0.5) *800; // Random value between -50 and 400
    const randomY = (Math.random() - 0.5) *800; // Random value between -50 and 400

    // Apply the random positions to the image using transform
    meme.style.transform = `translate(${randomX}px, ${randomY}px)`;
}