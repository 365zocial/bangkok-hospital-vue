<template>
  <div class="border-0 card-shadow rounded-3" style="height: 100%">
  <div
  class=" d-flex flex-row flex-lg-column align-items-start align-items-lg-center text-center p-4 rounded-top-3 bg-white"
  style="max-height: 300px"
>
      <div class="doctor-image-wrapper mb-3 ">
        <img
          :src="data.imageUrl"
          :alt="data.name"
          class="rounded-circle w-100 h-100 object-fit-cover"
        />
      </div>

      <div class="w-50 ms-3 border d-flex flex-column justify-content-start align-items-start">
        <h5 class="card-title mb-1 fw-semibold border text-start" style="color: #363636">
          {{ data.title }} {{ data.name }}
        </h5>

        <div v-if="data.specialtyPrimary" class="text-dark-blue card-text fw-semibold mb-2">
          {{ data.specialtyPrimary }}
        </div>

        <div
          v-if="data.specialtySecondary"
          class="badge rounded-pill fw-semibold px-3 py-2 mb-3 card-text"
          style="background-color: #e7edff; color: #0047a3"
        >
          {{ data.specialtySecondary }}
        </div>
      </div>
    </div>

    <div class="rounded-bottom-3 d-flex w-100 h-" style="background-color: #f8f9f9">
      <a
        class="fw-semibold d-flex align-items-center flex-grow-1 justify-content-center"
        style="border-right: 1px solid #e7edff"
        v-if="data.isBookingAvailable"
      >
        <i class="bi bi-calendar4-week me-2"></i>
        Book
      </a>
      <a class="fw-semibold d-flex align-items-center flex-grow-1 justify-content-center">
        <i class="bi bi-info-circle me-2"></i>
        Profile
      </a>
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
.doctor-image-wrapper {
  /* width: 140px !important;
  height: 140px !important; */
  width: 115px !important;
  height: 115px !important;
  border-radius: 50%;
  border: 4px solid white;
  padding: 3px;
  box-shadow:
    0 -1px 20px rgba(0, 102, 255, 0.047),
    0 8px 20px rgba(0, 102, 255, 0.12),
    0 3px 5px rgba(81, 126, 194, 0.1) !important;
}

.doctor-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  font-size: 1rem;
  /* font-weight: 600;
  color: #333; */
}

.card-text {
  font-size: 0.85rem;
}

.badge {
  font-size: 0.8rem;
  font-weight: 500;
}

.btn {
  font-size: 0.9rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}

.btn i {
  font-size: 1rem;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #5f6368;
  height: 56px;
}
a:hover {
  background-color: #e7edff;
  color: #002d73;
}
</style>
