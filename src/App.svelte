<script lang="ts">
  import Hero from './lib/Sections/Hero/Hero.svelte';
  import TopBar from './lib/TopBar/TopBar.svelte';
  import Skills from './lib/Sections/Skills/Skills.svelte';
  import Contact from './lib/Sections/Contact/Contact.svelte';

  var scrollPercent: number = 0;
  document.body.addEventListener("scroll", function() {
    scrollPercent = document.body.scrollHeight / document.body.clientHeight;
    console.log("scroll", scrollPercent)
  })
</script>

<main class="page-main">
  <TopBar percent="{scrollPercent}" />
  <Hero />
  <Skills />
  <Contact />
</main>
