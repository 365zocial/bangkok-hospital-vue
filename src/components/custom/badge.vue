<template>
  <div
    class="badge rounded-pill fw-semibold badge-lightblue"
     :style="{ fontSize: props.fontSize }"
  >
    <slot />
  </div>


</template>

<script setup>
const props = defineProps({
  fontSize: {
    type: String,
    default: '16px'
  }
})

</script>

<style scoped>
.badge-lightblue {
  background-color: #e7edff;
  color: #0047a3;
  padding: 10px 20px;

}
</style>
