<template>
  <div class="">
    <div class="row mt-4">
      <div class="col-md-12">
        <div class="w-100 d-flex flex-column align-items-end">
          <div class="new-cov">
            <div class="folded-rectangle d-flex flex-row justify-content-center align-items-start">
              <h4 class="education-text text-center mt-3">Education</h4>
            </div>

            <div class="new-triangle"></div>
            <div class="box-77"></div>
            <div class="custom-box-1 w-100">
              <div class="content w-100">
                <div
                  v-for="item in educationList"
                  :key="item.year"
                  class="d-flex flex-column flex-md-row justify-content-between align-items-start w-100 my-3"
                >
                  <div class="edu-year-width">{{ item.year }}</div>
                  <div class="edu-degree-width">{{ item.degree }}</div>
                  <div class="edu-institution-width">{{ item.institution }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const educationList = [
  { year: '1995', degree: 'Nephrology', institution: 'Chulalongkorn University, Thailand' },
  { year: '1993', degree: 'Internal Medicine', institution: 'Chulalongkorn University, Thailand' },
  { year: '1987', degree: 'Doctor of Medicine', institution: 'Chiang Mai University, Thailand' },
]
</script>

<style scoped>
.education-text {
  font-weight: 700;
  color: #002d73;
  font-size: 1.25rem;
}

.edu-year-width {
  width: 100%;
  font-weight: 700;
  color: #002d73;
  font-size: 1.25rem;
  margin: 5px 0;
}
.edu-degree-width {
  width: 100%;
  font-weight: 600;
  color: #002d73;
  font-size: 1.125rem;
  margin: 5px 0;
}

.edu-institution-width {
  width: 100%;
  font-size: 1rem;
  font-weight: 200;
  margin: 5px 0;
}

.custom-box-1 {
  padding: 20px 20px 4px 20px;
  border-radius: 12px;
  background: linear-gradient(
    34.83deg,
    rgba(0, 45, 115, 0.12) 17.64%,
    rgba(0, 45, 115, 0.02) 71.04%
  );
}

/* .custom-box-1 {
  padding: 40px 40px 25px 40px;
  border-radius: 24px;
  background: linear-gradient(34.83deg, rgba(0, 45, 115, .12) 17.64%, rgba(0, 45, 115, .02) 71.04%);
} */

.new-cov {
  position: relative;
  width: 100%;
  height: 100%;
}

.folded-rectangle {
  position: absolute;
  top: 0;
  z-index: 20;
  --r: 12px; /* lg 24px */
  width: 140px;
  height: 68px; /* lg 80px */
  aspect-ratio: 1.5;
  background: #fff;
  border-top-left-radius: var(--r);
  border-bottom-right-radius: var(--r) !important;
  mask:
    radial-gradient(var(--r) at 100% 100%, #0000 100%, #000 calc(100% + 1px)) 0 100% / var(--r)
      var(--r) no-repeat,
    linear-gradient(0, #0000 var(--r), #000 0);
}

.new-triangle {
  position: absolute;
  top: 0;
  z-index: 10;
  /* left: 109px; */
  left: 96px;
  --r: 14px;
  height: 70px;
  width: auto;
  aspect-ratio: 1 / cos(30deg);
  --_g: calc(tan(60deg) * var(--r)) top var(--r), #000 101%, #0000 101%;
  -webkit-mask:
    linear-gradient(0deg, #0000 calc(3 * var(--r) / 2), #000 0),
    radial-gradient(var(--r) at 50% calc(100% - 2 * var(--r)), #000 98%, #0000 101%);
  clip-path: polygon(50% 100%, 100% 0, 0 0);
  background: #fff;
  rotate: 0deg;
}

.content {
  text-align: start;
  margin-top: 50px;
  line-height: 130%;
}

.box-77 {
  mask: radial-gradient(41px at 100% 100%, #0000 100%, #000);
  background: #fff;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  /* left: 172px; */
  left: 160px;
  z-index: 10;
}
@media (min-width: 768px) {
  .edu-year-width {
    width: 25% !important;
    margin: 15px 0;
  }

  .edu-degree-width {
    width: 37.5%;
    margin: 15px 0;
  }

  .edu-institution-width {
    width: 37.5%;
    margin: 15px 0;
  }
}

@media (min-width: 992px) {
  .edu-year-width {
    margin: 10px 0;
  }

  .edu-degree-width {
    margin: 10px 0;
  }

  .edu-institution-width {
    margin: 10px 0;
  }

  .folded-rectangle {
    position: absolute;
    top: 0;
    z-index: 20;
    --r: 24px; 
    width: 140px;
    height: 80px; 
    aspect-ratio: 1.5;
    background: #fff;
    border-top-left-radius: var(--r);
    border-bottom-right-radius: var(--r) !important;
    mask:
      radial-gradient(var(--r) at 100% 100%, #0000 100%, #000 calc(100% + 1px)) 0 100% / var(--r)
        var(--r) no-repeat,
      linear-gradient(0, #0000 var(--r), #000 0);
  }

  .custom-box-1 {
    padding: 35px 35px 15px 35px;
    border-radius: 24px;
    background: linear-gradient(
      34.83deg,
      rgba(0, 45, 115, 0.12) 17.64%,
      rgba(0, 45, 115, 0.02) 71.04%
    );
  }
}
</style>
