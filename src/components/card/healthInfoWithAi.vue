<template>
  <div class="rounded-3 d-flex flex-column border card-content relative shadow-sm">
    <div
      class="absolute badge rounded-pill fw-semibold px-3 py-2 card-text top-0 start-0"
      style="background-color: #e7edff; color: #0047a3"
    >
      Translated by AI
    </div>
    <div class="cov-img w-100 ">
      <img :src="data.image" :alt="data.title" class="rounded-top-3" />
    </div>
    <div class="cov-detail w-100 d-flex flex-column d-flex flex-column justify-content-start">
      <h5 class="text-truncate-3" style="font-size: 1rem">{{ data.title }}</h5>

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
  border: none;

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

.text-truncate-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.badge {
  font-size: 0.8rem;
  font-weight: 500;
}
</style>
