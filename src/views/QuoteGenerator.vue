<template>
  <div class="container">
    <section class="hero">
      <h1>Mood Quote Generator</h1>
      <p>Find inspiration that resonates with your emotional state.</p>
      <div class="mood-selector">
        <label for="mood">How are you feeling today?</label>
        <select id="mood" v-model="selectedMood" @change="handleMoodSelection">
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
      <div class="quote-card" v-if="currentQuote">
        <p class="quote-text">{{ currentQuote.text }}</p>
        <p class="quote-author">- {{ currentQuote.author }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import quotes from '../data/quotes.json'

export default {
  name: 'QuoteGenerator',
  data() {
    return {
      selectedMood: '',
      currentQuote: null
    }
  },
  methods: {
    getRandomQuote(mood) {
      const moodQuotes = quotes[mood]
      const randomIndex = Math.floor(Math.random() * moodQuotes.length)
      return moodQuotes[randomIndex]
    },
    handleMoodSelection() {
      if (this.selectedMood) {
        this.currentQuote = this.getRandomQuote(this.selectedMood)
        document.body.className = `mood-${this.selectedMood}`
      }
    }
  }
}
</script>