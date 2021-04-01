const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

const getDadjoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } }
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        return res.data.joke
    }
    catch (err) {
        return "No jokes available..."
    }

}

const addNewJoke = async () => {
    const jokeReturn = await getDadjoke()
    const newLiJoke = `<li>${jokeReturn}</li>`
    jokes.innerHTML += newLiJoke
}

button.addEventListener('click', addNewJoke)