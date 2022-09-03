fetch('https://api.chucknorris.io/jokes/random')

.then(response =>{
    return response.json()
})
.then((data)=>{
    const news = data.value;
    console.log(news);
})

.catch()