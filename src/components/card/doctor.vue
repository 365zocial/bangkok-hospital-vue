<template>
  <div class="card card-shadow border-0 h-100">
    <div class="card-body d-flex flex-column align-items-center text-center p-4">
      <div class="doctor-image-wrapper mb-3">
        <img :src="data.imageUrl" :alt="data.name" class="rounded-circle ">
      </div>
      <h5 class="card-title mb-1">{{ data.title }} {{ data.name }}</h5>
      <p class="card-text text-muted mb-2">{{ data.specialtyPrimary }}</p>
      <div v-if="data.specialtySecondary" class="badge bg-light text-primary border border-primary px-3 py-2 rounded-pill mb-3">
        {{ data.specialtySecondary }}
      </div>
      <div class="d-flex justify-content-around w-100 mt-auto">
        <button class="btn btn-outline-primary d-flex align-items-center flex-grow-1 mx-1 justify-content-center">
          <i class="bi bi-calendar me-2"></i>
          นัดหมาย
        </button>
        <button class="btn btn-outline-secondary d-flex align-items-center flex-grow-1 mx-1 justify-content-center">
          <i class="bi bi-info-circle me-2"></i>
          รายละเอียด
        </button>
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
/* .card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
} */

.doctor-image-wrapper {
  width: 120px; /* Adjust as needed */
  height: 120px; /* Adjust as needed */
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid white; /* Primary color border */
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
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
}

.card-text {
  font-size: 0.95rem;
  color: #6c757d;
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
</style>