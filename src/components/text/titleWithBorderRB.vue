<template>
    <div class="text-center ">
  <div class="d-inline-block position-relative">
    <h1 class="text-capitalize fw-bold text-navy ">
      centers & clinics
    </h1>
    <div class="underline-gradient position-absolute bottom-0 start-0 end-0 mx-auto"></div>
  </div>
</div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
  },
})
</script>
<style scoped>

.underline-gradient {
  height: 4px;
  background: linear-gradient(to right, #c4001a 0%, #c4001a 60%, #0000ff 100%);
margin-top: 16px;
}

</style>