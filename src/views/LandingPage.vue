<template>
  <div class="landing-page">
    <section class="hero">
      <h1>Welcome to Mood Quote Generator</h1>
      <p>Discover inspirational quotes that match your mood and elevate your spirit.</p>
      <router-link to="/quotes" class="cta-button">Get Started</router-link>
    </section>
    
    <section class="features">
      <div class="feature-card">
        <h3>Mood-Based Selection</h3>
        <p>Choose from 8 different moods to get relevant quotes</p>
      </div>
      <div class="feature-card">
        <h3>Extensive Collection</h3>
        <p>Over 160 carefully curated quotes from famous authors</p>
      </div>
      <div class="feature-card">
        <h3>Instant Generation</h3>
        <p>Get a new quote instantly with a single click</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>