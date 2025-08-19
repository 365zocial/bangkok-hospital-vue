<template>
  <div class="">
 


    <div class="row mt-4">
      <div class="col-md-12">
        <div class="w-100 d-flex flex-column align-items-end">
   

          <div class="new-cov">
            <div class="folded-rectangle d-flex flex-row justify-content-center align-items-start ">Education</div>
            <div class="new-triangle"></div>
            <div class="box-77"></div>
            <div class="custom-box-1 w-100">
              <div class="content ">

                <div v-for="item in educationList" :key="item.year" class="d-flex flex-column flex-md-row justify-content-between align-items-start">
                  <div class="edu-year-width   ">{{ item.year }}</div>
                  <div class="edu-width">{{ item.degree }}</div>
                  <div class="edu-width">{{ item.institution }}</div>

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
  {year : "1995", degree: 'Nephrology', institution: "Chulalongkorn University, Thailand"},
  {year : "1993", degree: 'Internal Medicine', institution: "Chulalongkorn University, Thailand"},
  {year : "1987", degree: 'Doctor of Medicine', institution: "Chiang Mai University, Thailand"},
]

</script>

<style scoped>
.edu-year-width{
  width: 33.33%;
  border:1px solid #000;
}
.edu-width{
  width: 33.33%;
  border:1px solid #000;
}
.custom-box-1 {
  padding: 40px;
  border-radius: 24px 24px 24px 24px;
  background: linear-gradient(34.83deg, rgba(0, 45, 115, .12) 17.64%, rgba(0, 45, 115, .02) 71.04%);
}

.custom-box-2 {
  border-radius: 24px 24px 0px 0px;
  background-color: #7e98f5;
  height: 50px;
  position: sticky;
  right: 0px;
}



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
  --r: 24px;
  /* radius */
  width: 150px;
  height: 80px;
  aspect-ratio: 1.5;
  background: #ffffff;
  border-top-left-radius: var(--r);
  border-bottom-right-radius: var(--r) !important;
  mask:
    radial-gradient(var(--r) at 100% 100%, #0000 100%, #000 calc(100% + 1px)) 0 100%/var(--r) var(--r) no-repeat,
    linear-gradient(0, #0000 var(--r), #000 0);
}

.new-triangle {
  position: absolute;
  top: 0;
  z-index: 10;
  left: 109px;
  --r: 14px;
  height: 70px;
  width: auto;
  aspect-ratio: 1/cos(30deg);
  --_g: calc(tan(60deg)*var(--r)) top var(--r), #000 101%, #0000 101%;
    -webkit-mask:
    linear-gradient(0deg,#0000 calc(3*var(--r)/2),#000 0),
    radial-gradient(var(--r) at 50% calc(100% - 2*var(--r)),#000 98%,#0000 101%);
  clip-path: polygon(50% 100%,100% 0,0 0);
background: #ffffff;
rotate: 0deg;
}

.content {
  color: black;
  font-size: 20px;
  font-weight: 500;
  text-align: start;
  margin-top: 50px;
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


.triangle {
  width: 0;
  height: 0px;
  border-left: 30px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 40px solid #7e98f5;
  /* สามเหลี่ยมชี้ขึ้น */
  position: absolute;
  left: 120px;
  bottom: 0;
  z-index: 10;
}


.box-77 {
mask: radial-gradient(41px at 100% 100%,#0000 100%,#000);
  background: #ffffff;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  left: 172px;
  z-index: 10;
}
@media (max-width: 768px) {
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
