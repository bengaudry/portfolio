<script lang="ts">
  import Cta from "../../Buttons/Cta.svelte";
</script>

<section id="contact">
  <div class="responsive">
    <h2>Contact</h2>
    <p>Want to work with me ? See my gigs on fiverr !</p>
    <Cta
      content="See on fiverr"
      href="https://fr.fiverr.com/share/2daNGV"
      direction="external"
      customStyle="margin: 0 auto;"
    />
    <div class="spacer" />
    <p>
      Want to contact me for another reason ?<br />
      See my social networks :
    </p>
    <div class="socials-container">
      <a href="https://www.instagram.com/ben.gaudry/" target="_blank" rel="noopener noreferrer" class="social-btn">
        <img src="/public/instagram.svg" alt="Instagram">
      </a>
      <a href="https://twitter.com/ben_gaudry_" target="_blank" rel="noopener noreferrer" class="social-btn">
        <img src="/public/twitter.svg" alt="Twitter">
      </a>
      <a href="https://github.com/BenGaudry" target="_blank" rel="noopener noreferrer" class="social-btn">
        <img src="/public/github.svg" alt="GitHub">
      </a>
    </div>
  </div>
</section>

<style lang="scss">
  @import "../../../styles/modules/variables";

  #contact {
    padding: 100px 0;
    border-top: 1px solid var(--border-color);

    .responsive {
      text-align: center;
    }
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 1.25rem;
  }

  p {
    margin: 1.25rem 0;
    font-size: 1.2rem;
  }

  .spacer {
    display: block;
    height: 70px;
  }

  .socials-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: max-content;
    margin: 0 auto;
  }

  .social-btn {
    height: 35px;
    opacity: .4;
    transition: opacity 200ms ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
</style>
