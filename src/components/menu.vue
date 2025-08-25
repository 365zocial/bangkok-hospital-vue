<template>
  <div class="menu-container rounded-3 p-2">
    <!-- Desktop Layout (lg and up) -->
    <div class="d-none d-lg-block">
      <!-- Services Section -->
      <div class="menu-section mb-4">
        <div class="d-flex align-items-center mb-3">
          <i class="bi bi-heart-pulse text-primary me-3 fs-4"></i>
          <h5 class="fw-bold text-primary mb-0">Services</h5>
        </div>
        
        <div class="menu-items ms-5">
          <div class="menu-item d-flex align-items-center mb-2">
            <div class="arrow-icon me-3">
              <i class="bi bi-arrow-right-circle text-primary"></i>
            </div>
            <span class="text-primary fw-semibold">Overview</span>
          </div>
          
          <div class="menu-item d-flex align-items-center mb-2">
            <div class="arrow-icon me-3">
              <i class="bi bi-arrow-right-circle text-muted"></i>
            </div>
            <span class="text-muted">Our Services</span>
          </div>
        </div>
      </div>

      <!-- Diseases & Treatments Section -->
      <div class="menu-section mb-4">
        <div class="d-flex align-items-center">
          <i class="bi bi-clipboard2-plus text-primary me-3 fs-4"></i>
          <h5 class="fw-bold text-primary mb-0">Diseases & Treatments</h5>
        </div>
      </div>

      <!-- Related Doctors Section -->
      <div class="menu-section mb-4">
        <div class="d-flex align-items-center">
          <i class="bi bi-person-badge text-primary me-3 fs-4"></i>
          <h5 class="fw-bold text-primary mb-0">Related Doctors</h5>
        </div>
      </div>

      <!-- Packages & Promotions Section -->
      <div class="menu-section">
        <div class="d-flex align-items-center">
          <i class="bi bi-gift text-primary me-3 fs-4"></i>
          <h5 class="fw-bold text-primary mb-0">Packages & Promotions</h5>
        </div>
      </div>
    </div>

    <!-- Mobile Layout (below lg) -->
    <div class="d-lg-none">
      <div class="row gx-2 gy-2">
        <!-- Services Card -->
        <div class="col-6">
          <div class="shadow-blue mobile-menu-card rounded-3 h-100 p-2">
            <div class="d-flex flex-column justify-content-start align-items-start w-100">
              <div class="icon-wrapper mb-2">
                <i class="bi bi-heart-pulse text-primary"></i>
              </div>
              <h6 class="fw-bold text-primary">Services</h6>
            </div>
          </div>
        </div>

        <!-- Diseases & Treatments Card -->
        <div class="col-6">
          <div class="shadow-blue mobile-menu-card rounded-3 h-100 p-2">
            <div class="d-flex flex-column justify-content-start align-items-start w-100">
              <div class="icon-wrapper mb-2">
                <i class="bi bi-clipboard2-plus text-primary"></i>
              </div>
              <h6 class="fw-bold text-primary">Diseases & Treatments</h6>
            </div>
          </div>
        </div>

        <!-- Related Doctors Card -->
        <div class="col-6">
          <div class="shadow-blue mobile-menu-card rounded-3 h-100 p-2">
            <div class="d-flex flex-column justify-content-start align-items-start w-100">
              <div class="icon-wrapper mb-2">
                <i class="bi bi-person-badge text-primary"></i>
              </div>
              <h6 class="fw-bold text-primary">Related Doctors</h6>
            </div>
          </div>
        </div>

        <!-- Packages & Promotions Card -->
        <div class="col-6">
          <div class="shadow-blue mobile-menu-card rounded-3 h-100 p-2">
            <div class="d-flex flex-column justify-content-start align-items-start w-100">
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
    default: 'services'
  }
})
</script>

<style scoped>

/* Desktop Styles */
@media (min-width: 992px) {
  .menu-container {
    max-width: 350px;
  }
}

.menu-section {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.menu-section:hover {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 8px;
  margin: -8px;
}

.menu-item {
  cursor: pointer;
  padding: 4px 0;
  transition: all 0.2s ease-in-out;
}

.menu-item:hover {
  background-color: #f8f9fa;
  border-radius: 4px;
  padding: 8px;
  margin: -4px;
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
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mobile-menu-card:hover {
  background-color: #ffffff !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.icon-wrapper {
  width: 20px;
  height: 20px;
  background-color: rgba(13, 71, 161, 0.1);
  border-radius: 10px;
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
    font-size: 0.875rem;
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