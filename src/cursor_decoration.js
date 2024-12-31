document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // spawn chance
    if (Math.random() < 0.2) {
        const cursorDecoration = document.createElement('div');
        cursorDecoration.className = 'cursor-particles';
        cursorDecoration.style.left = x + 'px';
        cursorDecoration.style.top = y + 'px';
        document.body.appendChild(cursorDecoration);

        setTimeout(() => {
            cursorDecoration.remove();
        }, 2000);
    }
});

function updatePositions() {
    document.querySelectorAll('.cursor-particles').forEach(cursorDecoration => {
        cursorDecoration.style.left = parseInt(cursorDecoration.style.left) + Math.floor(Math.random() * 3) - 1 + 'px';
        cursorDecoration.style.top = parseInt(cursorDecoration.style.top) + Math.floor(Math.random() * -4.5) + 4 + 'px';
    });
}

setInterval(updatePositions, 2);