import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;

// x and y positions - 21 grids so 21/2 ~ 11
const snakeBody = [
    {x: 11, y: 11},
];
export function update() {
    // imports input direction from input js
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length - 2; i >= 0; i--) {
        // moving everything to a new object
        snakeBody[i+1] = { ...snakeBody[i] };

    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        // x and y for each snakeBody segment
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;

        // add the class snake - defined in css
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}