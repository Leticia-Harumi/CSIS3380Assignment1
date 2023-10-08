/*
Leticia Ishiyama
CSIS 3380 - Fall 2023
October 8, 2023
*/


// array of quotes
let quotes = [];
quotes.push(
    {
        quote:"Everything that irritates us about others can lead us to an understanding of ourselves.", 
        source:"Carl Jung"
    },
    {
        quote:"Let the young know they will never find a more interesting, more instructive book than the patient himself.", 
        source:"Giorgio Baglivi"
    },
    {
        quote:"It is only with the heart that one can see clearly. What is essential is invisible to the eye.", 
        source:"The Little Prince",
        citation:"Antoine de Saint-Exupéry",
        year: "1943"
    },
    {
        quote:"Be content with what you have. Rejoice in how things are. When you realize there is nothing lacking the whole world belongs to you.", 
        source:"Lao Tzu"
    },
    {  
        quote:"Becoming is better than being.", 
        source:"Carol S. Dweck"
    }
);

//function for random quotes
function getRandomQuote(){
    let random_num = Math.floor(Math.random() * quotes.length);
    return quotes[random_num];
}

// function to print quotes
function printQuote() {
    // calls the getRandomQuote() and stores 
    let random_quote = getRandomQuote();
    // initiate paragraph with quote and source
    let parag = `<p class="quote">${random_quote.quote}</p>
                <p class="source">${random_quote.source}`;
    // if existing citation, concatenate to paragraph
    if(random_quote.citation != null){
        parag += `<span class="citation">${random_quote.citation}</span>`
    }
    // if existing year, concatenate to paragraph
    if(random_quote.year != null){
        parag += `<span class="year">${random_quote.year}</span>`
    }
    // concatenate closing paragraph
    parag += `</p>`
    // change inner text of box to paragraph text
    const boxText = document.querySelector(`.quote-box`);
    boxText.innerHTML = parag;
}

// event listens to click in "next quote"
document.addEventListener('DOMContentLoaded', printQuote);
document.querySelector(`.load-quote`).addEventListener(`click`, printQuote);