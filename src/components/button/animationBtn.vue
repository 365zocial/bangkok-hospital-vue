<template>
  <button type="button" :class="getClass(props)">
    <span class="fw-semibold"><slot /></span>
  </button>
</template>
<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'white',
  },
  title: {
    type: String,
    default: 'Click',
  },
  icon: {
    type: String,
    default: null,
  },
})

function getClass(props) {
  const baseClass = 'btn button-animate rounded-3'

  if (props.color === 'white') {
    return `light-btn ${baseClass}`
  } else if (props.color === 'blue') {
    return `blue-btn ${baseClass}`
  } else {
    return `light-btn ${baseClass}`
  }
}
</script>

<style scoped>
.btn {
  position: relative;
  width: 100%;
  padding: 0.75rem 2.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 2px 5px hwb(0 61% 39% / 0.1),
    0 0 30px -15px #0066ff33;
  border: 1px solid rgba(54, 54, 54, 0.1);
}

.light-btn {
  background-color: white;
  color: #002d73;
}

.blue-btn {
  background-color: #0047a3;
  color: white;
}

.blue-btn:hover {
  background-color: #002d73;
  color: white;
}

.button-animate::before {
  position: absolute;
  content: '';
  top: 0;
  width: 20%;
  height: 100%;
  transform: skewX(-45deg);
  transition: all 0.3s cubic-bezier(0.6, 0.2, 0.1, 1);
  background: linear-gradient(-34.83deg, #d8e7ff33 17.64%, #a8caff0d 71.04%);
  left: -15%;
}

.button-animate::after {
  position: absolute;
  content: '';
  top: 0;
  width: 20%;
  right: -15%;
  height: 100%;
  background: linear-gradient(-34.83deg, #d8e7ff33 17.64%, #a8caff0d 71.04%);
  transform: skewX(-45deg);
  transition: all 0.3s cubic-bezier(0.6, 0.2, 0.1, 1);
}

.button-animate:hover::before {
  left: -85px;
}

.button-animate:hover::after {
  right: -85px;
}

@media screen and (min-width: 992px) {
.btn {

  padding: 1rem 2.5rem;

}
  
}
</style>
