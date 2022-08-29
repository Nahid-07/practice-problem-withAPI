const load = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayQuote(data))
}
const  displayQuote = (content) =>{
    const container = document.getElementById('container');
    container.innerText = content.quote;
}