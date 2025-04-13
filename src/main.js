import './style.css'
import quotes from './data/quotes.json'

function createQuoteCard(quote) {
  return `
    <div class="quote-card">
      <p class="quote-text">${quote.text}</p>
      <p class="quote-author">- ${quote.author}</p>
    </div>
  `;
}

function getRandomQuote(mood) {
  const moodQuotes = quotes[mood];
  const randomIndex = Math.floor(Math.random() * moodQuotes.length);
  return moodQuotes[randomIndex];
}

function handleMoodSelection(event) {
  const mood = event.target.value;
  const quote = getRandomQuote(mood);
  document.querySelector('#quote-display').innerHTML = createQuoteCard(quote);
  document.body.className = `mood-${mood}`;
}

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Mood Quote Generator</h1>
    <div class="mood-selector">
      <label for="mood">How are you feeling today?</label>
      <select id="mood">
        <option value="">Select your mood</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="motivated">Motivated</option>
        <option value="relaxed">Relaxed</option>
        <option value="energetic">Energetic</option>
        <option value="peaceful">Peaceful</option>
        <option value="anxious">Anxious</option>
        <option value="grateful">Grateful</option>
        <option value="creative">Creative</option>
      </select>
    </div>
    <div id="quote-display"></div>
  </div>
`;

document.querySelector('#mood').addEventListener('change', handleMoodSelection);
