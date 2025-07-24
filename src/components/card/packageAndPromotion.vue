<template>
  <div class="card-shadow rounded-3 bg-white p-3 h-100 d-flex flex-column">
    <div class="d-flex flex-column h-100">
      <div class="card-image-container position-relative rounded-3">
        <img :src="data.imageSrc" class="card-img-top" :alt="data.title" />

        <div
          class="overlay-text position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-3"
        ></div>
      </div>
      <div class="card-content-body d-flex flex-column justify-content-between flex-grow-1">

        <h5 class="card-title fw-semibold my-2 font-title " style="color: #363636">
          {{ data.title }}
        </h5>

        <div class="d-flex flex-column mt-2">
          <div
            class="d-flex align-items-baseline justify-content-center justify-content-md-start "
          >
            <span class="current-price me-2">{{ data.currentPrice }} Baht</span>
            <span class="original-price text-decoration-line-through"
              >{{ data.originalPrice }} Baht</span
            >
          </div>

          <div
            class="expire-date text-center text-md-start mb-3"
            style="font-size: 0.8rem; color: #363636"
          >
            <i class="bi bi-clock me-1"></i>
            Expire Date {{ data.expireDate }}
          </div>

          <div class="w-100 d-grid d-md-flex justify-content-md-center justify-content-lg-start">
            <button
              class="btn btn-outline-secondary w-100 detail-btn flex-grow-1 flex-md-grow-0 mb-2 mb-md-0 me-md-2 rounded-pill"
              style="font-size: 0.8rem"
            >
              Detail
            </button>
            <button
              class="btn btn-danger w-100 buy-now-btn flex-grow-1 flex-md-grow-0 rounded-pill"
              style="font-size: 0.8rem"
            >
              Buy Now
            </button>
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
/* Base styling for the card container */
.heart-screening-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

/* Styling for the image container at the top of the card */
.card-image-container {
  width: 100%;
  aspect-ratio: 1; /* Makes height equal to width (square) */
  overflow: hidden; /* Rounded corners for the top of the card */
}

/* Styling for the main package image */
.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Styling for the overlay text on the image */
.overlay-text {
  background: linear-gradient(to bottom, #0000000b 0%, #00000000 30%, #0000000b 100%);
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
  font-size: 18px;
  font-weight: bold;
  color: #dc3545; /* Bootstrap danger color for emphasis */
}

/* Styling for the original price (strikethrough) */
.original-price {
  font-size: 14px;
  color: #6c757d; /* Bootstrap muted color */
}

/* Styling for the "Detail" button */
.detail-btn {
  border: 0.5px solid #F5F5F5;
  color: #6c757d;
  background-color: white;
  font-weight: 500;
}

.detail-btn:hover {
  background-color: #F5F5F5;
  border-color: #F5F5F5;
color: #6c757d;
}

/* Styling for the "Buy Now" button */
.buy-now-btn {
  background: linear-gradient(135deg, #9e1717 0%, #dc3545 100%);
  border: none;
  color: white;
  font-weight: 500;
  padding: 8px 20px;
}

.buy-now-btn:hover {
  background-color: #dc3545;
  border: none;
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
    font-size: 1rem;
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
