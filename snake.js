export const SNAKE_SPEED = 2;

// x and y positions - 21 grids so 21/2 ~ 11
const snakeBody = [{x: 11, y: 11}];
export function update() {
    // console.log('update snake')
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        // x and y for each snakeBody segment
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;

        // add the class snake - defined in css
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}