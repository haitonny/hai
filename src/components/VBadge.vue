<template>
  <span
    class="badge"
    :class="{
      [`~${tone}`]: tone,
      [`!${priority}`]: priority,
      'rounded-full px-4': pill,
      'rounded px-2': !pill,
    }"
  >
    <slot />
  </span>
</template>

<script>
  export default {
    name: "VBadge",
    props: {
      tone: {
        type: String,
      },
      priority: {
        type: String,
      },
      pill: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="postcss">
  .badge {
    background-color: var(--color-fill);
    color: var(--color-content);
    display: inline-flex;
    align-items: center;
    align-self: center;
    vertical-align: middle;
    justify-content: center;
    @apply py-px font-medium font-secondary;
  }
</style>
