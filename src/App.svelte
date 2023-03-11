<script lang="ts">
  import Hero from "./lib/Sections/Hero/Hero.svelte";
  import TopBar from "./lib/TopBar/TopBar.svelte";
  import Contact from "./lib/Sections/Contact/Contact.svelte";
  import About from "./lib/Sections/About/About.svelte";

  var scrollPercent: number = 0;
  document.body.addEventListener("scroll", function () {
    scrollPercent = document.body.scrollHeight / document.body.clientHeight;
    console.log("scroll", scrollPercent);
  });

  // var mousex = 0;
  // var mousey = 0;
  // document.body.addEventListener("mousemove", function (e: MouseEvent) {
  //   mousex = e.pageX;
  //   mousey = e.pageY;
  //   cursorShadow.animate(
  //     [{ left: `${mousex}px` }, { top: `${mousey}px` }],
  //     {
  //       // temporisation
  //       duration: 3000,
  //       iterations: 1
  //     }
  //   )
  // });

  // let cursorShadow;

  let loader: HTMLElement;
  let windowLoaded = false;

  document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(() => {
      loader.style.transform = "translateY(-100%)";
      windowLoaded = true;
    }, 1000)
  })

  function waitForLoad(node) {
    if (windowLoaded) { node.classList.add("start-anims") };
  }
</script>

<main class="page-main" use:waitForLoad>
  <!-- <div
    class="cursor-shadow"
    bind:this={cursorShadow}
  /> -->
  <div class="loader" bind:this={loader}></div>
  <TopBar />
  <Hero />
  <About />
  <Contact />
</main>

<style>
  /* .cursor-shadow {
    position: fixed;
    width: 10vw;
    height: 10vw;
    border-radius: 9999px;
    background-color: rgba(var(--accent-raw), .8);
    transform: translate(-50%, -50%);
    opacity: 0;
    filter: blur(50px);
    transition: opacity 300ms;
  } */

  /* .cursor-shadow {
    display: none;
    pointer-events: none;
  } */

  .loader {
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    background-color: black;
    height: 100vh;
    width: 100vw;
    transition: transform, 600ms cubic-bezier(.17,.67,.12,.83);
  }
</style>
