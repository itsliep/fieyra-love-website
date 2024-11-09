// JavaScript to make bubbles interactive
document.querySelectorAll('.bubble').forEach((bubble) => {
    bubble.addEventListener('click', function() {
        // Change bubble color when clicked
        bubble.style.backgroundColor = '#FFD700'; // Change to golden color
        setTimeout(() => {
            bubble.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'; // Reset after 1 second
        }, 500);
    });
});
