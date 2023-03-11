<script lang="ts">
  import Cta from "../../Buttons/Cta.svelte";
</script>

<section class="hero">
  <div class="bubble" />
  <div class="bubble" />
  <div class="bubble" />

  <div class="responsive">
    <h1 class="hero-main-sentence">
      Hey ! I'm Ben
      <br />
      a junior dev
    </h1>
    <p class="hero-characteristics">
      Based in France | 17 years old | Front-end dev
    </p>
    <Cta
      content="Discover"
      customStyle="margin: 0 auto; margin-top: 2rem; animation: fade-in 500ms ease-out forwards; animation-delay: 600ms; opacity: 0; transform: translateY(10%);"
      direction="bottom"
      className="glow-effect"
      href="#about"
      children='<svg class="glow-container"><rect class="glow-blur" pathLength="100" rx="8px"></rect><rect class="glow-line" pathLength="100" rx="8px"></rect></svg>'
    />
  </div>
</section>

<style lang="scss">
  @import "../../../styles/modules/variables";
  @import "../../../styles/modules/animations";

  $animation: fade-in 500ms ease-out forwards;

  .hero {
    text-align: center;
    position: relative;
    overflow: hidden;
    height: 100vh;
    padding-top: 70px;
    display: flex;
    align-items: center;
    place-content: center;

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("/gradient-05x.png");
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      transform-origin: center;
      opacity: 0;
      transform: scale(0.5);
      animation: background-appear 1000ms cubic-bezier(0.165, 0.84, 0.44, 1)
        forwards;
    }
  }

  .hero-main-sentence {
    font-size: 4.375rem;
    font-weight: 600;
    margin-bottom: 15px;
    opacity: 0;
    transform: translateY(0);
    animation: $animation;
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
    opacity: 0;
    transform: translateY(0);
    animation: $animation;
    animation-delay: 300ms;
  }

  @media screen and (max-width: 480px) {
    .hero-main-sentence {
      font-size: 2.75rem;
    }

    .hero-characteristics {
      font-size: 0.9rem;
    }
  }
</style>
