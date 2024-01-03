const api_key = "f341983ff09c40a3841e6d347e9982d2";
const api_link = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', ()=> fetchNews("India"));

async function fetchNews(query){
    const res = await fetch(`${api_link} ${query}&apiKey=${api_key}`);
    const data = await res.json();
    console.log(data);
    bindData(data.articles);
}

function bindData(articles) {
    const cardBox = document.getElementById('cardBox');
    const newsCardTemp = document.getElementById('temp-card');

    cardBox.innerHTML = "";

    articles.forEach(article => {
        if(!article.urlToImage) return;
        const cardClone = newsCardTemp.content.cloneNode(true);
        cardBox.appendChild(cardClone);
        
    })
}