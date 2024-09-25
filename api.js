let cardImg = document.querySelector(".newsCardImg");
let cardTitle = document.querySelector(".newsTitle");
let cardPara = document.querySelector(".newsPara");
let container = document.querySelector(".articleContainer")
fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-08-25&sortBy=publishedAt&apiKey=c9f9121507064963b32afacf1537ae22")
.then((res)=>res.json())
.then((res)=> { res.articles.map((article) => {
        const articleDiv = document.createElement("div");
        const title = document.createElement("h1");
        const content = document.createElement("p");
        const image = document.createElement("img");

        title.innerText = article.title.slice(0, 50);  
        content.innerText=article.content.slice(0,250);
        image.setAttribute("src", article.urlToImage);
        image.setAttribute("alt", article.title);

        articleDiv.appendChild(title);
        articleDiv.appendChild(content);
        articleDiv.appendChild(image);

        container.appendChild(articleDiv);
    });
})
    res.articles.map((articles,index)=>
    {
        console.log(`articles: ${index+1}:`);
        console.log(`title: ${articles.title}`);
        console.log(`content: ${articles.content}`);
        console.log(`image URL: ${articles.urlToImage}`);
    });





// const users= sahil.users.map(user=>{
//     return{
//         source:[object],
//         author:user.name,
//         title:user.title,
//         description:user.description,
//         url:user.url,
//         urlToImage:user.urlToImage,
//         publishedAt:user.publishedAt,
//         content:user.content,
//     }
// })
// sahil.array.forEach(element => {
//     const markup=`<li>${user.name}</li>`;
//     document.querySelector("ul").insertAdjacentHTML('beforeend',markup);
// });
