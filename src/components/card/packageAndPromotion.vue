<template>
  <div class="card-shadow rounded-3 bg-white p-2 p-md-3 h-100 d-flex flex-column">
    <div class="d-flex flex-row flex-lg-column w-100">
      <div class="card-image-container position-relative rounded-3 ">
        <img :src="data.imageSrc" class="card-img-top" :alt="data.title" />

        <div
          class="overlay-text position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-3"
        ></div>
      </div>
      
      <div class="card-content-body d-flex flex-column justify-content-between  flex-grow-1 ms-3 ms-md-4 ms-lg-0">
        <h5 class="card-title fw-semibold my-2 font-title" style="color: #363636">
          {{ data.title }}
        </h5>

        <div class="d-flex flex-column mt-2 border align-items-start">
          <div class="d-flex align-items-baseline justify-content-center justify-content-md-start">
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

          <div class="w-100 d-flex justify-content-center justify-content-center">
            <button
              class="btn btn-outline-secondary w-100 h-100 detail-btn flex-grow-1 flex-md-grow-0 mb-2 mb-md-0 me-md-2 rounded-pill p-0 p-md-2"
       
            >
              Detail
            </button>
            <button
              class="btn btn-danger w-100  h-100 buy-now-btn flex-grow-1 flex-md-grow-0 rounded-pill p-0 p-md-2"
            
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
h5{
  font-size: 0.8rem;
}
.heart-screening-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}


.card-image-container {
  width: 40%;
  aspect-ratio: 1; 
  overflow: hidden; 
}

.card-content-body {
  text-align: left;
  width: 60%;
}


.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.overlay-text {
  background: linear-gradient(to bottom, #0000000b 0%, #00000000 30%, #0000000b 100%);
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 1rem;
}


.recommendation-badge {
  max-width: 100px;
  height: auto;
}


.package-title {
  font-size: 1.2rem;
  font-weight: bold;
}


.package-subtitle {
  font-size: 0.9rem;
}


.hospital-logo {
  max-width: 100px;
  height: auto;
}


.contact-number {
  font-size: 0.8rem;
}


.current-price {
  font-size: 16px;
  font-weight: bold;
  color: #dc3545;
}


.original-price {
  font-size: 12px;
  color: #6c757d; 
}

.detail-btn {
  border: 0.5px solid #f5f5f5;
  color: #6c757d;
  background-color: white;
  font-weight: 500;
  font-size: 0.8rem
}

.detail-btn:hover {
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  color: #6c757d;
}

.buy-now-btn {
  background: linear-gradient(135deg, #9e1717 0%, #dc3545 100%);
  border: none;
  color: white;
  font-weight: 500;
  padding: 8px 20px;
  font-size: 0.8rem
}

.buy-now-btn:hover {
  background-color: #dc3545;
  border: none;
}




@media (min-width: 768px) {

  .d-md-flex {
    justify-content: flex-start !important;
  }

  .card-title {
    text-align: left !important;
    font-size: 1rem;
  }

  .current-price,
  .original-price,
  .expire-date {
    justify-content: flex-start !important;
  }

  .current-price {
  font-size: 18px;
}


.original-price {
  font-size: 14px;

}

.detail-btn {
  font-size: 0.9rem
}

.buy-now-btn {
  font-size: 0.9rem
}

}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .card-image-container {
  width: 100%;

}
  .card-content-body {
    width: 100%;
  }
  
}
</style>
