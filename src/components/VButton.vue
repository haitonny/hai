<template>
  <button
    class="button"
    :class="{
      [`~${tone}`]: tone,
      [`!${priority}`]: priority,
      [`!${size}`]: size,
    }"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: "VButton",
    props: {
      tone: {
        type: String,
      },
      priority: {
        type: String,
      },
      size: {
        type: String,
      },
    },
  };
</script>

<style lang="postcss">
  .button {
    background-color: var(--color-fill);
    color: var(--color-content);
    padding: var(--button-padding);
    font-size: var(--button-fontsize);
    display: block;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    line-height: var(--button-line-height);
    white-space: nowrap;
    transition: filter var(--button-transition-speed) linear;
    transform-origin: center;
    text-decoration: none;
    appearance: none;

    @apply rounded outline-none font-secondary;

    &:hover,
    &:focus {
      &:not([disabled]):not(.field) {
        /* We don't apply to button fields, because fields have
            their own way of denoting state. */
        filter: brightness(var(--button-filter-brightness));
      }
    }

    &[disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
</style>
