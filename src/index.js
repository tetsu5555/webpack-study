import { APP_NAME, Figure } from './myutil';

console.log(APP_NAME);
console.log(Figure.getTriangle(10, 5));

// css-loader, style-loader編
// このimportがあることによってloaderが走る
import './css/style.css';
import './css/style2.css';

let body = document.getElementsByTagName('body')[0];
body.classList.add('sky');
