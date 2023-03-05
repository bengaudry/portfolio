<script lang="ts">
  export let label: string;
  export let percent: number;
</script>

<div class="progress-container">
  <span class="label secondary-text">{label}</span>
  <div class="progress-bar-bg">
    <div class="progress-bar-fg" style="width: {percent}%"></div>
  </div>
</div>

<style lang="scss">

  @import "../../../../../styles/modules/variables";


  .progress-container {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  .progress-bar-bg {
    background-color: rgb(#d6d6d6, .1);
    position: relative;
    height: 20px;
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
  }

  .progress-bar-fg {
    background-color: blueviolet;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
</style>
