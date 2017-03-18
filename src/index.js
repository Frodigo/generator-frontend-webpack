import './assets/styles/styles.scss';
import HelloWorld from './assets/js/hello-world';

require('html-loader!./templates/index.html');

let indexPage = new HelloWorld('Hello from index page!');
console.log(indexPage.sayHello());
