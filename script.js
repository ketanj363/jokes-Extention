fetch("https://icanhazdadjoke.com/slack")
.then(data=> data.json()) // convert data into json format 
.then(jokeData => {
    const jokeText = jokeData.attachments[0].text;  // tke outr joke text from the data 
    const jokeele = document.getElementById('jokeele');  // acces p tag
    jokeele.innerHTML = jokeText;
})