<template>
  <div class="w-100 card-content rounded-4 rounded-md-5 shadow-blue">
    <div class="doctor-image-container shadow-blue w-md-50 bg-white " v-if="false">
      <img :src="data.imageUrl" :alt="data.firstName" class="doctor-image" />
    </div>

    <div
      class="mt-5 mt-md-0 d-flex flex-column align-items-center justify-content-center justify-content-md-start align-items-md-start text-center text-md-start w-md-75"
    >
      <div
        class=" d-flex flex-column flex-lg-row align-items-center justify-content-center align-items-md-start justify-content-md-start cov-name"
      >
        <div class="">
          <h1 class="doctor-name me-lg-2 ">{{ data.title }} {{ data.firstName }}</h1>
        </div>
        <div class="">
          <h1 class="doctor-name">{{ data.lastName }}</h1>
          <Divider class="mt-4 mt-md-4 mb-3 mb-md-2 d-md-block d-lg-none" />
        </div>
      </div>
      <Divider class="mt-4 mb-2 d-none d-lg-block" />
      <p v-if="data.description" class="w-lg-75 text-description fw-light">{{ data.description }}</p>
      <p v-if="data.specialtyPrimary" class="specialty fw-bold">{{ data.specialtyPrimary }}</p>

      <Badge v-if="data.specialtySecondary" fontSize="14px">{{ data.specialtySecondary }}</Badge>

      <div class="w-100 d-none d-md-flex d-lg-none mt-5">
        <div class="w-100 row gap-x-5">
          <div class="col-6">
    
              <AnimationBtn color="blue" width="200px" class="d-none d-md-block ">
              <i class="bi bi-telephone-fill me-2"></i> Call Us
            </AnimationBtn>
          </div>
          <div class="col-6">
         
          </div>
        </div>
      </div>
    </div>

    <div class="d-none d-md-flex justify-content-end align-items-center">
      <div class="doctor-image-container-2">
        <img :src="data.imageUrl" :alt="data.firstName" class="doctor-image" />
      </div>
    </div>
  </div>
  <div class="d-md-none w-100 row g-2 mt-2">
    <div class="col-6">
      <AnimationBtn color="blue" class="w-100">
        <i class="bi bi-calendar2-week-fill me-2"></i> Book
      </AnimationBtn>
    </div>
    <div class="col-6">
      <AnimationBtn color="blue" class="w-100">
        <i class="bi bi-telephone-fill me-2"></i> Call Us
      </AnimationBtn>
    </div>
  </div>
</template>
<script setup>
import Divider from '@/components/custom/divider.vue'
import Badge from '@/components/custom/badge.vue'
import AnimationBtn from '@/components/button/animationBtn.vue'
const props = defineProps({
  data: {
    type: Object,
  },
})
</script>

<style scoped>
.card-content {
  background-image: url('https://static.bangkokhospital.com/uploads/2024/05/doctor-profile-bg-mobile.png');
  background-size: cover;
  background-position: 50% 50%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  margin-top: 100px;
}

.doctor-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 4rem 2rem 2rem 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  width: 100%;
  position: relative;
  margin-top: 60px;
}

.doctor-image-container {
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 5px solid #ffffff;
}

.doctor-image-container-2 {
    height: 400px;
  width: auto;

}

.doctor-image {
  width: 100%;
  height: 100%;
  object-position: top;
  object-fit: cover;
}

.doctor-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0;
  line-height: 70%;
  margin-top: 1rem;
}

.divider {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #dc2626 0%, #dc2626 50%, #1e40af 50%, #1e40af 100%);
  margin: 0 auto 1.5rem auto;
  border-radius: 2px;
}

.specialty {
  font-size: 0.95rem;
  color: #6b7280;
  margin: 0 0 0.7rem 0;
}

.cov-name {
  width: 30% !important;
 
}
.text-description {
  font-size: 0.9rem;;
  margin-top: 1rem;
  width: 100%;
}

.cov-name {
  width: 100% !important  ;
}

@media (min-width: 768px) {
  .card-content {
    background-image: url('https://static.bangkokhospital.com/uploads/2024/05/doctor-profile-bg-1.png');
    height: auto;
    flex-direction: row !important;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    padding: 48px;
  }

  .doctor-card {
    max-width: 350px;
    padding: 4.5rem 2.5rem 2.5rem 2.5rem;
    margin-top: 70px;
  }

  .doctor-image-container {
    top: -70px;
  }

  .doctor-image {
    width: 100%;
    height: 100%;
  }

  .doctor-name {
    font-size: 36px;
    margin-top: 1.2rem;
  }

  .doctor-image-container {
    display: none !important;
    visibility: hidden;
  }

  .cov-name {
    width: 60% !important;
  }

  .specialty {
    font-size: 18px;
    margin: 0.7rem 0;
  }

  .text-description {
  width: 75%;
}

 .doctor-image-container-2 {
      height: 440px;
    width: auto;
  position: absolute;
  bottom: 0;
  right: 20px;
  z-index: 10;
  }
}
@media (min-width: 992px) {

  .doctor-image-container-2 {
      height: 375px;
    width: auto;
  position: absolute;
  bottom: 0;
  right: 60px;
  z-index: 10;
  }

  .card-content {
    padding: 64px;
    margin-top: 50px;
  }
}


</style>
