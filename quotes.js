const quotes = [
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    quote: "There are some things you learn best in calm, and some in storm.",
    author: "Willa Cather",
  },
  {
    quote: "I have the simplest tastes. I am always satisfied with the best.",
    author: "Oscar Wilde",
  },
  {
    quote: "Living well is the best revenge.",
    author: "George Herbert",
  },
  {
    quote: "A problem is a chance for you to do your best.",
    author: "Duke Ellington",
  },
  {
    quote: "To give anything less than your best, is to sacrifice the gift.",
    author: "Steve Prefontaine",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "We do not remember days, we remember moments.",
    author: "Cesare Pavese",
  },
  {
    quote: "Life is what happens while you are busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
];

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = `-${randomQuote.author}-`;
