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
        <div class="test-123">blue</div>

        <div class="rounded-tab">5</div>
        <div class="w-100 d-flex flex-column align-items-end">
          <div class="d-flex flex-row w-100 cov-box-23" v-if="false">
            <div class="custom-box-3 w-25">3</div>
            <div class="triangle w-25">4</div>
            <div class="custom-box-2 w-75">2</div>
          </div>

          <div class="new-cov">
            <div class="folded-rectangle">test</div>
            <div class="new-triangle">2</div>
            <div class="custom-box-1 bg-secondary p-4 w-100">
              <div class="content">
                <h3>Box 1</h3>
                <p>Custom shaped box with gradient background</p>
              </div>
            </div>
          </div>

          <!-- <div class="custom-box-1 bg-secondary p-4 mb-4 w-100">
            <div class="content">
              <h3>Box 1</h3>
              <p>Custom shaped box with gradient background</p>
            </div>
          </div> -->
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
.test-123 {
  /* รูปร่างเอียงตามดีไซน์ในภาพ */
  background: #4ecdc4; /* สีฟ้าอมเขียวตามภาพ */
  clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
  border-radius: 0 100px 100% 0;
  padding: 2rem 1.5rem;
  margin-bottom: 1rem;
  min-height: 120px;
  width: 100%;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rounded-tab {
  --r: 24px;
  height: 70px;
  padding-inline: 0em;
  border-left: var(--r) solid #0000;
  border-radius: calc(2 * var(--r)) var(--r) 0 0 / var(--r) var(--r) 0 0;
  mask:
    radial-gradient(var(--r) at 0 0, #0000 98%, #000 101%) 0 100% / var(--r) var(--r) no-repeat,
    conic-gradient(#000 0 0) padding-box;
  background: #bd5532 border-box;
  width: 100%;
  margin: 50px 0;
}

.custom-box-1 {
  border-radius: 24px 24px 24px 24px;
}

.custom-box-2 {
  border-radius: 24px 24px 0px 0px;
  background-color: #7e98f5;
  height: 50px;
  /* clip-path: polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%); */
  position: sticky;
  right: 0px;
}

/* .custom-box-2 {
  border-radius: 0px 24px 0px 0px;
  background-color: #7e98f5;
  height: 50px;
  clip-path: polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%);
  position: sticky;
  right: 0px;
} */

.custom-box-3 {
  border-radius: 16px;
  background-color: #f5b7b1;
  height: 50px;
  position: sticky;
  left: 50px;
  z-index: 10;
}

.cov-box-23 {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #b1f5da;
  border-radius: 24px;
}

.new-cov {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ffffff00;
}

.custom-box-5 {
  background-color: #f5b1b1;
  height: 50px;
  width: 150px;
  border-radius: 16px;
  position: absolute;
  top: 0;
  z-index: 10;
   clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
}

.folded-rectangle {
  position: absolute;
  top: 0;
  z-index: 10;
  --r: 24px; /* radius */
  width: 150px;
  height: 80px;
  aspect-ratio: 1.5;
  background: white;
  border-top-left-radius: var(--r);
  border-bottom-right-radius: var(--r) !important;
  mask:
    radial-gradient(var(--r) at 100% 100%,#0000 100%,#000 calc(100% + 1px))
    0 100%/var(--r) var(--r) no-repeat,
    linear-gradient(0,#0000 var(--r),#000 0);
  /* clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%); */
}

.new-triangle {
  position: absolute;
  top: 0;
  z-index: 10;
  left: 130px;
  --r:15px; /* border radius */
  height: 77px;
  width: auto;
  aspect-ratio: 1;
  border-top-left-radius: var(--r);
  clip-path: polygon(0 100%,100% 0,0 0);
  --_g:calc(50%*(1 + 1/tan(22.5deg)) - var(--r)/(3*sqrt(2) - 4));
  --_r:calc(var(--r)/tan(22.5deg)),#000 98%,#0000 101%;
  -webkit-mask:
    radial-gradient(var(--r) at top  var(--r) right  var(--_r)),
    radial-gradient(var(--r) at left var(--r) bottom var(--_r)),
    conic-gradient(from -67.5deg at var(--_g) var(--_g),#000 90deg,#0000 0);
  background: rgb(178, 47, 47);

} 

/* ------------------------------------------------ */

.container {
  padding: 2rem;
  min-height: 100vh;
  background: #f8f9fa;
}

.clip-box {
  background: linear-gradient(135deg, #4c63b6 0%, #7b6db8 30%, #a67db8 70%, #d4a5c4 100%);
  clip-path: polygon(35% 56%, 55% 40%, 100% 40%, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0 56%);
  border-radius: 16px;
  padding: 3rem 2rem 2rem 2rem;
  margin-bottom: 2rem;
  min-height: 200px;
}

.content {
  color: white;
  text-align: center;
}

.content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.content h3 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.content p {
  font-size: 1.1rem;
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.clip-box-blue {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%);
  border-radius: 16px;
}

.clip-box-purple {
  background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%);
  border-radius: 16px;
}

.triangle {
  width: 0;
  height: 0px;
  border-left: 30px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 40px solid #7e98f5; /* สามเหลี่ยมชี้ขึ้น */
  position: absolute;
  left: 120px;
  bottom: 0;
  z-index: 10;
}



@media (max-width: 768px) {
  .clip-box {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    min-height: 150px;
    border-radius: 12px;
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
    border-radius: 10px;
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
</style>
