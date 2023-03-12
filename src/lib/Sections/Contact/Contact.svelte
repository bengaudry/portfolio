<script lang="ts">
  import Cta from "../../Buttons/Cta.svelte";

  let freelanceBtnContent: "fiverr" | "malt" = "fiverr";

  document.addEventListener("DOMContentLoaded", changeFreelanceBtnContent);

  let freelanceBtn;
  let fiverrBtnWidth;
  let maltBtnWidth;
  function changeFreelanceBtnContent() {
    console.log("function - 1");
    freelanceBtnContent = freelanceBtnContent === "fiverr" ? "malt" : "fiverr";
    freelanceBtn.style.width = `${
      freelanceBtnContent === "fiverr" ? fiverrBtnWidth : maltBtnWidth
    }px`;
    setTimeout(() => {
      changeFreelanceBtnContent();
      freelanceBtn.style.width = `${
        freelanceBtnContent === "fiverr" ? fiverrBtnWidth : maltBtnWidth
      }px`;
      console.log("function - 2");
    }, 1000);
  }
</script>

<section id="contact">
  <div class="responsive">
    <h2>Contact</h2>
    <p>
      Want to work with me ?
      <br />Hire me on these platforms !
    </p>
    <div class="btn-container">
      <Cta href="https://www.fiverr.com/ben_gdry" content="See on fiverr" direction="external"/>
      <Cta href="https://www.malt.fr/profile/bengaudry" content="See on malt" direction="external"/>
    </div>
    <div class="spacer" />
    <p>
      Want to contact me for another reason ?<br />
      See my social networks :
    </p>
    <div class="socials-container">
      <a
        href="https://www.instagram.com/ben.gaudry/"
        target="_blank"
        rel="noopener noreferrer"
        class="social-btn"
      >
        <img src="/instagram.svg" alt="Instagram" />
      </a>
      <a
        href="https://twitter.com/ben_gaudry_"
        target="_blank"
        rel="noopener noreferrer"
        class="social-btn"
      >
        <img src="/twitter.svg" alt="Twitter" />
      </a>
      <a
        href="https://github.com/BenGaudry"
        target="_blank"
        rel="noopener noreferrer"
        class="social-btn"
      >
        <img src="/github.svg" alt="GitHub" />
      </a>
    </div>
  </div>
</section>

<style lang="scss">
  @import "../../../styles/modules/variables";

  .btn-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: max-content;
    margin: 0 auto;
    gap: 12px;
  }

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
    opacity: 0.4;
    transition: opacity 200ms ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  .freelance-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    padding: 8px;
    font-size: 1.4rem;
    border-radius: 9999px;
    background-color: #fff;

    span {
      color: #000 !important;
    }
  }

  .fiverr-icon {
    width: 40px;
    height: 40px;
    background: url("../../../../public/fiverr-logo.png");
    background-size: cover;
    background-position: center;
    transition: width 800ms ease-out;
  }

  .malt-icon {
    width: 40px;
    height: 40px;
    background: url("../../../../public/malt-icon.png");
    background-size: cover;
    background-position: center;
    transition: width 800ms ease-out;
  }

  @media screen and (max-width: 480px) {
    .btn-container {
      flex-direction: column;
    }
  }
</style>
