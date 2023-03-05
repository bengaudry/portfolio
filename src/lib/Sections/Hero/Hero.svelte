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
    <p class="hero-characteristics">Based in France | 17 years old | Front-end dev </p>
    <Cta content="Discover" customStyle="margin: 0 auto; margin-top: 2rem;" direction="bottom" href="#skills" />
  </div>
</section>

<style lang="scss">
  @import "../../../styles/modules/variables";

  .hero {
    text-align: center;
    position: relative;
    overflow: hidden;
    height: 100vh;
    padding-top: 80px;
    display: flex;
    align-items: center;
    place-content: center;
    background: url("/Gradient.svg");
    background-size: cover;
    background-position: 50%;
  }

  .hero-main-sentence {
    font-size: 4.375rem;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .hero-characteristics {
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--primary-text);
    background: linear-gradient(135deg, #818ce3, #d98dff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
    font-size: 1.25rem;
  }

  @media screen and (max-width: 480px) {
  .hero-main-sentence {
    font-size: 2.75rem;
  }

  .hero-characteristics {
    font-size: .9rem;
  }
}
</style>