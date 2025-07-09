<template>
  <div class="container my-4 ">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      <div v-for="specialty in specialties" :key="specialty.name" class="col">
        <div class="card h-100 shadow-sm border-0 rounded-4 w-full">
          <div class="card-body d-flex flex-column align-items-start">
            <div class="icon-wrapper mb-3 p-3 bg-light rounded-4">
              <i :class="['bi', specialty.icon, 'fs-3', 'text-primary']"></i>
            </div>
            <h5 class="card-title fw-bold mb-2">{{ specialty.name }}</h5>
            <p class="card-text text-muted small lh-sm">
              {{ specialty.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'; // Import 'ref' for reactive data

export default defineComponent({
  name: 'MedicalSpecialtiesGrid',
  setup() { // This is where Composition API logic goes
    const specialties = ref([ // Use ref() to make the array reactive
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
    ]);

    // Return the reactive data and methods that should be exposed to the template
    return {
      specialties,
    };
  },
});
</script>

<style scoped>
.card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.icon-wrapper {
  background-color: var(--bs-light) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add explicit width/height if needed for perfect square */
  width: 3.5rem; /* Example size */
  height: 3.5rem; /* Example size */
}

.text-primary {
  color: #007bff !important; /* Standard Bootstrap primary color */
  /* You can override this if you have a custom primary color in your Bootstrap theme */
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
}

.card-text {
  font-size: 0.9rem;
  line-height: 1.4;
}
</style>