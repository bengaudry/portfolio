<script lang="ts">
  import Progress from "./Graph/Progress/Progress.svelte";
  let currentGraph = 0;
</script>

<section class="skills" id="skills">
  <div class="responsive">
    <div class="side">
      <h2>Skills</h2>
      <p class="secondary-text">
        I started learning code 4 years ago, consequently, I am now pretty
        advanced in multiple languages and technologies. Here is a resume of my
        skills.
      </p>
    </div>
    <div class="side">
      <div class="graph-header">
        <div class="btn-container">
          <button
            on:click={() => (currentGraph = 0)}
            class="slider-btn"
            style={currentGraph === 0 ? "opacity: .4" : "opacity: 1;"}
          >
            <img src="/arrow.svg" alt="->" style="transform: rotate(90deg);">
          </button>
          <button
            on:click={() => (currentGraph = 1)}
            class="slider-btn"
            style={currentGraph === 1 ? "opacity: .4" : "opacity: 1;"}
          >
            <img src="/arrow.svg" alt="<-" style="transform: rotate(-90deg);">
          </button>
        </div>
        <div class="graph-title">
          <span
            style={currentGraph === 0
              ? "transform: translateX(0);"
              : "transform: translateX(-100%)"}>/ scripts</span
          >
          <span
            style={currentGraph === 1
              ? "transform: translateX(0);"
              : "transform: translateX(100%)"}>/ styles</span
          >
        </div>
      </div>

      <div class="spacer" />
      <div class="graph-container">
        <div
          class="graph"
          style={currentGraph === 0
            ? "transform: scale(1) translateX(0); opacity: 1;"
            : "transform: scale(.80) translateX(calc(-100% - 80px)); opacity: .50;"}
        >
          <Progress percent={85} label="Typescript" />
          <Progress percent={95} label="JavaScript" />
          <Progress percent={55} label="React" />
          <Progress percent={70} label="Svelte" />
        </div>
        <div
          class="graph"
          style={currentGraph === 1
            ? "transform: scale(1) translateX(0); opacity: 1;"
            : "transform: scale(.8) translateX(calc(100% + 80px)); opacity: .50;"}
        >
          <Progress percent={60} label="Figma" />
          <Progress percent={100} label="Css & Scss" />
          <Progress percent={90} label="Tailwind" />
          <Progress percent={70} label="Bootstrap" />
        </div>
      </div>
      <div class="dots">
        <div />
        <div />
        <div
          class="dot-selector"
          style={currentGraph === 0
            ? "transform: translateX(0);"
            : "transform: translateX(calc(100% + 10px));"}
        />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import "../../../styles/modules/variables";

  .skills {
    padding: 100px 0;
    border-top: 1px solid var(--border-color);

    .responsive {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 100px;
    }
  }

  .graph-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .graph-title {
    position: relative;
    overflow: hidden;
    width: 70px;
    height: 1.6rem;

    span {
      position: absolute;
      text-align: right;
      width: 100%;
      top: 0;
      left: 0;
      display: block;
      height: 1.6rem;
      line-height: 1.6rem;
      transition: transform 400ms;
    }
  }

  .side {
    flex: 1;
  }

  .spacer {
    height: 25px;
  }

  .slider-btn {
    width: max-content;
    padding: 5px 5px;
    border-radius: 15px;
    height: 50px;
    width: 50px;
    transition: opacity ease-out 200ms;
    font-size: 1.25rem;
    border: 3px solid #fff;
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 1.25rem;
  }

  p {
    font-size: 1.375rem;
  }

  .graph-container {
    overflow: hidden;
    width: 100%;
    height: 250px;
    position: relative;
    display: grid;
    place-content: center;
  }

  .graph {
    position: absolute;
    padding: 0 20px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    background-color: var(--body-bg);
    transition: transform, top, opacity, filter, 400ms ease-in-out;
  }

  .dots {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    width: max-content;
    margin: 0 auto;
    position: relative;
    div {
      background-color: var(--border-color);
      height: 10px;
      border-radius: 5px;
      width: 10px;
    }

    .dot-selector {
      position: absolute;
      left: 0;
      background-color: var(--accent);
      transition: transform 400ms cubic-bezier(0.215, 0.610, 0.355, 1);
    }
  }

  @media screen and (max-width: 480px) {
    .skills {
      padding: 50px 0;
      .responsive {
        gap: 50px;
        flex-direction: column;
      }
    }

    p {
      font-size: 1rem;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 0.75rem;
    }

    .slider-btn {
      font-size: 0.975rem;
      height: fit-content;
      padding: 8px 16px;
      border-radius: 10px;
    }

    .side:nth-child(2) {
      width: 100%;
    }

    .graph {
      padding: 0;
    }
  }
</style>
