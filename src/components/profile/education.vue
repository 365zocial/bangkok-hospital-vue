<template>
  <div class="container">
    <!-- กล่องที่ใช้ clip-path -->
    <div class="clip-box" v-if="false">
      <div class="content">
        <h2>Education</h2>
        <p>This is a box with custom clip-path shape</p>
        <p>The polygon creates an irregular shape with curved edges</p>
      </div>
    </div>

    <!-- ตัวอย่างหลายกล่อง -->

    <div class="row mt-4">

      <div class="col-md-6">
        <div class="custom-box-2">2</div>
        <div class="custom-box-1 bg-secondary p-4 mb-4">
          <div class="content">
            <h3>Box 1</h3>
            <p>Custom shaped box with gradient background</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="clip-box clip-box-blue">
          <div class="content">
            <h3>Box 1</h3>
            <p>Custom shaped box with gradient background</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="clip-box clip-box-blue">
          <div class="content">
            <h3>Box 1</h3>
            <p>Custom shaped box with gradient background</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="clip-box clip-box-purple">
          <div class="content">
            <h3>Box 2</h3>
            <p>Another custom shaped box</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>

.custom-box-1{
  border-radius: 32px 0px 32px 32px;
}

.custom-box-2{
  border-radius: 0px 32px 0px 0px;
  background-color: #7e98f5;
  height: 40px ;
}
.container {
  padding: 2rem;
  min-height: 100vh;
  background: #f8f9fa;
}

.clip-box {
  background: linear-gradient(135deg, #4c63b6 0%, #7b6db8 30%, #a67db8 70%, #d4a5c4 100%);
  clip-path: polygon(35% 56%, 55% 40%, 100% 40%, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0 56%);
  border-radius: 16px; /* เพิ่ม border-radius */
  padding: 3rem 2rem 2rem 2rem;
  margin-bottom: 2rem;
  min-height: 200px;
  position: relative;
  box-shadow: 0 10px 30px rgba(76, 99, 182, 0.3);
  transition: all 0.3s ease;
}

.clip-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(76, 99, 182, 0.4);
}

.content {
  color: white;
  text-align: center;
  position: relative;
  z-index: 2;
}

.content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.content h3 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.content p {
  font-size: 1.1rem;
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

/* Variant colors */
.clip-box-blue {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%);
  border-radius: 16px; /* เพิ่ม border-radius */
}

.clip-box-purple {
  background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%);
  border-radius: 16px; /* เพิ่ม border-radius */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .clip-box {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    min-height: 150px;
    border-radius: 12px; /* ลด border-radius สำหรับ mobile */
  }

  .content h2 {
    font-size: 2rem;
  }

  .content h3 {
    font-size: 1.5rem;
  }

  .content p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .clip-box {
    padding: 1.5rem 1rem 1rem 1rem;
    min-height: 120px;
    border-radius: 10px; /* ลด border-radius สำหรับ mobile เล็ก */
  }

  .content h2 {
    font-size: 1.75rem;
  }

  .content h3 {
    font-size: 1.3rem;
  }

  .content p {
    font-size: 0.9rem;
  }
}

/* Alternative: เพิ่ม border หรือ outline */
.clip-box-outlined {
  background: white;
  color: #4c63b6;
  border: 3px solid;
  border-image: linear-gradient(135deg, #4c63b6 0%, #7b6db8 30%, #a67db8 70%, #d4a5c4 100%) 1;
  border-radius: 16px; /* เพิ่ม border-radius */
}

.clip-box-outlined .content {
  color: #4c63b6;
}

/* Animation example */
@keyframes clipBoxFadeIn {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.clip-box {
  animation: clipBoxFadeIn 0.8s ease-out;
}

/* เพิ่ม pseudo-element สำหรับ pattern หรือ texture */
.clip-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size:
    50px 50px,
    30px 30px;
  clip-path: inherit;
  border-radius: inherit; /* ให้ pseudo-element ใช้ border-radius เดียวกัน */
  pointer-events: none;
}
</style>
