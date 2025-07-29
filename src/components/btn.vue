<!-- components/SubscribeButton.vue -->
<template>
  <div>
    <!-- <a aria-label="Go to Subscribe E-Newsletter" target="_blank" href="/en/bangkok/news_t_er"> -->
      <button type="button" class="subscribe-btn button-animate rounded-3 border">
        <span class="">Subscribe E-Newsletter</span>
      </button>
    <!-- </a> -->
  </div>
</template>

<style scoped>
.subscribe-btn {
  position: relative;
  width: 100%;
  padding: 1rem 2.5rem;
  font-weight: 600;
  font-size: 1rem;
  background-color: white;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

.button-animate::before {
  position: absolute;
  content: '';
  top: 0;
  left: -25px;
  width: 40px;
  height: 100%;
  background: linear-gradient(-34.83deg, rgb(0, 98, 255) 17.64%, rgb(106, 201, 253) 71.04%);
  transform: skewX(-45deg);
  transition: all 0.3s cubic-bezier(0.2, 0.1, 1, 1);
}

.button-animate::after {
  position: absolute;
  content: '';
  top: 0;
  right: -35px;
  width: 50px;
  height: 100%;
  background: linear-gradient(-34.83deg, rgb(0, 98, 255) 17.64%, rgb(106, 201, 253) 71.04%);
  transform: skewX(-45deg);
  transition: all 0.3s cubic-bezier(0.2, 0.1, 1, 1);
}

.button-animate:hover::before {
  left: -80px;
}

.button-animate:hover::after {
  right: -80px;
}
</style>
