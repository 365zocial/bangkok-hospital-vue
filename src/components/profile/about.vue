<template>
  <div class="row rounded-4 shadow-blue bg-white w-100">
    <div 
      class="col-12 col-md-3" 
      :class="getBorderClasses(index)"
      v-for="(item, index) in aboutData" 
      :key="item.id"
    >
      <div class="h-100 w-100 p-1 p-md-4">
        <div class="d-flex flex-row flex-md-column align-items-start">
          <div :class="`icon-container me-3 me-md-0 mb-md-2`">
            <img :src="getIconSrc(item.title)" alt="" class="w-100 h-100" />
          </div>
          <div class="info-content flex-grow-1">
            <h4 class="info-title mb-2">{{ item.title }}</h4>
            <p class="info-description mb-0">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function getBorderClasses(index) {
  const classes = [];
  
  // Mobile: เพิ่ม border-bottom ยกเว้นไอเท็มสุดท้าย
  if (index < aboutData.length - 1) {
    classes.push('border-bottom');
  }
  
  // Desktop: เพิ่ม border-end ยกเว้นไอเท็มสุดท้าย
  if (index < aboutData.length - 1) {
    classes.push('border-end-md');
  }
  
  return classes.join(' ');
}
function getIconSrc(title) {
  const icons = {
    'Centers & Clinics': 'https://static.bangkokhospital.com/uploads/2023/05/doctor-center.svg',
    'Specialty': 'https://static.bangkokhospital.com/uploads/2023/05/doctor-specialty.svg',
    'Sub Specialty': 'https://static.bangkokhospital.com/uploads/2023/05/doctor-subspecialty.svg',
    'Languages': 'https://static.bangkokhospital.com/uploads/2023/05/doctor-language.svg'
  };
  return icons[title] || '';
}


const aboutData = [
  {
    id: 1,
    title: 'Centers & Clinics',
    description: 'Kidney Center , Hemodialysis Center'
  },
  {
    id: 2,
    title: 'Specialty',
    description: 'Internal Medicine'
  },
  {
    id: 3,
    title: 'Sub Specialty',
    description: 'Nephrology'
  },
  {
    id: 4,
    title: 'Languages',
    description: 'English, Thai'
  }
]
</script>

<style scoped>
.icon-container {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e3a8a;
  line-height: 1.3;
}

.info-description {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.4;
}

/* Custom border styles */
.border-bottom {
  border-bottom: 1px solid #e5e7eb !important;
}

.border-end-md {
  border-right: none;
}

@media (min-width: 768px) {
  .border-bottom {
    border-bottom: none !important;
  }
  
  .border-end-md {
    border-right: 1px solid #e5e7eb !important;
  }
  
  .icon-container {
    width: 40px;
    height: 40px;
  }
  
  .info-title {
    font-size: 1.2rem;
  }
  
  .info-description {
    font-size: 1rem;
  }
}

@media (min-width: 992px) {
  .info-title {
    font-size: 1.3rem;
  }
  
  .info-description {
    font-size: 1.05rem;
  }
}
</style>