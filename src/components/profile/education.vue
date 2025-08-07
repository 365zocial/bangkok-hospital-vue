<template>
  <div class="education-container">
    <!-- Education Card -->
    <div class="education-card">
      <!-- Header with Title -->
      <div class="education-header">
        <h3 class="education-title">Education</h3>
      </div>

      <!-- Education Items -->
      <div class="education-content">
        <div class="education-item"
          :class="{ 'border-bottom': index < educationData.length - 1 }"
          v-for="(item, index) in educationData" 
          :key="item.id"
        >
          <div class="row align-items-start g-0">
            <!-- Year Column -->
            <div class="col-2 col-md-1">
              <div class="education-year">{{ item.year }}</div>
            </div>
            
            <!-- Degree Column -->
            <div class="col-6 col-md-7">
              <div class="education-degree">{{ item.degree }}</div>
            </div>
            
            <!-- University Column -->
            <div class="col-4 col-md-4">
              <div class="education-university">{{ item.university }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

// Sample data - replace with props.data
const educationData = props.data.length ? props.data : [
  {
    id: 1,
    year: '1999',
    degree: 'Master of Management by Sasin Graduate Institute of Business Administration',
    university: 'Chulalongkorn University, Thailand'
  },
  {
    id: 2,
    year: '1989',
    degree: 'Doctor of Dental Surgery',
    university: 'Chulalongkorn University, Thailand'
  }
]
</script>

<style scoped>
.education-container {
  width: 100%;
  margin-bottom: 2rem;
}

.education-card {
  background: linear-gradient(135deg, #4c63b6 0%, #7b6db8 30%, #a67db8 70%, #d4a5c4 100%);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(76, 99, 182, 0.25);
}

.education-header {
  padding: 2rem 2rem 1.5rem 2rem;
}

.education-title {
  color: white;
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.education-content {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  margin: 0 1.5rem 1.5rem 1.5rem;
  border-radius: 16px;
  overflow: hidden;
}

.education-item {
  padding: 2rem 2.5rem;
  transition: background-color 0.3s ease;
}

.education-item:hover {
  background: rgba(76, 99, 182, 0.03);
}

.border-bottom {
  border-bottom: 1px solid rgba(76, 99, 182, 0.15);
}

.education-year {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  line-height: 1.2;
}

.education-degree {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  line-height: 1.4;
  padding-right: 1rem;
}

.education-university {
  font-size: 1rem;
  color: #718096;
  font-weight: 400;
  line-height: 1.4;
  text-align: right;
}

/* Mobile Responsive */
@media (max-width: 767px) {
  .education-card {
    border-radius: 20px;
  }
  
  .education-header {
    padding: 1.5rem 1.5rem 1rem 1.5rem;
  }
  
  .education-title {
    font-size: 1.5rem;
  }
  
  .education-content {
    margin: 0 1rem 1rem 1rem;
    border-radius: 12px;
  }
  
  .education-item {
    padding: 1.5rem 1.5rem;
  }
  
  .education-year {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  .education-degree {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .education-university {
    font-size: 0.9rem;
    text-align: left;
  }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {
  .education-degree {
    font-size: 1.05rem;
  }
  
  .education-university {
    font-size: 0.95rem;
  }
}

/* Large Screen */
@media (min-width: 992px) {
  .education-card {
    border-radius: 28px;
  }
  
  .education-header {
    padding: 2.5rem 3rem 2rem 3rem;
  }
  
  .education-title {
    font-size: 2rem;
  }
  
  .education-content {
    margin: 0 2rem 2rem 2rem;
    border-radius: 20px;
  }
  
  .education-item {
    padding: 2.5rem 3rem;
  }
  
  .education-year {
    font-size: 1.75rem;
  }
  
  .education-degree {
    font-size: 1.2rem;
  }
  
  .education-university {
    font-size: 1.1rem;
  }
}

/* Animation */
.education-container {
  animation: slideInUp 0.6s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>