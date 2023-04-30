const quotes = [
    {
        quote : "Seize your moment",
        author : "Rachel",
    },
    {
        quote : "Behind the cloud is the sun still shining.",
        author : "Rachel",
    },
    {
        quote : "This too shall pass",
        author : "Rachel",
    },
    {
        quote : "All is well",
        author : "Rachel",
    },
    {
        quote : "When in doubt, choose change",
        author : "Rachel",
    },
    {
        quote : "Despite the forecast, live like it’s spring.",
        author : "Rachel",
    },
    {
        quote : "All you need in this life is ignorance and confidence, then success is sure",
        author : "Rachel",
    },
    {
        quote : "Live life to the fullest",
        author : "Rachel",
    },
    {
        quote : "No one is you and that is your power",
        author : "Rachel",
    },
    {
        quote : "It is better to fail in originality than to succeed in imitation",
        author : "Rachel",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(randomQuote);
quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
//author.innerText = randomQuote.index;


console.log(`randomQuote.quote ${randomQuote.quote} randomQuote.author${randomQuote.author}`);
