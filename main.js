import reddit from "./redditapi";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchContainer = document.getElementById("search-container");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keySearchTerm = searchInput.value;
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  const searchLimit = document.getElementById("limit").value;
  if (keySearchTerm === "") {
    showMessages("Please add a search term", "alert-danger");
  }

  searchInput.value = "";
  reddit.search(keySearchTerm, searchLimit, sortBy).then((result) => {
    let output = '<div class="card-columns">';
    result.forEach((post) => {
      console.log(post);
      let image = post.preview ? post.preview.images[0].source.url : "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";

      output += `
      <div class="card">
          <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
        <p class="card-text">${truncateText(post.selftext, 1000)}</p>
        <a href="${post.url}" target="blank" class="btn btn-primary">Go somewhere</a>
        <hr>
        <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
        <span class="badge badge-dark">Score: ${post.score}</span>
      </div>
      </div>
          `;
    });
    output += "</div>";
    document.getElementById('results').innerHTML = output;
  });

  function showMessages(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    searchContainer.insertBefore(div, search);
  }
  setTimeout(() => {
    const alert = document.querySelector(".alert-danger").remove();
  }, 3000);
});


function truncateText(text, limit){
   const shortened = text.indexOf(' ', limit);
    if(shortened == -1) return text;
    return text.substring(0, shortened);
}