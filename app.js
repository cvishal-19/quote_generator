let btn = document.querySelector("button");
let quotee = document.querySelector( ".quote_content");
let authori = document.querySelector(".quote_author");

const quotes = [
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "Life is what happens when you're busy making other plans.", author: "John Lennon"},
    {quote: "The purpose of our lives is to be happy.", author: "Dalai Lama"},
    {quote: "Life is what we make it, always has been, always will be.", author: "Grandma Moses"},
    {quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"},
    {quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"},
    {quote: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney"},
    {quote: "Everything you can imagine is real.", author: "Pablo Picasso"},
    {quote: "The power of imagination makes us infinite.", author: "John Muir"},
    {quote: "Try to be a rainbow in someone's cloud.", author: "Maya Angelou"},
    {quote: "The best way to predict your future is to create it.", author: "Abraham Lincoln"},
    {quote: "You do not find the happy life. You make it.", author: "Camilla Eyring Kimball"},
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"},
    {quote: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln"},
    {quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller"},
    {quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison"},
    {quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy"},
    {quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
    {quote: "Don't count the days, make the days count.", author: "Muhammad Ali"},
    {quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius"}
];


btn.addEventListener('click', function()
{
    const r = Math.floor(Math.random() * quotes.length);
    quotee.innerText = quotes[r].quote;
    authori.innerText = quotes[r].author;
});  
