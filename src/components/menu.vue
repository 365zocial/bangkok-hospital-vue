<template>
  <div class="menu-container rounded-3 p-2">
    <!-- Desktop Layout (lg and up) -->
    <div class="d-none d-lg-block bg-white shadow-blue rounded-3">
      <!-- Services Section -->
      <div class="mb-4">
        <div class="d-flex align-items-center mb-3">
          <div class="icon-wrapper-lg">
            <i class="bi bi-heart-pulse text-primary fs-4"></i>
          </div>
           
          <div>
            <h5 class="fw-bold text-primary mb-0 menu-item">Services</h5>
          </div>
        </div>

        <div class="cov-service-item">
          <div class=" d-flex align-items-center mb-2">
            <div class="arrow-icon me-3">
              <i class="bi bi-arrow-right-circle text-primary"></i>
            </div>
            <span class="text-primary fw-semibold">Overview</span>
          </div>

          <div class=" d-flex align-items-center mb-2">
            <div class="arrow-icon me-3">
              <i class="bi bi-arrow-right-circle text-muted"></i>
            </div>
            <span class="text-muted">Our Services</span>
          </div>
        </div>
        <!--  -->

        <div class="d-flex align-items-center mb-3">
          <div class="icon-wrapper-lg">
            <i class="bi bi-clipboard2-plus text-primary fs-4"></i>
          </div>
           
          <div>
            <h5 class="fw-bold text-primary mb-0 menu-item">Diseases & Treatments</h5>
          </div>
        </div>

        <!--  -->
      </div>

      <div class="d-flex align-items-center mb-3">
        <div class="icon-wrapper-lg">
          <i class="bi bi-person-badge text-primary fs-4"></i>
        </div>
         
        <div>
          <h5 class="fw-bold text-primary mb-0 menu-item">Related Doctors</h5>
        </div>
      </div>

      <div class="d-flex align-items-center mb-3">
        <div class="icon-wrapper-lg">
          <i class="bi bi-gift text-primary fs-4"></i>
        </div>
         
        <div>
          <h5 class="fw-bold text-primary mb-0 menu-item">Packages & Promotions</h5>
        </div>
      </div>
    </div>

    <!-- Mobile Layout (below lg) -->
    <div class="d-lg-none">
      <div class="row gx-2 gy-2">
        <!-- Services Card -->
        <div class="col-6">
          <div class="shadow-blue mobile-menu-card rounded-3 h-100">
            <div
              class="d-flex flex-column justify-content-start align-items-start w-100 ps-2 pt-2 pe-2"
            >
              <div class="icon-wrapper mb-2">
                <i class="bi bi-heart-pulse text-primary"></i>
              </div>
              <h6 class="fw-bold text-primary">Services</h6>
            </div>
          </div>
        </div>

        <!-- Diseases & Treatments Card -->
        <div class="col-6">
          <div class="shadow-blue mobile-menu-card rounded-3 h-100">
            <div
              class="d-flex flex-column justify-content-start align-items-start w-100 ps-2 pt-2 pe-2"
            >
              <div class="icon-wrapper mb-2">
                <i class="bi bi-clipboard2-plus text-primary"></i>
              </div>
              <h6 class="fw-bold text-primary">Diseases & Treatments</h6>
            </div>
          </div>
        </div>

        <!-- Related Doctors Card -->
        <div class="col-6">
          <div class="shadow-blue mobile-menu-card rounded-3 h-100">
            <div
              class="d-flex flex-column justify-content-start align-items-start w-100 ps-2 pt-2 pe-2"
            >
              <div class="icon-wrapper mb-2">
                <i class="bi bi-person-badge text-primary"></i>
              </div>
              <h6 class="fw-bold text-primary">Related Doctors</h6>
            </div>
          </div>
        </div>

        <!-- Packages & Promotions Card -->
        <div class="col-6">
          <div class="shadow-blue mobile-menu-card rounded-3 h-100">
            <div
              class="d-flex flex-column justify-content-start align-items-start w-100 ps-2 pt-2 pe-2"
            >
              <div class="icon-wrapper mb-2">
                <i class="bi bi-gift text-primary"></i>
              </div>
              <h6 class="fw-bold text-primary">Packages & Promotions</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props สำหรับการปรับแต่ง menu items
const props = defineProps({
  activeSection: {
    type: String,
    default: 'services',
  },
})
</script>

<style scoped>
/* Desktop Styles */
@media (min-width: 992px) {
  .menu-container {
    max-width: 350px;
  }
}
.cov-service-item{
margin-left: 25px;
}

.menu-section {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.menu-section:hover {
  padding: 8px;
  margin: -8px;
}

.menu-item {
  cursor: pointer;
  padding: 4px 0;
  transition: all 0.2s ease-in-out;
}

.menu-item:hover {
  padding-left: 4px;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-primary {
  color: #0d47a1 !important;
}

/* Mobile Styles */
.mobile-menu-card {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.mobile-menu-card:hover {
  background-color: #ffffff !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  width: 35px;
  height: 35px;
  background-color: #e7edff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrapper-lg {
  width: 35px;
  height: 35px;
  background-color: #e7edff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* Custom styles for active states */
.menu-item.active .text-muted {
  color: #0d47a1 !important;
  font-weight: 600;
}

.menu-item.active .bi-arrow-right-circle {
  color: #0d47a1 !important;
}

/* Responsive text sizing */
@media (max-width: 575px) {
  .mobile-menu-card h6 {
    font-size: 1rem;
  }

  .icon-wrapper {
    width: 35px;
    height: 35px;
  }

  .mobile-menu-card .fs-1 {
    font-size: 1rem !important;
  }
}
</style>
