// get the container from Document Object Model
var container = document.querySelector(`#container`);
// get the button from Document Object Model
var button = document.getElementById("load-photo");
// Declare the Url for fetching of the api
const url = `https://dog.ceo/api/breeds/image/random`;
// Declared to replace the container
var replacement = ``;

// function will fetch the Random Dog Photo
function getRandomDogPhoto() {
  // will returned the fetch url information
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
}

// will load the spinner
function loadSpinner() {
  // change the button state to disabled
  button.disabled = true;
  // store the spinner
  const spinner = `../assets/loader.svg`;
  // get the img tag
  const img = `<img src="${spinner}" id="spinner" alt="Loading spinner image" />`;
  // insert img inside the button
  button.insertAdjacentHTML(`afterbegin`, img);
}

// wiil remove the spinner
function removeSpinner() {
  // get the spinner
  const spinner = document.querySelector(`img#spinner`);
  // remove the spinner from the parent
  spinner.parentElement.removeChild(spinner);
}

// event handler method for the button
function handleButton() {
  // will be called to start the application
  init();
}

async function init() {
  // load the spinner
  loadSpinner();
  // get the whole data after fetch request is full filled
  const data = await getRandomDogPhoto();
  // print the data in console
  console.log(data);
  // remove the spinner
  removeSpinner();
  // call the renderDogPhoto
  renderDogPhoto(data);
}

// will call the renderDogPhoto method
function renderDogPhoto(url) {
  // print the url in consold
  console.log(url);

  // make the replacement string
  // it is very important
  // will be placed in place of current
  // container of DOM
  replacement += `<div id="container">
   <a href=""><h1 >The Fetch API Exercises</h1></a>
   <p>Open the <a href="">web inspector</a> console to test.</p>
 <img src="${url.message}" alt="Random photo of a dog" />
 </div>`;
  // change the container
  container.innerHTML = replacement;
}
//on click of the button call the handleButton method
button.addEventListener("click", handleButton);
