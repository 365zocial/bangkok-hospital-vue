<template>
    <div class="text-center ">
  <div class="d-inline-block position-relative">
    <h1 class="text-capitalize fw-bold text-navy ">
      centers & clinics
    </h1>
    <div class="underline-gradient position-absolute bottom-0 start-0 end-0 mx-auto"></div>
  </div>
</div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
  },
})
</script>
<style scoped>

/* .underline-gradient {
  height: 4px;
  background: linear-gradient(to right, #c4001a 0%, #c4001a 60%, #0000ff 100%);
margin-top: 16px;
} */

.underline-gradient {
  height: 4px;
  background: linear-gradient(to right, #c4001a 0%, #c4001a 70%, #0000ff 100%);
 top: 45px;
  width: 80%; /* สำหรับ mobile */
  transition: width 0.3s ease-in-out, margin-top 0.3s ease-in-out;
}

@media (min-width: 576px) {
  .underline-gradient {
    width: 100%; /* สำหรับหน้าจอใหญ่กว่า mobile */
    top: 50px;
  }
}

/* Animation keyframes สำหรับการขยาย/หด */
@keyframes expandWidth {
  from {
    width: 80%;
    top: 30px;
  }
  to {
    width: 100%;
    top: 16px;
  }
}

@keyframes shrinkWidth {
    from {
    width: 100%;
    top: 16px;
  }
  to {
    width: 80%;
    top: 30px;
  }
}

/* Animation classes สำหรับ JavaScript control (optional) */
.expand-animation {
  animation: expandWidth 0.3s ease-in-out forwards;
}

.shrink-animation {
  animation: shrinkWidth 0.3s ease-in-out forwards;
}

</style>