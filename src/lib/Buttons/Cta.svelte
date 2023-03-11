<script lang="ts">
  export let customStyle = undefined;
  export let content: string;
  export let children: HTMLElement | string = "";
  export let className: string = "";
  export let href: string;
  export let direction: "bottom" | "external" | "right" | undefined = undefined;
</script>

<a
  {href}
  class="cta {className}"
  style={customStyle}
  rel="noopener noreferrer"
  target={direction === "external" ? "_blank" : "_self"}
>
  <span>{content}</span>
  {#if direction === "bottom"}
    <div class="arrow arrow-bottom" />
  {:else if direction === "external"}
    <div class="arrow arrow-external" />
  {:else}
    <div class="arrow arrow-right" />
  {/if}
  {@html children}
</a>

<style lang="scss">

  @import "../../styles/modules/animations";
  .arrow-external {
    transform: rotate(-135deg);
  }

  .arrow {
    background: url("../../../public/arrow.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 20px;
    height: 16px;
  }

  .arrow-right {
    transform: rotate(-90deg);
  }

  .arrow-bottom {
    transform: rotate(0);
  }
</style>
