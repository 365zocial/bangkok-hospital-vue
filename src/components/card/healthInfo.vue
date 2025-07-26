<template>
  <div class="rounded-3 d-flex flex-column border card-content">
    <div class="cov-img w-100 position-relative">
      <img :src="data.image" :alt="data.title" class="rounded-top-3" />
    </div>
    <div class="cov-detail w-100 d-flex flex-column d-flex flex-column justify-content-between">
      <h5 style="font-size: 1rem">{{ data.title }}</h5>

      <p class="fw-light lh-sm text-truncate-2 m-0" style="font-size: 0.87rem">
        {{ data.description }}
      </p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
  },
})
</script>
<style scoped>

.card-content {
  height: 320px;
  --tw-border-opacity: 1;
  border-color: rgb(231 237 255 / var(--tw-border-opacity));
}
.cov-img {
  height: 48%;
}

.cov-detail {
  height: 52%;
  padding: 1rem 1rem 2rem 1rem; 
}
.card-content img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
