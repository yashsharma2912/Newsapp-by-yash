const api_key = "f341983ff09c40a3841e6d347e9982d2";
const api_link = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', ()=> fetchNews("India"));

async function fetchNews(query){
    const res = await fetch(`${api_link} ${query}&apiKey=${api_key}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardContainer = document.getElementById('card-container');
    const newsCardTemp = document.getElementById('temp-card');

    cardContainer.innerHTML = ``;

    articles.forEach( article => {
        if(!article.urlToImage) return;
        const cardClone = newsCardTemp.content.cloneNode(true);
        fillDataInCard(cardClone,article);
        cardContainer.appendChild(cardClone);  
    });
}
    
function fillDataInCard(cardClone,article){
    const newsImg = cardClone.querySelector('#newsImg');
    const newsTitle = cardClone.querySelector('#newsTitle');
    const newsSrc = cardClone.querySelector('#newsSource');
    const newsDesc = cardClone.querySelector('#newsDesc');

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocalString("en-Us",{
        timeZone : "Asia/Jakarta"
    }) 
    console.log(date);
    newsSrc.innerHTML = `${article.source.name} . ${date}`;
}