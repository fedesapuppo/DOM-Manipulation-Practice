//get a reference to the container div that already exists in the HTML
const container = document.querySelector('#container');

// create <p> element and store it in p variable
const paragraph = document.createElement('p');

//set <p> color to red
paragraph.style.color = 'red';   

//add text to p element
paragraph.textContent = "Hey! I'm red";

//append <p> element to container
container.appendChild(paragraph);

//create, style and append other elements
const h3 = document.createElement('h3');
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const div = document.createElement('div');
// adds several style rules
div.style.cssText = 'border-style: solid; background: pink';

//create and append <h1> and <p> elements
const anotherH = document.createElement('h1');
anotherH.textContent = "I'm in a div";
div.appendChild(anotherH);

const anotherP = document.createElement('p');
anotherP.textContent = "ME TOO!";
div.appendChild(anotherP);

//add div to the container
container.appendChild(div);   

//add event listener to button and execute anonimous function
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

//add event listener to button and execute a named function
//      btn.addEventListener('click', alertFunction);
//
//      function alertFunction() {
//      alert("YAY! YOU DID IT!");
//       }

//add event listener to button and execute a function with an argument
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
// and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

