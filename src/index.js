import { APP_NAME, Figure } from './myutil';

console.log(APP_NAME);
console.log(Figure.getTriangle(10, 5));

// css-loader, style-loader編
// このimportがあることによってloaderが走る
import './css/style.css';
import './css/style2.css';

let body = document.getElementsByTagName('body')[0];
body.classList.add('sky');

// url-loader編
// urlはbase64に変換される
import pic from './images/wings.jpeg';
window.addEventListener('DOMContentLoaded', function() {
    let img = new Image();

    img.src = pic;
    document.body.appendChild(img);
    console.log('loaded');
}, false);

// json編
import data from './jsons/test.json';
console.log('from json', data);

// csv編
import csv from './csv/sample.csv'
// import命令で読み込んだcsvファイルは2次配列としてアクセスできる
console.log('from csv', csv[0][1])

// html編
import html from './html/sample.html';
console.log(html);

// xml編
import xml from './xml/sample.xml';
console.log(xml.data.row[0]);
console.log(xml.data.row[1].$.id);
console.log(xml.data.row[2]._);
