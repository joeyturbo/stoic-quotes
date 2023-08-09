const btn = document.getElementById('btn');
const img = document.querySelector('.image-container');
const quoteContainer = document.querySelector('.quote-block');

function fetchQuote() {
  fetch('https://stoic-quotes.com/api/quote')
    .then(res => res.json())
    .then((data) => {
      const p = document.createElement('p');
      p.innerHTML = data.text;
      p.setAttribute('id','quote')
      quoteContainer.appendChild(p);
    })
}

function handleClick() {
  const quote = document.getElementById('quote');
  if (quote === null) {
    fetchQuote()
  } else {
    quoteContainer.removeChild(quote);
    fetchQuote();
  }
}


btn.addEventListener('click', fetchQuote)