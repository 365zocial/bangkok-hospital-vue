<template>
  <div class="w-100 card-content rounded-4 card-shadow">
    <div class="doctor-image-container card-shadow">
      <img
        src="https://epms.bdms.co.th/media/images/photos/BHQ/MANOCH_website_img.jpeg"
        alt="Dr. Manoch Techachokwiwat"
        class="doctor-image"
      />
    </div>

    <div class="mt-5 d-flex flex-column align-items-center justify-content-center text-center">
        <div class=" d-flex flex-column align-items-center justify-content-center" style="width: 60%;">
          <h3 class="doctor-name">Dr. Manoch Techachokwiwat</h3>
          <Divider class="my-3"/>
        </div>
        

      <p class="specialty fw-bold mb-2">Internal Medicine</p>

        <Badge>Nephrology</Badge>
    </div>
  </div>
  <!-- </div> -->
</template>
<script setup>  
import Divider from '@/components/custom/divider.vue'
import Badge from '@/components/custom/badge.vue'
</script>

<style scoped>
.card-content {
  background-image: url('https://static.bangkokhospital.com/uploads/2024/09/doctor-profile-bg-mobile-2.png');
  background-size: cover;
  background-position: 50% 50%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  text-align: center;
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
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 5px solid white;
}

.doctor-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-position: top;
  object-fit: cover;
}

.doctor-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0;
  line-height: 1.2;
  margin-top: 1rem;
}

.doctor-surname {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e3a8a;
  margin: 0.25rem 0 1.5rem 0;
  line-height: 1.2;
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
}




@media (min-width: 768px) {
  .card-content {
    background-image: url('https://static.bangkokhospital.com/uploads/2023/05/doctor-profile-bg-2.png');
    height: 300px;
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
    width: 140px;
    height: 140px;
  }

  .doctor-name {
    font-size: 1.75rem;
    margin-top: 1.2rem;
  }

  .doctor-surname {
    font-size: 1.4rem;
  }
}



</style>
