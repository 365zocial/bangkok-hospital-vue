<template>
  <div class="full-width">

<div class="row">
  <div class="col-sm-4 col-lg-6 bg-primary text-white p-3">Column 1</div>
  <div class="col-sm-4 col-lg-6 bg-secondary text-white p-3">Column 2</div>
  <div class="col-sm-4 col-lg-6 bg-success text-white p-3">Column 3</div>
  <div class="col-sm-4 col-lg-6 bg-danger text-white p-3">Column 4</div>
</div>


    <div class="my-10">-----------------------------------</div>

    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-sm-3">
      <div v-for="data in specialties" :key="data.name" class="col">
        <Test :data="data" />
      </div>
    </div>


     <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-sm-3">
      <div v-for="data in heartList" :key="data.name" class="col">
        <Heart :data="data" />
      </div>
    </div>

  </div>
</template>

<script setup>
import CenterAndClinic from './components/card/centerAndClinic.vue'
import Heart from './components/card/heart.vue'
import Test from './components/card/test.vue'
const specialties = [
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

const heartList = [
  {
    name:'Cardiology Clinic',
    img:'https://static.bangkokhospital.com/uploads/2020/04/IHL-Cn-Heart-Clinic-600x315.jpg',
    link:'#'
  },
  {
    name:'Cardiac Rehabilitation Clinic',
    img:'https://static.bangkokhospital.com/uploads/2020/04/IHL-Cn-Cardiac-Rehabilitation-Clinic-600x315.jpg',
    link:'#'
  },
   {
    name:'Cardiac Intervention Clinic',
    img:'https://static.bangkokhospital.com/uploads/2020/09/IHL-Cn-%E0%B8%84%E0%B8%A5%E0%B8%B4%E0%B8%99%E0%B8%B4%E0%B8%81%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%88%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B8%A7%E0%B8%99-600x315.jpg',
    link:'#'
  },
]
</script>
