// const form = document.querySelector('form');
// const searchResults = document.querySelector('#search-results');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const query = form.q.value;
//     const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDt8lfquzc8AtX2QEzff--ux58TbeSTKYY&cx=31dcfd3bdb357433e&q=${query}`;
//     searchResults.style.display = '';

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             searchResults.innerHTML = '';
//             if (data.items) {
//                 data.items.forEach(item => {
//                     const result = document.createElement('div');
//                     result.className = 'result';
//                     const title = document.createElement('h3');
//                     const link = document.createElement('a');
//                     link.target = '_blank';
//                     const snippet = document.createElement('p');
//                     title.textContent = item.title;
//                     link.href = item.link;
//                     link.textContent = item.link;
//                     snippet.textContent = item.snippet;
//                     result.appendChild(title);
//                     result.appendChild(link);
//                     result.appendChild(snippet);
//                     searchResults.appendChild(result);
//                 });
//             }})

//             });
















const form = document.getElementById('search-form');
const searchResults = document.getElementById('search-results');

const pageSize = 10;
let start = 1;

function showResults(results) {
  searchResults.innerHTML = '';
  results.forEach(item => {
    const result = document.createElement('div');
    result.className = 'result';
    const title = document.createElement('h3');
    const link = document.createElement('a');
    link.target = '_blank';
    const snippet = document.createElement('p');
    title.textContent = item.title;
    link.href = item.link;
    link.textContent = item.link;
    snippet.textContent = item.snippet;
    result.appendChild(title);
    result.appendChild(link);
    result.appendChild(snippet);
  })};

searchResults.style.display = 'none';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = form.q.value;
    const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDt8lfquzc8AtX2QEzff--ux58TbeSTKYY&cx=31dcfd3bdb357433e&q=${query}`;
    searchResults.style.display = '';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            searchResults.innerHTML = '';
            if (data.items) {
                data.items.forEach(item => {
                    const result = document.createElement('div');
                    result.className = 'result';
                    const title = document.createElement('h3');
                    const link = document.createElement('a');
                    link.target = '_blank';

                    const snippet = document.createElement('p');
                    title.textContent = item.title;
                    link.href = item.link;
                    link.textContent = item.link;
                    snippet.textContent = item.snippet;
                    result.appendChild(title);
                    result.appendChild(link);
                    result.appendChild(snippet);
                    searchResults.appendChild(result);
                });
            } else {
                searchResults.textContent = 'Ничего не найдено.';
            }
        })
        .catch(error => {
            console.error(error);
            searchResults.textContent = 'Ошибка при выполнении запроса.';
        });


});