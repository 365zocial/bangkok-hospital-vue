<template>
  <!-- <div class="card shadow rounded-3 h-100 w-100 bg-white">
    <div class="border d-grid gap-2 p-3 p-sm-4 ">
      <div
        class="border d-flex justify-content-center align-items-center rounded-3 bg-primary bg-opacity-10 icon-responsive"
      >
        <img :src="data.icon" :alt="data.name" class="icon" />
      </div>

      <h5 class="border card-title fw-bold font-title mb-0" style="color: #002d73">
        {{ data.name }}
      </h5>

      <p
        class="border fw-light lh-sm text-truncate-2 description-2lines mb-0"
        style="color: #627380; font-size: 0.8rem"
      >
        {{ data.description }}
      </p>
    </div>
  </div> -->

  <div class="card shadow rounded-3 h-100 w-100 bg-white px-3 py-2">
    <div class="row g-2">
      <div class="col-4 col-lg-12 border">
        <div
          class="d-flex justify-content-center align-items-center rounded-3 bg-primary bg-opacity-10 icon-responsive"
        >
          <img :src="data.icon" :alt="data.name" class="icon" />
        </div>
      </div>

      <div class="col-8 col-md-12 border d-flex align-items-center">
        <h5 class=" card-title fw-bold font-title mb-0" style="color: #002d73">
          {{ data.name }}
        </h5>
      </div>

      <div class="d-none col-md-12">
        <p
          class="border fw-light lh-sm text-truncate-2 description-2lines mb-0"
          style="color: #627380; font-size: 0.8rem"
        >
          {{ data.description }}
        </p>
      </div>
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
.card {
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  box-shadow:
    0 8px 20px rgba(0, 102, 255, 0.12),
    0 3px 5px rgba(81, 126, 194, 0.1) !important;
}

.card:hover {
  transform: scale(1.02);
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
  color: #007bff !important;
}

.your-element-class {
  margin: 0;
}

.card-title {
  font-size: 1.25rem;
}

.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* จำนวนบรรทัดที่ต้องการแสดง */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon-responsive {
  width: 4rem;
  height: 4rem;
}
.icon {
  width: 2.5rem;
  height: 2.5rem;
}

.font-title {
  font-size: 18px;
}

.grid-template-mobile {
  grid-template-columns: 1fr;
}
@media (min-width: 576px) {
  .icon-responsive {
    width: 3rem !important;
    height: 3rem !important;
  }
  .icon {
    width: 2rem;
    height: 2rem;
  }
  .description-2lines {
    display: none !important;
  }

  .font-title {
    font-size: 14px;
  }

  .grid-template-sm {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
  }
}
</style>
