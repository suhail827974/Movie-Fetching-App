let inputt = document.querySelector('input')
let btn = document.querySelector('button')
let list = document.querySelector('#list')


btn.addEventListener('click', () => {
    let searchText = inputt.value;
    let data = fetchData(searchText)
    inputt.value = "";
})

function fetchData(searchText) {
    // fetch 
    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        // console.log(data)
        manuplateDom(data)
    })


    // axios
    // axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    //     .then(function (response) {
    //         // console.log('Response is ',response);
    //         // console.log('Response is ', response.data)
    //         manuplateDom(response.data)
    //     })
}

function manuplateDom(responseData) {
    // first remove already presented movie then give result.
    while(list.firstChild){
        list.firstChild.remove();
    }

    for (let data of responseData) {
        let figuree = document.createElement('figure')
        figuree.innerHTML = `<img src="" alt="">
        <img src=${data.show.image.medium}>
        <h3>Name: ${data.show.name}</h3>
        <h5>Language: ${data.show.language}</h5>
        <h5>Genre: ${data.show.genre}</h5>
        <h5>Runtime: ${data.show.runtime}</h5>
        `
        list.appendChild(figuree)
    }

}