export default{
    search: function(keySearchTerm, searchLimit, sortBy){
        return fetch(`http://www.reddit.com/search.json?q=${keySearchTerm}&sort=${sortBy}&limit=${searchLimit}`)
        .then(res=> res.json()).then(data => data.data.children.map(data => data.data))
        .catch(err => console.log(err));
    }
}

