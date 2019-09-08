import { APP_NAME, Figure } from './myutil';

console.log(APP_NAME);
console.log(Figure.getTriangle(10, 5));

// css-loader編
import './style.css';

let body = document.getElementsByTagName('body')[0];
body.classList.add('sky');
