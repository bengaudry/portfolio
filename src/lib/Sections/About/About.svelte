<script lang="ts">
  import Progress from "../Skills/Graph/Progress/Progress.svelte";
  let currentGraph = 1;

  let sliderOneWidth: number = 10;
  function setSliderOneWidth(slider: HTMLElement) {
    sliderOneWidth = slider.clientWidth;
    console.log(slider);
  }

  let sliderTwoWidth: number = 10;
  function setSliderTwoWidth(slider: HTMLElement) {
    sliderTwoWidth = slider.clientWidth;
    console.log(slider);
  }
</script>

<section id="about">
  <div class="responsive cards-grid-view">
    <div class="grid-child">
      <div class="content" />
    </div>
    <div class="grid-child">
      <div class="content" />
    </div>
    <div class="grid-child">
      <div class="content" />
    </div>
    <div class="grid-child">
      <div class="content">
        <div class="graph-header">
          <div class="graph-switcher">
            <div
              class="background"
              style="width: {currentGraph === 0
                ? sliderOneWidth
                : sliderTwoWidth}px;
                transform: {currentGraph === 0
                ? 'translateX(0)'
                : 'translateX(calc(100% + 22px))'};
              "
            />
            <button on:click={() => {currentGraph = 0}} use:setSliderOneWidth
              >Scripting</button
            >
            <button on:click={() => {currentGraph = 1}} use:setSliderTwoWidth
              >Styling</button
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
          <button on:click={() => (currentGraph = 0)} />
          <button on:click={() => (currentGraph = 1)} />
          <div
            class="dot-selector"
            style={currentGraph === 0
              ? "transform: translateX(0);"
              : "transform: translateX(calc(100% + 10px));"}
          />
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import "../../../styles/modules/variables";

  #about {
    padding: 80px 0;
    // background: radial-gradient(rgba(255, 255, 255, 0.2) 4%, transparent 4%);
    // background-position: 0% 0%;
    // background-size: 5vmin 5vmin;
    position: relative;
    background: #ff35fc60;
    background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        from(#000),
        color-stop(15%, rgba(0, 0, 0, 0))
      ),
      -webkit-gradient(linear, left top, left bottom, from(#000), color-stop(15%, rgba(0, 0, 0, 0))),
      radial-gradient(circle farthest-side at 50% 0%, rgba(0, 0, 0, 0), #000),
      url("../../../../public/bg-tile-dark.svg");
    background-image: linear-gradient(0deg, #000, rgba(0, 0, 0, 0) 15%),
      linear-gradient(180deg, #000, rgba(0, 0, 0, 0) 15%),
      radial-gradient(circle farthest-side at 50% 0%, rgba(0, 0, 0, 0), #000),
      url("../../../../public/bg-tile-dark.svg");
    background-position: 0px 0px, 0px 0px, 0px 0px, -1px -1px;
    background-size: auto, auto, auto, 64px;
  }

  .cards-grid-view {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
  }

  .grid-child {
    width: 100%;
    max-height: 200px;
    border-radius: 1.125rem;
    padding: 1.5px;

    .content {
      border-radius: 1.125rem;
      padding: 40px;
    }

    &:first-child {
      background: url("../../../../public/gradient-015x.png");
      background-size: cover;
      aspect-ratio: 2 / 1;
      grid-column: 1 / 3;

      .content {
        background-color: rgba(#000000, 0.7);
        backdrop-filter: blur(100px);
        width: 100%;
        height: 100%;
      }
    }

    &:nth-child(2) {
      background: url("../../../../public/gradient-015x.png");
      background-size: cover;
      aspect-ratio: 1 / 1;
      grid-column: 1 / 2;
      grid-row: 2 / 3;

      .content {
        background-color: rgba(#000000, 0.7);
        backdrop-filter: blur(100px);
        width: 100%;
        height: 100%;
      }
    }

    &:nth-child(3) {
      background: url("../../../../public/gradient-015x.png");
      background-size: cover;
      aspect-ratio: 1 / 1;
      grid-column: 2 / 3;
      grid-row: 2 / 3;

      .content {
        backdrop-filter: blur(100px);
        width: 100%;
        height: 100%;
      }
    }

    &:nth-child(4) {
      background: url("../../../../public/gradient-015x.png");
      background-size: cover;
      grid-column: 3 / 5;
      grid-row: 1 / 3;
      max-height: 425px;

      .content {
        width: 100%;
        height: 100%;
        background-color: rgba(#000000, 0.7);
        backdrop-filter: blur(100px);
      }
    }
  }

  .graph-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .graph-switcher {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: -2;
    border-radius: 9999px;
    background-color: #333333;

    .background {
      position: absolute;
      z-index: -1;
      width: calc(50% - 25px);
      height: calc(100% - 8px);
      inset: 4px;
      border-radius: 9999px;
      background-color: #606060;
      transition: width, transform, 300ms;
      pointer-events: none;
    }

    button {
      padding: 10px 20px;
      display: block;
      width: max-content;
    }
  }

  .spacer {
    height: 25px;
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
    button {
      background-color: rgba(#fff, 0.2);
      height: 10px;
      border-radius: 5px;
      width: 10px;
    }

    .dot-selector {
      position: absolute;
      left: 0;
      height: 10px;
      border-radius: 5px;
      width: 10px;
      background-color: var(--accent);
      transition: transform 400ms cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  }

  @media screen and (max-width: 1000px) {
    .cards-grid-view {
      margin: 0;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 200px);
    }

    .grid-child {
      &:first-child {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
      }

      &:nth-child(2) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }

      &:nth-child(3) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }

      &:nth-child(4) {
        height: 425px;
        grid-column: 1 / 3;
        grid-row: 3 / 4;
      }
    }
  }
</style>
