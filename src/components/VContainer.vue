<template>
  <div v-if="fluid" class="w-full max-w-none" :class="{ 'px-4': !noGutter }"><slot /></div>
  <div v-else class="container" :class="{ 'px-0': noGutter }"><slot /></div>
</template>

<script>
  export default {
    name: "VContainer",
    props: {
      fluid: {
        type: Boolean,
        default: false,
      },
      noGutter: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
