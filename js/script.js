/******************************************
 * Treehouse FSJS Techdegree:
 * Project 1 - A Random Quote Generator
 ******************************************/

/**
 * Quote Class
 * Represents a single quote with two properties:
 * @property {string} quote - The text of the quote.
 * @property {string} author - The person who said the quote.
 */
class Quote {
  constructor(quote, author) {
    this.quote = quote;   // Assigns the quote text.
    this.author = author; // Assigns the author's name.
  }
}

/**
 * `quotes` Array
 * An array of `Quote` objects, each containing a quote and its author.
 */
let quotes = [
  new Quote("Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.", "Patrick McKenzie"),
  new Quote("The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"),
  new Quote("The way to get started is to quit talking and begin doing.", "Walt Disney"),
  new Quote("Your time is limited, so don't waste it living someone else's life.", "Steve Jobs"),
  new Quote("If life were predictable it would cease to be life, and be without flavor.", "Eleanor Roosevelt"),
  new Quote("Life is what happens when you're busy making other plans.", "John Lennon")
];

/**
 * getRandomQuote Function
 * Generates a random index to access a quote from the `quotes` array.
 * @returns {number} A random index within the array length.
 */
function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  return randomIndex; // Returns the random index.
}

/**
 * printQuote Function
 * Fetches a random quote using `getRandomQuote` and updates the HTML content.
 */
function printQuote() {
  let randomIndex = getRandomQuote(); // Generate a random index.

  // Access DOM elements using class names.
  let quoteParagraph = document.getElementsByClassName("quote"); 
  let quoteAuthor = document.getElementsByClassName("source");

  // Update the HTML content with the random quote and author.
  quoteParagraph[0].textContent = quotes[randomIndex].quote;
  quoteAuthor[0].textContent = quotes[randomIndex].author;
}

/**
 * Event Listener
 * Adds an event listener to the 'load-quote' button to display a new quote
 * whenever the button is clicked.
 */
document.getElementById('load-quote').addEventListener("click", printQuote, false);
