window.onload = function() {
    const jumpImg = document.getElementById('jumping-vibe');
    
    function relocate() {
        // Calculate the screen boundaries
        const maxX = window.innerWidth - jumpImg.clientWidth;
        const maxY = window.innerHeight - jumpImg.clientHeight;

        // Generate random spots
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        // Apply the move
        jumpImg.style.left = randomX + 'px';
        jumpImg.style.top = randomY + 'px';
    }

    // Set an initial position
    relocate();

    // Make it jump every 5 seconds
    setInterval(relocate, 5000);

    // Make it jump if she tries to touch it!
    jumpImg.addEventListener('mouseenter', relocate);
    jumpImg.addEventListener('touchstart', relocate);
};