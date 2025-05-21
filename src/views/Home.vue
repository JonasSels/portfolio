<script>
export default {
  name: "Home"
}
</script>

<template>
  <div class="background-color">
  <section class="header">
  <div class="wave-wrapper">
    <h1>Enlighten your story</h1>
    <p>
      Als leidraad in mijn werk hecht ik waarde aan het aangaan van warme en betekenisvolle relaties met mensen.
      Door deze relaties leer ik hun unieke verhalen kennen en breng ik deze tot leven als designer. Samen creëren en
      visualiseren we hun verhaal op een manier die recht doet aan hun visie en wensen, waardoor we een authentiek en
      krachtig verhaal kunnen vormgeven.
    </p>
    <RouterLink to="/contact" class="button">Get in touch</RouterLink>

    <div class="wave-1">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path class="shape-fill" d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,26.7C1120,32,1280,64,1360,80L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>

      </svg>
    </div>

  </div>

  </section>
  </div>
</template>

<style scoped>

.background-color {
  background-color: #3D877F;
  min-height: 100vh;
  width: 100%;
}

.header {
  position: relative;
  height: auto;
  width: 100%;

}

.wave-wrapper {
  background-color: #FFF6E7;
  height: 66vh;
  position: relative;
  z-index: 5;

}

.wave-1 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    transform: rotate(180deg);
    margin-bottom: -1px;
  }

  .shape-fill {
    fill: #3D877F;
  }
}



</style>
