<template>
  <div class="full-width">
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-sm-3">
      <div v-for="data in specialties" :key="data.name" class="col">
        <CenterAndClinic :data="data" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CenterAndClinic from './components/card/centerAndClinic.vue'

const specialties = [
  // Use ref() to make the array reactive
  {
    name: 'Heart',
    icon: 'http://static.bangkokhospital.com/uploads/2024/03/Heart4.svg',
    description:
      'Cardiology Clinic, Cardiac Rehabilitation Clinic, Cardiology Clinic, Cardiac Rehabilitation Clinic',
  },
  {
    name: 'Cancer',
    icon: 'https://static.bangkokhospital.com/uploads/2024/03/Cancer2.svg',
    description:
      'Radiation Oncology Center, Prevention and Early Detection Center, Medical Radiation Oncology Center, Prevention and Early Detection Center',
  },
  {
    name: 'Bone & Spine',
    icon: 'https://static.bangkokhospital.com/uploads/2024/03/Bone.svg',
    description:
      'Orthopedic Center, Spine Center, Hip & Knee Center, Fracture Center Orthopedic Center, Spine Center, Hip & Knee Center',
  },
  {
    name: 'Brain',
    icon: 'https://static.bangkokhospital.com/uploads/2024/03/Brain2.svg',
    description:
      'Neuroscience Center, Neurological Surgery Center, Longevit Neuroscience Center, Neurological Surgery Center ',
  },
  {
    name: 'Trauma',
    icon: 'https://static.bangkokhospital.com/uploads/2024/03/trauma2.svg',
    description:
      'Trauma Center (Call 1724), BDMS Medevac Center, Trauma Center (Call 1724), BDMS Medevac Center',
  },
  {
    name: 'Health Check-up',
    icon: 'https://static.bangkokhospital.com/uploads/2024/03/Checkup3.svg',
    description:
      'Health Design Center, Civil Aeromedical Center, Bangkok Health Design Center, Civil Aeromedical Center',
  },
  {
    name: 'Surgery',
    icon: 'https://static.bangkokhospital.com/uploads/2024/03/Surgery2.svg',
    description:
      'Surgery Center, Vascular Center, Colorectal Surgery Clinic, Advanced Surgery Center, Vascular Center, Colorectal Surgery Clinic',
  },
  {
    name: 'Dental Care',
    icon: 'https://static.bangkokhospital.com/uploads/2024/03/Dental.svg',
    description:
      'Bangkok Hospital Dental Center, Dental Implant, Digital Smile Design, Geriatri Bangkok Hospital Dental Center, Dental Implant',
  },
]
</script>
