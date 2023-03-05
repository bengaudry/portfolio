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
  @import "../../../styles/modules/variables";

  .bubble {
    width: 1px;
    height: 1px;
    border-radius: 9999px;
    display: block;
    position: absolute;
    background-color: rgba(var(--accent-raw), 0);
    box-shadow: 0 0 100px 100px rgba(var(--accent-raw), .7);
    filter: blur(50px);

    &:nth-child(1) {
      top: 200px;
      left: 300px;
    }

    &:nth-child(2) {
      top: 150px;
      right: 200px;
      box-shadow: 0 0 150px 150px rgba(var(--accent-raw), .7);
    }

    &:nth-child(3) {
      bottom: 0;
      right: 42vw;
    }
  }

  .hero {
    text-align: center;
    position: relative;
    overflow: hidden;
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    place-content: center;
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

  @media screen and (max-width: 480px) {
  .bubble {
    opacity: .7;

    &:first-child {
      top: 0;
      right: 0;
    }
    &:nth-child(2) {
      display: none;
    }

    &:nth-child(3) {
      bottom: 0;
      left: 0;
    }
  }

  .hero-main-sentence {
    font-size: 2.75rem;
  }

  .hero-characteristics {
    font-size: .9rem;
  }

  @media screen and (max-width: 480px) {
    .hero {
      height: 80vh;
    }
  }
}
</style>