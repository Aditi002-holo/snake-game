import { update as updateSnake, draw as drawSnake, SNAKE_SPEED} from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';


let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");


function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

    // snake should move 2 times per second (1/2 sec once)
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    // console.log('Render');
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
}

function draw() {
    // to refresh the gameboard to not act weirdly
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}