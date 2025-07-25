<template>
  <div class="card-shadow rounded-3 bg-white p-2 p-md-3 h-100 w-100 d-flex flex-column">
    <div class="d-flex flex-row flex-lg-column w-100 h-100">
      <div class="card-image-container position-relative rounded-3">
        <img :src="data.imageSrc" class="card-img-top" :alt="data.title" />

        <div
          class="overlay-text position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-3"
        ></div>
      </div>

      <div
        class="card-content-body d-flex flex-column justify-content-between flex-grow-1 ms-3 ms-md-4 ms-lg-0"
      >
  
          <h5 class="card-title fw-semibold my-2" >
            {{ data.title }}
          </h5>
      

        <div class="d-flex flex-column mt-2 align-items-start">
          <div class="d-flex align-items-baseline justify-content-center justify-content-md-start">
            <span class="current-price me-2">{{ data.currentPrice }} Baht</span>
            <span class="original-price text-decoration-line-through"
              >{{ data.originalPrice }} Baht</span
            >
          </div>

          <div
            class="expire-date text-center text-md-start mb-1 mb-md-3 font-black fw-medium"
            style="font-size: 12px"
          >
            <i class="bi bi-clock me-1"></i>
            Expire Date {{ data.expireDate }}
          </div>

          <div class="w-100 d-flex justify-content-center justify-content-center">
            <button
              class="btn btn-outline-secondary w-100 h-100 detail-btn me-1 rounded-pill p-2 p-md-2"
            >
              Detail
            </button>
            <button class="btn btn-danger w-100 h-100 buy-now-btn ms-1 rounded-pill p-2 p-md-2">
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
  background: linear-gradient(to bottom, #0000000b 0%, #00000000 30%, #0000000d 100%);
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
  font-size: 14px;
  font-weight: bold;
  color: #b21e28;
}

.original-price {
  font-size: 12px;
  color: #627380;
}

.detail-btn {
  border: 0.5px solid #f5f5f5;
  color: #6c757d;
  background-color: white;
  font-weight: 500;
  font-size: 0.75rem;
}

.detail-btn:hover {
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  color: #6c757d;
}

.buy-now-btn {
  background: linear-gradient(90deg, #96010b 0%, #d40004 100%);
  border: none;
  color: white;
  font-weight: 500;
  padding: 8px 20px;
  font-size: 0.75rem;
  transition: background 3s ease-in-out;
}

.buy-now-btn:hover {
  background: linear-gradient(135deg, #dc3545 0%, #dc3545 100%);
  border: none;
}

 .card-title {
    text-align: left !important;
    font-size: 0.8rem;
    color: #363636;
    transition: color 0.3s ease;
  }

  .card-shadow:hover .card-title {
    color: #0047A3;
  }
@media (min-width: 768px) {
  .d-md-flex {
    justify-content: flex-start !important;
  }

  .card-title {
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
    font-size: 0.9rem;
  }

  .buy-now-btn {
    font-size: 0.9rem;
  }
}

@media (min-width: 992px) {
  .card-image-container {
    width: 100%;
  }
  .card-content-body {
    width: 100%;
  }
}
</style>
