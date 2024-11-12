var arrayOfQuotes = [
  {
    author: "Jim Ron",
    quote: "Beware of what you become in pursuit of what you want.",
  },
  {
    author: "Epictetus",
    quote:
      "It's not what happens to you, but how you react to it that matters.",
  },
  { author: "Frank Sinatra", quote: "The best revenge is massive success." },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Wayne Gretzky",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: "Frank Zappa",
    quote: "So many books, so little time.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish tos see in the world",
  },
];

function generateQuote() {
  var random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
  document.getElementById(
    "quoteOutput"
  ).textContent = `\n"${arrayOfQuotes[random].quote}\n"`;
  document.getElementById(
    "authorOutput"
  ).textContent = `\n__ ${arrayOfQuotes[random].author}__\n`;
}
