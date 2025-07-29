<!-- components/SubscribeButton.vue -->
<template>
  <div>
    <span class="tw-text-bgh-dark tw-font-bold tw-text-xl">Stay Connected</span>
    
    <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-mt-4">
      <a aria-label="Go to Subscribe E-Newsletter" target="_blank" href="/en/bangkok/news_t_er">
        <button type="button" class="subscribe-btn button-animate">
          <span class="tw-text-white tw-capitalize tw-font-bold">Subscribe E-Newsletter</span>
        </button>
      </a>
    </div>
  </div>
</template>

<style scoped>
.subscribe-btn {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: #ffffff;
  background-color: #650045;
  border: 1px solid #ddd;
  border-radius: 0.75rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 0 transparent;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.subscribe-btn:hover {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2หpx);
  background-color: rgb(255, 255, 255);
}

.subscribe-btn:hover span {
  color: #00ff33;
}

.button-animate::before {
  position: absolute;
  content: "";
  top: 0;
  left: 15%;
  width: 30px;
  height: 100%;
  background: linear-gradient(
    -34.83deg,
    rgb(0, 98, 255) 17.64%,
    rgb(106, 201, 253) 71.04%
  );
  transform: skewX(-45deg);
  transition: all 0.3s cubic-bezier(0.2, 0.1, 1, 1);
}

.button-animate::after {
  position: absolute;
  content: "";
  top: 0;
  right: 20%;
width: 30px;
  height: 100%;
 background: linear-gradient(
    -34.83deg,
    rgb(0, 98, 255) 17.64%,
    rgb(106, 201, 253) 71.04%
  );
  transform: skewX(-45deg);
  transition: all 0.3s cubic-bezier(0.2, 0.1, 1, 1);
}

.button-animate:hover::before {
  left: 0%;
}

.button-animate:hover::after {
  right: 0%;
}
</style>
