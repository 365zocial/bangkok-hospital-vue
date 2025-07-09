<template>
  <div class="container my-4">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
      <div v-for="data in dataList" :key="dataList.name" class="col">
        <div class="card shadow border-0 rounded-3 h-100 w-100">
          <div class="card-body d-flex flex-column align-items-start">
            <div
              class="d-flex justify-content-center align-items-center rounded-3 mb-3 p-3 bg-primary bg-opacity-10"
              style="width: 4rem; height: 4rem"
            >
              <img :src="data.icon" :alt="dataList.name" style="width: 2.5rem; height: 2.5rem" />
            </div>
            <h5 class="card-title fw-bold mb-2" style="color: #002d73">{{ data.name }}</h5>
            <p class="fw-light lh-sm" style="color: #627380; font-size: 0.8rem">
              {{ data.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  dataList: {
    type: Array,
    default: [],
  },
})
</script>

<style scoped>
.card {
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  box-shadow:
    0 8px 20px rgba(0, 102, 255, 0.12),
    0 3px 5px rgba(81, 126, 194, 0.1) !important;
}

/* .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
} */

.card:hover {
  transform: scale(1.02);
  /* box-shadow:
    0 8px 20px rgba(0, 102, 255, 0.12),
    0 3px 5px rgba(81, 126, 194, 0.1) !important; */
}

.icon-wrapper {
  background-color: #e7edff !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
}

.text-primary {
  color: #007bff !important; /* Standard Bootstrap primary color */
  /* You can override this if you have a custom primary color in your Bootstrap theme */
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
}

/* .card-text {
  font-size: 0.9rem;
  line-height: 1.4;
} */
</style>
