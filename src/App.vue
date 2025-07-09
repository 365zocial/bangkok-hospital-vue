

<template>

   <div class="full-width">
     <CenterAndClinic :dataList="specialties" />
   </div>
 
</template>

<script setup>

import CenterAndClinic from './components/card/centerAndClinic.vue';

const specialties = [ // Use ref() to make the array reactive
      {
        name: 'Heart',
        icon: 'http://static.bangkokhospital.com/uploads/2024/03/Heart4.svg',
        description: 'Cardiology Clinic, Cardiac Rehabilitation Clinic, Cardiac...',
      },
      {
        name: 'Cancer',
        icon: 'https://static.bangkokhospital.com/uploads/2024/03/Cancer2.svg', // bi-ribbon for a general awareness/cancer ribbon
        description: 'Radiation Oncology Center, Prevention and Early Detection Center, Medical...',
      },
      {
        name: 'Bone & Spine',
        icon: 'https://static.bangkokhospital.com/uploads/2024/03/Bone.svg',
        description: 'Orthopedic Center, Spine Center, Hip & Knee Center, Fracture Center...',
      },
      {name: 'Brain',
        icon: 'https://static.bangkokhospital.com/uploads/2024/03/Brain2.svg', // Placeholder, conceptual
        description: 'Neuroscience Center, Neurological Surgery Center, Longevity Center...',
      },
      {
        name: 'Trauma',
        icon: 'https://static.bangkokhospital.com/uploads/2024/03/trauma2.svg', // Placeholder for ambulance icon
        description: 'Trauma Center (Call 1724), BDMS Medevac Center, BDMS Emergency...',
      },
      {
        name: 'Health Check-up',
        icon: 'https://static.bangkokhospital.com/uploads/2024/03/Checkup3.svg',
        description: 'Health Design Center, Civil Aeromedical Center, Bangkok Hospit...',
      },
      {
        name: 'Surgery',
        icon: 'https://static.bangkokhospital.com/uploads/2024/03/Surgery2.svg', // Placeholder for a quick/sharp action
        description: 'Surgery Center, Vascular Center, Colorectal Surgery Clinic, Advanced...',
      },
      {
        name: 'Dental Care',
        icon: 'https://static.bangkokhospital.com/uploads/2024/03/Dental.svg',
        description: 'Bangkok Hospital Dental Center, Dental Implant, Digital Smile Design, Geriatri...',
      },
    ];


</script>