<script lang="ts">
  export let customStyle = undefined;
  export let content: string;
  export let href: string;
  export let direction: "bottom" | "external" | "right" | undefined = undefined;
</script>

<a
  {href}
  class="cta"
  style={customStyle}
  rel="noopener noreferrer"
  target={direction === "external" ? "_blank" : "_self"}
>
  <span>{content}</span>
  {#if direction === "bottom"}
    <img src="../../../public/arrow.svg" alt="↓" class="arrow-bottom" />
  {:else if direction === "external"}
    <img src="../../../public/arrow.svg" alt="↗" class="arrow-external" />
  {:else}
    <img src="../../../public/arrow.svg" alt="→" class="arrow-right" />
  {/if}
</a>

<style lang="scss">

  @import "../../styles/modules/animations";
  .arrow-external {
    transform: rotate(-135deg);
  }

  .arrow-right {
    transform: rotate(-90deg);
  }

  .arrow-bottom {
    transform: rotate(0);
  }
</style>
