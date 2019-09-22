// Grab the DOM elements
const button = document.querySelector('button');
const input = document.querySelector('input[type="number"]');
const sectionGrid = document.querySelector('.grid');

// Listen for click event button
button.addEventListener('click', getJokes);

function getJokes(e) {
   const number = input.value;

   // Prepare AJAX request and get data from API
   const xhr = new XMLHttpRequest();

   xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

   // Check that it returned a response and output

   xhr.onload = function () {
      if (this.status === 200) {
         const response = JSON.parse(this.responseText);
         let output = '';

         if (response.type === 'success') {
            response.value.forEach(function (joke) {
               output += `
                  <article class="card">
                     <p class="joke">${joke.joke}</p>
                  </article>
               `;
            });
         } else {
            output += '<p>Something wne wrong';
         }

         sectionGrid.innerHTML = output;
      }
   }

   xhr.send();

   e.preventDefault();
}