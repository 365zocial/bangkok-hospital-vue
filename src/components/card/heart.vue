<template>
  <div class="card-shadow rounded-3 h-100 w-100 bg-white border-0">
    <div class="row padding-card mb-0 ">
      <!-- <div class="col-4 border rounded-3">
        <img :src="data.img" :alt="data.name" class="w-100" />
      </div> -->

      <div class="col-4 rounded-3 h-100 p-0">
        <img :src="data.img" :alt="data.name" class="w-100 h-100 rounded-3 object-fit-cover" />
      </div>

      <div class="col-8 border m-0 ">
        <div class="d-flex justify-content-between align-items-center">
          <div class="border m-0 bg-primary">
            <h5 class="card-title fw-bold my-2 font-title" style="color: #002d73">
              {{ data.name }}
            </h5>
          </div>

          <div class="cov-arrow-right m-0 bg-warning" style="min-width: 50px;">
            <div class="border"><i class="bi bi-arrow-right" style="color: #002d73"></i></div>
          </div>
        </div>
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
/* .icon-wrapper {
  background-color: #e7edff !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
} */

/* .text-primary {
  color: #007bff !important;

} */
/* 
.your-element-class {
  margin: 0; 
} */

.card-title {
  font-size: 1.25rem;
}

.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon-responsive {
  width: 4rem !important;
  height: 4rem !important;
}

.icon {
  width: 2.5rem;
  height: 2.5rem;
}

.font-title {
  font-size: 18px;
}

.padding-card {
  padding: 1rem;
}
.cov-arrow-right {
  width: 50px !important;
  height: 50px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50% !important;
  background-color: #e7edff;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  box-sizing: border-box;
  padding: 0; /* สำคัญมาก */
  margin: 0; /* สำคัญมาก */
}
@media (max-width: 576px) {
  .icon-responsive {
    min-width: 3rem !important;
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

  /* .padding-card {
    padding: 0.75rem;
  } */
}
</style>
