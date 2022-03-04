 let quotes = document.getElementById("quotes");
 let quoteBtn = document.getElementById("newQuoteBtn")
 let author = document.getElementById("author");


 quoteBtn.addEventListener("click", quotesFunc)


 function quotesFunc() {
     fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
         quotes.innerText = result.content;
         author.innerText = "- " + result.author
     })
 }

 window.addEventListener("keydown", function(e) {
     if (e.keyCode == 13) {
         quotesFunc();
     }
 })