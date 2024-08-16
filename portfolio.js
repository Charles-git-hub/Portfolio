document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.querySelector('.typewriter');
    const robotIconElement = document.querySelector('.robot-icon');

    setTimeout(() => {
        // Remove the typewriter caret
        typewriterElement.classList.add('typewriter-done');
        
        // Trigger the robot icon animation
        robotIconElement.classList.add('animated');
    }, 4000); // 4000 milliseconds = 4 seconds
});
function toggleImage() {
    const image = document.getElementById('imageToToggle');
    const currentSrc = image.src;

    // Toggle between "pic.jpg" and "pic2.jpg"
    if (currentSrc.includes('pic.jpg')) {
        image.src = 'pic2.jpg';
    } else {
        image.src = 'pic.jpg';
    }
}
