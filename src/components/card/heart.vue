<template>
  <div class="card-shadow rounded-3 h-100 w-100 bg-white border-0 cursor-pointer">
    <div class="row gx-3 padding-card mb-0 align-items-center">
      <div class="col-4 rounded-3 h-100 p-0 ">
        <img :src="data.img" :alt="data.name" class="w-100 h-100 rounded-3 object-fit-cover" />
      </div>

      <div class=" p-0 col-8 m-0 d-flex flex-row justify-content-between align-items-center">
        <div class="m-0 px-3">
          <h6 class=" card-title fw-bold my-2 font-title" style="color: #002d73">
            {{ data.name }}
          </h6>
        </div>

        <div class="cov-arrow-right m-0" style="min-width: 33px">
          <div class=""><i class="bi bi-arrow-right" style="color: #002d73"></i></div>
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
  font-size: 16px;
}

.padding-card {
  padding:1rem 1.5rem 1rem 1.5rem;
}
.cov-arrow-right {
  width: 33px !important;
  height: 33px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50% !important;
  background-color: #e7edff; 
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
