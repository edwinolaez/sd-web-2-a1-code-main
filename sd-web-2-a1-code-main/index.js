document.addEventListener('DOMContentLoaded', function() {
  "use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];


// broken test data for exercise 6

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
users.forEach(user => // goes thru the array
{
  console.log(user.name); // shows the person in the array
  const li = document.createElement('li'); // creates the list
  li.textContent = user.name; // adds the names of the persons to the list
  document.getElementById('names-list').appendChild(li); // compiles the person to a lsit 
});

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
const young =users.filter(user => user.age <40); // declares to look for person over 40
young.forEach(user => { // loops thru the array looking for person over 40
  console.log(user.name); // 
  const li = document.createElement('li'); // creates a list of person over 40
  li.textContent = user.name; // assigns the person to the list
  document.getElementById('young-characters').appendChild(li); // compiles all person over 40 to a list
});

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
function createList(array,listId) // function that takes the array and ID of the list to be created to a new list
{
  for (let i=0; i < array.length; i++) // loops thru the array 
  {
    let li = document.createElement('li'); // creates a new list
    li.textContent = array[i].name; // assigns the names in the array to the new list
    document.getElementById(listId).appendChild(li); //adds the to the new list
  }
} 
createList(users,'function-list');  // calls the function
  
// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
function filterByAge(array, ageThreshold,listId) //functions that take array, age thershold and list ID to create a list of filtered data
{
  for (let i=0; i < array.length;i++) // loops thru the array
  {
    if(array[i].age <ageThreshold) // checks the array against the threshold that will be declared 
    {
      let li = document.createElement('li') // creates the list of filtered data 
      li.textContent = array[i].name; // assigns the person that is true compared to the threshold
      document.getElementById(listId).appendChild(li);// adds the other person under the saem threshold to the list
    }
  }
}
filterByAge(users,40,"age-filter-list"); // executes the function

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
function errorhandling(array, listId, errorDivId) //function that takes array of person and id to create a list 
{
  for (let i=0; i < array.lenght; i++)// loops thru the array
  {
    let li = document.createElement('li'); // creates new list of person
    li.textContent = array[i].name; // assigns the person on the list
    if (array[i].name ===undefined) // checks if the person has a name property
    {
      console.error(`Error: Person at list ${i} is missing a name property!`); // shows errros message
      document.getElementById(errorDivId).textContent += `Error: Person at list ${i} is missing a name property!`; //shows the details of the error
    }
    else
    {
      document.getElementById(listId).appendChild(li); // shows list with no error
    }
  }
}

errorhandling(users, 'error-handling-list', 'error-messages'); // calls the function

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"


});