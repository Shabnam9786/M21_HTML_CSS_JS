// DOM-Doc obj model - tree structure of whole HTML

// ELEMENT SELECTORS

// delete items
document.querySelector(".items");

/* document.querySelector(".item1");
var item =document.querySelector(".item1");
item.remove();
document.querySelector(".item2");
var item = document.querySelector(".item2");
item.remove();
document.querySelector(".item3");
var item = document.querySelector(".item3");
item.remove();
document.querySelector(".item4");
var item = document.querySelector(".item4");
item.remove();
document.querySelector(".item5");
var item = document.querySelector(".item5");
item.remove(); */


// update items
var item = document.querySelector(".item1");
item.textContent="Good Morning";

// change item2 to heading
var item = document.querySelector(".item2");
item.innerHTML="<h1>Hello</h1>";

// update button color to red
var button = document.querySelector(".btn");
button.style.background = "red";


// EVENTS
var button = document.querySelector(".btn");
button.addEventListener("click",(e) =>
                        {
    console.log("click");
e.preventDefault();
});

//Keyboard event
let nameInput=document.querySelector("#name");

let emailInput=document.querySelector("#email");

nameInput.addEventListener("input" , e =>
{
   document.querySelector(".container").append(nameInput.value);

 });

 emailInput.addEventListener("input" , e =>
{
   document.querySelector(".container").append(emailInput.value);

 });
                                  
                                  
function onSubmit(e)
{
  e.preventDefault();
}

console.log(nameInput);
console.log(nameInput.value);


let myform=document.querySelector("#my-form");

myform.addEventListener("submit",onSubmit )
              

let msg=document.querySelector(".msg");
if(nameInput.value === '' || emailInput.value === '')
{
  msg.classList.add('error');
  msg.innerHTML = 'Please enter all fields';
  setTimeout(() => msg.remove(), 3000);
}
else
{
  console.log('success');
}


  // As & when users get registered add into LIST
let userList = document.querySelector("#users");


  if(nameInput.value === '' || emailInput.value === '')
  {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  }
  else
  {
    // Create new list item with user
    let li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Append to ul
    userList.appendChild(li);
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }