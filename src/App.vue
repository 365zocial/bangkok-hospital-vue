

<template>

   <div class="full-width">
     <CenterAndClinic :data="specialties" />
   </div>
 
</template>

<script setup>

import CenterAndClinic from './components/card/centerAndClinic.vue';

const specialties = [ // Use ref() to make the array reactive
      {
        name: 'Heart',
        icon: 'bi-heart',
        description: 'Cardiology Clinic, Cardiac Rehabilitation Clinic, Cardiac...',
      },
      {
        name: 'Cancer',
        icon: 'bi-ribbon', // bi-ribbon for a general awareness/cancer ribbon
        description: 'Radiation Oncology Center, Prevention and Early Detection Center, Medical...',
      },
      {
        name: 'Bone & Spine',
        // Closest for bone/spine: bi-person-bounding-box, bi-ruler-horizontal.
        // For the image's abstract feel, maybe bi-activity or a custom SVG.
        // Using bi-lungs for now, as it's a body part.
        icon: 'bi-lungs',
        description: 'Orthopedic Center, Spine Center, Hip & Knee Center, Fracture Center...',
      },
      {
        name: 'Brain',
        // Closest for brain: bi-lightbulb (concept), bi-person-fill (head).
        // The image has a very specific brain icon, might need custom.
        icon: 'bi-lightbulb', // Placeholder, conceptual
        description: 'Neuroscience Center, Neurological Surgery Center, Longevity Center...',
      },
      {
        name: 'Trauma',
        // Closest for ambulance/trauma: bi-truck (ambulance-like), bi-bandages.
        icon: 'bi-truck', // Placeholder for ambulance icon
        description: 'Trauma Center (Call 1724), BDMS Medevac Center, BDMS Emergency...',
      },
      {
        name: 'Health Check-up',
        // Closest for check-up: bi-clipboard-check, bi-journal-check.
        icon: 'bi-clipboard-check',
        description: 'Health Design Center, Civil Aeromedical Center, Bangkok Hospit...',
      },
      {
        name: 'Surgery',
        // Closest for surgery: bi-scissors (conceptual), bi-tools.
        // The image has a scalpel-like icon, which is not directly in BS Icons.
        icon: 'bi-lightning', // Placeholder for a quick/sharp action
        description: 'Surgery Center, Vascular Center, Colorectal Surgery Clinic, Advanced...',
      },
      {
        name: 'Dental Care',
        icon: 'bi-tooth',
        description: 'Bangkok Hospital Dental Center, Dental Implant, Digital Smile Design, Geriatri...',
      },
    ];


</script>