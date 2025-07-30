<template>
     <div class="underline-gradient  bottom-0 start-0 end-0 mx-auto"></div>   
</template>
<style scoped>
.underline-gradient {
  height: 4px;
  background: linear-gradient(to right, #c4001a 0%, #c4001a 70%, #0000ff 100%);
 top: 45px;
  width: 80%; 
  transition: width 0.3s ease-in-out, margin-top 0.3s ease-in-out;
}

@media (min-width: 576px) {
  .underline-gradient {
    width: 100%; 
    top: 50px;
  }
}

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

.expand-animation {
  animation: expandWidth 0.3s ease-in-out forwards;
}

.shrink-animation {
  animation: shrinkWidth 0.3s ease-in-out forwards;
}
</style>