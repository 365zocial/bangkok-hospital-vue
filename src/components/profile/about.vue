<template>
  <div class="setting-rounded shadow-blue bg-white w-100">
    <div class="row g-0"> 
      <div 
        :class="getItemClasses(index)"
        v-for="(item, index) in props.data" 
        :key="item.id"
      >
        <div class="h-100 w-100 padding-item" >
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
  </div>
</template>

<script setup>

const props = defineProps({
  data : {
    type: Array,
    default: () => []
  }
})

function getItemClasses(index) {
  return [
    ...getColumnClasses().split(' '),
    ...getBorderClasses(index).split(' ')
  ];
}

function getColumnClasses() {
  const length = props.data.length;
  let classes = ['col-12']; 

  if (length === 2) {
    classes.push('col-md-6'); 
  } else if (length === 3) {
    classes.push('col-md-4'); 
  } else if (length === 4) {
    classes.push('col-md-3'); 
  } else {
    classes.push('col-md-12'); 
  }
  
  return classes.join(' ');
}

function getBorderClasses(index) {
   const classes = [];
  const length = props.data.length;

  if (index < length - 1) {
    classes.push('border-bottom');
  }
  
  if (index < length - 1) {
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


</script>

<style scoped>
.setting-rounded {
  border-radius: 16px;
}
.icon-container {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-title {
  font-size: 1rem;
  font-weight: 750;
  color: #1e3a8a;
  line-height: 1.3;
}

.info-description {
  font-size: 0.95rem;
  font-weight: 300;
  color: #363636;
  line-height: 1.4;
}

.border-bottom {
  border-bottom: 1px solid #e7edff !important;
  position: relative;
}

.border-end-md {
  position: relative;
}

.border-end-md::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  background-color: #e7edff;
  display: none;
}

.padding-item {
  padding: 20px;
}

@media (min-width: 768px) {
  .border-bottom {
    border-bottom: none;
  }
  
  .border-end-md::after {
    display: block;
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

  .padding-item {
  padding: 24px;
}

.setting-rounded {
  border-radius: 24px;
}
}

@media (min-width: 992px) {
  .info-title {
    font-size: 1.3rem;
  }
  
  .info-description {
    font-size: 1.05rem;
  }

  .padding-item {
  padding: 32px;
}
}
</style>