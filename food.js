import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition} from './grid.js'

let food = randomGridPosition();
const EXPANSION_RATE = 1;

export function update() {
    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = randomGridPosition();
    }
}

export function draw(gameBoard) {
        const foodElement = document.createElement('div');
        // x and y for each snakeBody segment
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;

        // add the class snake - defined in css
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition === undefined || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }

    return newFoodPosition;
}