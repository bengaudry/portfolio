<script lang="ts">
  import Cta from "../../Buttons/Cta.svelte";
</script>

<section class="hero">
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>

  <div class="responsive">
    <h1 class="hero-main-sentence">
      Hey ! I'm Ben
      <br />
      a junior dev
    </h1>
    <p class="hero-characteristics secondary-text">Based in France | 17 years old | Front-end dev </p>
    <Cta content="Discover" customStyle="margin: 0 auto; margin-top: 2rem;" direction="bottom" href="#skills" />
  </div>
</section>

<style lang="scss">
  .hero {
    text-align: center;
    padding: 100px 0;
    position: relative;
  }

  .hero-main-sentence {
    font-size: 4.375rem;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .hero-characteristics {
    font-size: 1.25rem;
    font-weight: 500;
  }
</style>