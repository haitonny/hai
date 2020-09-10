<template>
  <div
    class="card"
    :class="{
      [`~${tone}`]: tone,
      [`!${priority}`]: priority,
      [rounded]: rounded,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "VCard",
  props: {
    tone: {
      type: String,
    },
    priority: {
      type: String,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss">
.card {
  @apply block overflow-hidden shadow-lg;
}
</style>
