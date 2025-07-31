<template>
  <div class="full-width">
    <div class="row" v-if="false">
      <div class="col-sm-4 col-lg-6 bg-primary text-white p-3">Column 1</div>
      <div class="col-sm-4 col-lg-6 bg-secondary text-white p-3">Column 2</div>
      <div class="col-sm-4 col-lg-6 bg-success text-white p-3">Column 3</div>
      <div class="col-sm-4 col-lg-6 bg-danger text-white p-3">Column 4</div>
    </div>

     <div style="margin: 50px 0 20px 0"></div>
    <div class="p-4">
   <ProfileDoctor />
    </div>


    <div style="margin: 50px 0 20px 0">Path : src/components/card/healthInfo.vue</div>
    <div class="row g-3 g-sm-3">
      <div v-for="data in healthInfoList" :key="data.id" class="col-12 col-md-6 col-lg-3 d-flex">
        <HealthInfo :data="data" />
      </div>
    </div>

    <div style="margin: 50px 0 20px 0">Path : src/components/button/animationBtn.vue</div>
    <div class="row g-sm-3">
      <div v-for="item in 2" :key="item" class="col-12 col-md-6 col-lg-3 my-2">
        <AnimationBtn color="white" title="Subscribe E-Newsletter"  />
        <div class="mt-3"></div>
        <AnimationBtn color="blue" title="Feedback & Suggestion"  />
      </div>
    </div>

    <div style="margin: 50px 0 20px 0">Path : src/components/text/titleWithBorderRB.vue</div>
    <TitleWithBorderRB title="Centers & Clinics" />

    <div style="margin: 50px 0 20px 0">Path : src/components/card/packageAndPromotion.vue</div>
    <div class="row g-3 g-sm-3">
      <div v-for="data in packageAndPromotionList" :key="data.id" class="col-12 col-lg-3 d-flex">
        <PackageAndPromotion :data="data" />
      </div>
    </div>

    <div style="margin: 50px 0 20px 0">Path : src/components/card/centerAndClinic.vue</div>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 g-sm-3">
      <div v-for="data in specialties" :key="data.name" class="col">
        <CenterAndClinic :data="data" />
      </div>
    </div>

    <div style="margin: 50px 0 20px 0">Path : src/components/card/heart.vue</div>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-sm-4">
      <div v-for="data in heartList" :key="data.name" class="col">
        <Heart :data="data" />
      </div>
    </div>

    <div style="margin: 50px 0 20px 0">Path : src/components/card/doctor.vue</div>
    <div class="row g-3">
      <div v-for="data in doctorList" :key="data.name" class="col-12 col-md-6 col-lg-4 d-flex">
        <Doctor :data="data" class="flex-fill" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Doctor from './components/card/doctor.vue'
import CenterAndClinic from './components/card/centerAndClinic.vue'
import Heart from './components/card/heart.vue'
import TitleWithBorderRB from './components/text/titleWithBorderRB.vue'
import PackageAndPromotion from './components/card/packageAndPromotion.vue'
import HealthInfo from './components/card/healthInfo.vue'
import AnimationBtn from './components/button/animationBtn.vue'
import ProfileDoctor from './components/profile/doctor.vue'
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
    name: 'Cardiology Clinic',
    img: 'https://static.bangkokhospital.com/uploads/2020/04/IHL-Cn-Heart-Clinic-600x315.jpg',
    link: '#',
  },
  {
    name: 'Cardiac Rehabilitation Clinic',
    img: 'https://static.bangkokhospital.com/uploads/2020/04/IHL-Cn-Cardiac-Rehabilitation-Clinic-600x315.jpg',
    link: '#',
  },
  {
    name: 'Cardiac Intervention Clinic',
    img: 'https://static.bangkokhospital.com/uploads/2020/09/IHL-Cn-%E0%B8%84%E0%B8%A5%E0%B8%B4%E0%B8%99%E0%B8%B4%E0%B8%81%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%88%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B8%A7%E0%B8%99-600x315.jpg',
    link: '#',
  },
]

const doctorList = [
  {
    name: 'Manoch Techachokwiwat',
    title: 'Dr. ',
    specialtyPrimary: 'Internal Medicine',
    specialtySecondary: 'Nephrology',
    imageUrl: '/public/images/doctor/1.png',
    isBookingAvailable: true,
  },
  {
    name: 'Valailuck Kiatthanakorn',
    title: 'Dr. ',
    specialtyPrimary: null,
    specialtySecondary: null,
    imageUrl: '/public/images/doctor/2.png',
    isBookingAvailable: false,
  },
  {
    name: 'Vitoon Pitiguagool',
    title: 'Dr. ',
    specialtyPrimary: 'Thoracic Surgery',
    specialtySecondary: null,
    imageUrl: '/public/images/doctor/3.png',
    isBookingAvailable: true,
  },
]

