let lastRenderTime = 0;
// how many times snake moves per second
const SNAKE_SPEED = 2;

function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

    // snake should move 2 times per second (1/2 sec once)
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    window.requestAnimationFrame(main);
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);