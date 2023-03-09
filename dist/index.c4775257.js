// import reddit from './redditapi'
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchContainer = document.getElementById("search-container");
searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const keySearchTerm = searchInput.value;
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    const searchLimit = document.getElementById("limit").value;
    if (keySearchTerm === "") showMessages("Please add a search term", "alert-danger");
    searchInput.value = "";
    reddit.search(keySearchTerm, searchLimit, sortBy);
    function showMessages(message, className) {
        const div = document.createElement("div");
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        searchContainer.insertBefore(div, search);
    }
    setTimeout(()=>{
        const alert = document.querySelector(".alert-danger");
        alert.remove();
    }, 2000);
});

//# sourceMappingURL=index.c4775257.js.map
