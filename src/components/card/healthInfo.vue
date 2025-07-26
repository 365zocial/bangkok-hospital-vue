<template>
    <div class="rounded-3 d-flex flex-column border card-content">
        <div class="cov-img w-100 position-relative">
            <img :src="data.image" :alt="data.title" class="rounded-top-3" />
        </div>
        <div class="cov-detail w-100 d-flex flex-column p-3">
            <h5> {{ data.title }}</h5>
            <div>{{ data.description }}</div>
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
}
.cov-img {
    height: 48%;
}

.cov-detail {
    height: 52%;
   
}
.card-content img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>