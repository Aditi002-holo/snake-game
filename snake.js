import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 4;

// x and y positions - 21 grids so 21/2 ~ 11
const snakeBody = [
    {x: 11, y: 11},
];

let newSegments = 0;
export function update() {
    addSegments();

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


export function expandSnake(amount) {
    newSegments += amount;
}

// position is on the snake or not
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false;
        return equalPositions(segment, position);
    })
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPositions(pos1, pos2) {
    return (
        pos1.x === pos2.x && pos1.y === pos2.y
    );
}

function addSegments() {
    for(let i = 0; i < newSegments; i++) {
        // alternative - snakeBody.push({ ...snakeBody[snakeBody.length - 1]});
        snakeBody[snakeBody.length] = { ...snakeBody[snakeBody.length - 1]};
    }

    newSegments = 0;
}