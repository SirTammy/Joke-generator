const joke = document.querySelector('#jokes')
const button = document.querySelector('button')





const showJoke = async() => {
    const jokeData = await getDadJoke()
    joke.innerHTML = jokeData;
    joke.style.display = 'block'
}




const getDadJoke = async () => {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke
}

button.addEventListener('click', showJoke)