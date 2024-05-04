document.getElementById('loveButton').addEventListener('click', function() {
    for (let i = 0; i < 10; i++) { // Create 10 hearts
        createHeartAnimation();
    }
});

function createHeartAnimation() {
    const heartAnimation = document.createElement('div');
    heartAnimation.classList.add('heart-animation');
    document.body.appendChild(heartAnimation);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 100 + 50;

    heartAnimation.style.left = x + 'px';
    heartAnimation.style.top = y + 'px';
    heartAnimation.style.width = size + 'px';
    heartAnimation.style.height = size + 'px';

    setTimeout(() => {
        heartAnimation.remove();
    }, 2000); // Remove heart animation after 2 seconds
}
