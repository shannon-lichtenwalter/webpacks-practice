import $ from 'jquery';
import {foo, bar, helloWorld} from './fileTwo'; //no longer needs the .js extension in webpacks
import './index.css';

console.log(foo);
console.log(bar);

function main() {
  console.log('DOM is loaded');
  const result = helloWorld();
  const startMsg = $(`<p>Webpack is working! Woah thats nuts! </p> ${result}`);
  $('#root').append(startMsg);
}

$(main);