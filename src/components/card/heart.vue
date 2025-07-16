<template>
  <div class="card-shadow rounded-3 h-100 w-100 bg-white border-0">
    <div
      class="row padding-card p-sm-4 mb-0"
    >
      <div
        class=" col-col-sm-4 border rounded-2  rounded-lg-3 "
      >
        <img :src="data.img" :alt="data.name" class="icon" />
      </div>

      <div class="col-col-sm-8 border">
<div class="w-100 ">
        <h5 class="card-title fw-bold my-2 font-title" style="color: #002d73">
          {{ data.name }}
        </h5>
      </div>

     <div>
      icon
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
  padding: 1.5rem;
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

  .padding-card{
    padding: 0.75rem;
  }
}
</style>
