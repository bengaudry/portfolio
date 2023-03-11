<script lang="ts">
  import Cta from "../Buttons/Cta.svelte";

  export let percent: number = 0;

  var hasScrolled: boolean = false;
  document.addEventListener("DOMContentLoaded", function () {
    hasScrolled = document.documentElement.scrollTop > 50 ? true : false;
  });
  document.addEventListener("scroll", function () {
    hasScrolled = document.documentElement.scrollTop > 50 ? true : false;
  });
</script>

<header class="top-bar {hasScrolled ? 'scrolled-top-bar' : ''}">
  <div class="scrollbar-track">
    <div class="scrollbar" style="width: {percent}%;" />
  </div>
  <div class="responsive">
    <div class="title">
      <a href="#top"> @ben.gaudry </a>
    </div>
    <nav class="top-bar-nav">
      <ul class="top-bar-items">
        <li class="top-bar-item">
          <a href="#top" class="top-bar-link">Home</a>
        </li>
        <li class="top-bar-item">
          <a href="#about" class="top-bar-link">About</a>
        </li>
        <li class="top-bar-item">
          <a href="#contact" class="top-bar-link">Contact</a>
        </li>
        <Cta
          content="GitHub"
          href="https://github.com/bengaudry"
          direction="external"
        />
      </ul>
    </nav>
  </div>
</header>

<style lang="scss">
  @import "../../styles/modules/variables";
  .title > a {
    font-weight: 400;
    font-size: 1.125rem;
    color: rgba(var(--primary-text-raw), 0.6);
  }

  .scrollbar-track {
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    width: 100%;
    height: 4px;
  }

  .scrollbar {
    height: 100%;
    background-color: var(--accent);
  }
</style>
