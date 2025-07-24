<template>
  <div class="card-shadow rounded-3 bg-white p-3">
    <div class="">
      <div class="card-image-container">
        <!-- Main image of the package -->
        <img :src="data.imageSrc" class="card-img-top" :alt="data.title" />
        <!-- Overlay text and elements on the image -->
        <div v-if="false" class="overlay-text position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-3">
          <!-- Location text -->
          <p class="mb-1 text-white text-bold" style="font-size: 0.9rem;">
            <i class="bi bi-geo-alt-fill me-1"></i>{{ data.location }}
          </p>
          <!-- Recommendation badge (e.g., 30+ years, 40+ years) -->
          <img :src="data.recommendationBadgeSrc" alt="Recommendation Badge" class="recommendation-badge img-fluid mt-2" />
          <!-- Thai package name -->
          <h5 class="mt-2 text-white text-bold package-title">{{ data.thaiPackageName }}</h5>
          <!-- English package name (subtitle) -->
          <p class="text-white package-subtitle">{{ data.englishPackageName }}</p>
          <!-- Hospital logo -->
          <img src="https://www.bangkokhospital.com/assets/img/logo_bangkok_hospital.png" alt="Bangkok Hospital Logo" class="hospital-logo mt-2">
          <!-- Contact number -->
          <span class="contact-number text-white mt-1">1719</span>
        </div>
      </div>
      <div class="card-content-body p-3">
        <!-- Card title (package name) -->
        <h5 class="card-title text-center text-md-start">{{ data.title }}</h5>
        <!-- Price display: current price and original price -->
        <div class="d-flex align-items-baseline justify-content-center justify-content-md-start mb-2">
          <span class="current-price me-2">{{ data.formattedCurrentPrice }} Baht</span>
          <span class="original-price text-decoration-line-through">{{ data.formattedOriginalPrice }} Baht</span>
        </div>
        <!-- Expiration date -->
        <div class="expire-date text-center text-md-start mb-3">
          <i class="bi bi-clock me-1"></i>
          Expire Date {{ data.expireDate }}
        </div>
        <!-- Action buttons: Detail and Buy Now -->
        <div class="d-grid gap-2 d-md-flex justify-content-md-center justify-content-lg-start">
          <button class="btn btn-outline-secondary detail-btn flex-grow-1 flex-md-grow-0 mb-2 mb-md-0 me-md-2" @click="$emit('detail-click', packageId)">Detail</button>
          <button class="btn btn-danger buy-now-btn flex-grow-1 flex-md-grow-0" @click="$emit('buy-now-click', packageId)">Buy Now</button>
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
/* Base styling for the card container */
.heart-screening-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

/* Styling for the image container at the top of the card */
.card-image-container {
  height: 200px; /* Base height for image container */
  overflow: hidden;
}

/* Styling for the main package image */
.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Styling for the overlay text on the image */
.overlay-text {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Align content to the bottom of the overlay */
  padding-bottom: 1rem;
}

/* Styling for the recommendation badge image */
.recommendation-badge {
  max-width: 100px; /* Adjust as needed */
  height: auto;
}

/* Styling for the Thai package title in the overlay */
.package-title {
  font-size: 1.2rem;
  font-weight: bold;
}

/* Styling for the English package subtitle in the overlay */
.package-subtitle {
  font-size: 0.9rem;
}

/* Styling for the hospital logo in the overlay */
.hospital-logo {
  max-width: 100px;
  height: auto;
}

/* Styling for the contact number in the overlay */
.contact-number {
  font-size: 0.8rem;
}

/* Styling for the current price */
.current-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #dc3545; /* Bootstrap danger color for emphasis */
}

/* Styling for the original price (strikethrough) */
.original-price {
  font-size: 1rem;
  color: #6c757d; /* Bootstrap muted color */
}

/* Styling for the expiration date */
.expire-date {
  font-size: 0.9rem;
  color: #6c757d;
}

/* Styling for the "Detail" button */
.detail-btn {
  border-color: #dee2e6;
  color: #6c757d;
}

/* Styling for the "Buy Now" button */
.buy-now-btn {
  background-color: #dc3545;
  border-color: #dc3545;
  color: white;
}

/* Responsive adjustments */

/* Small devices (mobile) - default styles already handle this with `text-center` and `d-grid` */

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  /* Align card content body text to the left */
  .card-content-body {
    text-align: left;
  }
  /* Align buttons to the start (left) of their container */
  .d-md-flex {
    justify-content: flex-start !important;
  }
  /* Align card title to the left */
  .card-title {
    text-align: left !important;
  }
  /* Align price and expire date elements to the start (left) */
  .current-price,
  .original-price,
  .expire-date {
    justify-content: flex-start !important;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  /* No specific large screen adjustments needed as the medium screen adjustments already fit the large screen layout. */
}
</style>