const packageAndPromotionList = [
  {
    packageId: '1',
    imageSrc: 'https://static.bangkokhospital.com/uploads/2025/06/EST_Heart.1-41-44.jpg',
    recommendationBadgeSrc: 'https://placehold.co/100x50/dc3545/ffffff?text=30%2B+years',
    thaiPackageName: 'ชุดตรวจสุขภาพหัวใจ โดยการวิ่งสายพาน',
    englishPackageName: 'Superior Heart Screening EST Package',
    title: 'Superior Heart Screening EST',
    currentPrice: '8,900',
    originalPrice: '16,650',
    expireDate: '31 Dec 2025',
  },
  {
    packageId: '2',
    imageSrc:
      'https://static.bangkokhospital.com/uploads/2025/06/Preventive_Heart.1-29-70-640x640.jpg',
    recommendationBadgeSrc: 'https://placehold.co/100x50/dc3545/ffffff?text=30%2B+years',
    thaiPackageName: 'ชุดตรวจสุขภาพหัวใจ โดยการวิ่งสายพาน 2',
    englishPackageName: 'Superior Heart Screening EST Package 2',
    title: 'Superior Heart Screening EST 2',
    currentPrice: '9,500',
    originalPrice: '18,000',
    expireDate: '31 Dec 2025',
  },
  {
    packageId: '3',
    imageSrc: 'https://static.bangkokhospital.com/uploads/2025/05/Heart__Lungs.2-58-75-640x640.jpg',
    recommendationBadgeSrc: 'https://placehold.co/100x50/dc3545/ffffff?text=30%2B+years',
    thaiPackageName: 'ชุดตรวจสุขภาพหัวใจ โดยการวิ่งสายพาน',
    englishPackageName: 'Superior Heart Screening EST Package',
    title: 'Superior Heart Screening EST',
    currentPrice: '8,900',
    originalPrice: '16,650',
    expireDate: '31 Dec 2025',
  },
  {
    packageId: '4',
    imageSrc: 'https://static.bangkokhospital.com/uploads/2025/06/EST_Heart.1-41-44.jpg',
    recommendationBadgeSrc: 'https://placehold.co/100x50/dc3545/ffffff?text=30%2B+years',
    thaiPackageName: 'ชุดตรวจสุขภาพหัวใจ โดยการวิ่งสายพาน 2',
    englishPackageName: 'Superior Heart Screening EST Package 2',
    title: 'Heart & Lung Together – Heart and Lung CT Scan Package',
    currentPrice: '9,500',
    originalPrice: '18,000',
    expireDate: '31 Dec 2025',
  },
]

const healthInfoList = [
  {
    id: 1,
    image:
      'https://static.bangkokhospital.com/uploads/2024/07/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94_BHT_shutterstock_2121304532-1.jpg',
    title: 'Frequent migraine headaches may indicate a heart wall defect.',
    description:
      'Migraine headaches, or simply migraines, are one of the common diseases in working-age people. Did you know that if you have a migraine with an aura, such as seeing flashes of light or having blurred vision, in some cases, where a part of the brain lacks blood supply, resulting in slurred speech .',
    translateByAi: true,
  },
  {
    id: 2,
    image: 'https://static.bangkokhospital.com/uploads/2024/11/IHL-Heart-cancer.jpg',
    title: 'Heart cancer: A rare disease but possible',
    description:
      'Although heart cancer is a disease that is rarely found, it can occur in 1 per 100,000 people, especially if it is liver cancer, kidney cancer, or lung cancer, which can spread through the veins to the heart area. It is mostly found in men rather than women. ',
    translateByAi: true,
  },
  {
    id: 3,
    image:
      'https://bhq-cms.sgp1.digitaloceanspaces.com/uploads/2024/10/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94-BHT_shutterstock_1056559850.jpg',
    title: 'Heart disease can be detected from the eyes.',
    description:
      'The eyes are the windows to the heart. The eyes can tell us about our health, especially the heart. If you have a yellowish-white ring around your cornea, it may indicate high cholesterol levels in your blood.',
    translateByAi: false,
  },
  {
    id: 4,
    image:
      'https://static.bangkokhospital.com/uploads/2023/11/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94_%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%88%E0%B8%81%E0%B8%B3%E0%B9%80%E0%B8%A3%E0%B8%B4%E0%B8%9A.jpg',
    title: 'Heart disease can be detected from the eyes.',
    description:
      'The eyes are the windows to the heart. The eyes can tell us about our health, especially the heart. If you have a yellowish-white ring around your cornea, it may indicate high cholesterol levels in your blood.',
    translateByAi: false,
  },
]


</script>
