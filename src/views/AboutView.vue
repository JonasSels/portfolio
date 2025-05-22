<template>
  <main>
    <div class="achtergrond"></div>

    <section class="about">
      <article class="about-afbeelding"></article>

      <article class="about-tekst">
        <h2>Wie ben ik?</h2>
        <img src="@/assets/images/about.png" alt="inleiding-achtergrond-pad" />
        <p>
          Mijn naam is Jonas, ik ben 25 jaar en gepassioneerd door design. Natuurlijk is dit iets wat de meeste designers aangeven, maar wat mij uniek maakt is dat ik al een lange weg heb afgelegd om te komen waar ik nu sta. Daarnaast ben ik een rustig persoon die vanuit een warme houding in contact treedt met anderen. Ik geloof dat dit de basis is voor een goede werkrelatie en dat alles hier begint.
        </p>
        <p>Ben je benieuwd naar mijn leerweg? Neem dan zeker een kijkje onderaan de pagina.</p>
      </article>
    </section>

    <div class="skills-carousel-wrapper">
      <div class="skills-carousel">
        <div class="skills-track">
          <div class="skill" v-for="icon in icons" :key="icon.src">
            <img :src="`../src/assets/images/${icon.src}`" :alt="icon.name + '-icon'" />
            <p>{{ icon.name }}</p>
          </div>
          <div class="skill" v-for="icon in icons" :key="'clone-' + icon.src">
            <img :src="`../src/assets/images/${icon.src}`" :alt="icon.name + '-icon-clone'" />
            <p>{{ icon.name }}</p>
          </div>
        </div>
      </div>
    </div>




    <section class="tijdlijn">
      <div class="tijdlijn-top-container">
        <div class="tijdlijn-top">
          <a :href="cv" download><strong>Download CV</strong></a>
        </div>
      </div>

      <div class="tijdlijn-lijn"></div>

      <div class="knop-tijdlijn-container-24">
        <div class="knop-tijdlijn-24">
          <p>2024</p>
        </div>
      </div>

      <div class="knop-tijdlijn-container-20">
        <div class="knop-tijdlijn-20">
          <p>2020</p>
        </div>
      </div>

      <div class="knop-tijdlijn-container-17">
        <div class="knop-tijdlijn-17">
          <p>2017</p>
        </div>
      </div>

      <div class="knop-tijdlijn-container-12">
        <div class="knop-tijdlijn-12">
          <p>2012</p>
        </div>
      </div>

      <article>
        <div class="tijdlijn-afbeelding">
          <img src="@/assets/images/pxl.jpg" alt="pxl-image" />
        </div>
        <div class="tijdlijn-tekst1">
          <h3>Start graduaat digitale vormgeving</h3>
          <p>
            Na drie jaar als hulpverlener besloot ik mijn passie achterna te gaan en begon ik aan een graduaat. Mijn doel is om aan de slag te gaan bij bedrijven die zich bezighouden met UI/UX design en branding.
          </p>
        </div>
      </article>

      <article>
        <div class="tijdlijn-tekst1">
          <h3>Aan de slag als psycho-sociaal hulpverlener</h3>
          <p>
            Na het afronden van mijn bachelor ging ik aan de slag als psycho-sociaal hulpverlener bij het CAW, waar vraagverheldering centraal stond. Het verhaal van mensen leren kennen en begrijpen en hun ondersteunen in hun noden. Deze ervaring beschouw ik als waardevol om verder te groeien in de grafische wereld en goed in te spelen op de noden van klanten.
          </p>
        </div>
        <div class="tijdlijn-afbeelding">
          <img src="@/assets/images/caw.jpg" alt="caw-image" />
        </div>
      </article>

      <article>
        <div class="tijdlijn-afbeelding">
          <img src="@/assets/images/thomasmore.jpg" alt="thomasmore-image" />
        </div>
        <div class="tijdlijn-tekst1">
          <h3>Bachelor sociaal werk</h3>
          <p>
            Hoewel ik gepassioneerd ben door design, besloot ik eerst een andere richting te volgen. Vanuit mijn ervaringen in de jeugdbeweging koos ik ervoor om sociaal werk te studeren. Mijn passie voor design heb ik echter nooit losgelaten; ik bleef actief binnen mijn netwerk en voor mijn lokale jeugdvereniging door het creëren van allerlei designs.
          </p>
        </div>
      </article>

      <article>
        <div class="tijdlijn-tekst1">
          <h3>Secundair | multimedia</h3>
          <p>
            Vanaf het derde middelbaar koos ik ervoor om de grafische wereld in te stappen en volgde ik de richting grafische media. Hier maakte ik voor het eerst kennis met zowel grafisch design als printmedia. Vanuit mijn passie koos ik later voor de richting multimedia, om mij verder te specialiseren in design en ontwerp. Dit varieerde van het maken van brochures tot branding en webdesign… .
          </p>
        </div>
        <div class="tijdlijn-afbeelding">
          <img src="@/assets/images/thhi.png" alt="thhi-image" />
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import cv from '@/assets/pdf/JonasSels_cv.pdf'
export default {
  name: 'AboutView',
  data() {
    return {
      cv: cv,
      icons: [
        { src: 'css.png', name: 'CSS' },
        { src: 'html.png', name: 'HTML' },
        { src: 'photoshop.png', name: 'Photoshop' },
        { src: 'illustrator.png', name: 'Illustrator' },
        { src: 'indesign.png', name: 'InDesign' },
        { src: 'figma.png', name: 'Figma' },
        { src: 'vue.png', name: 'Vue.js' }
      ]
    }
  }
}
</script>

<style scoped>
.tijdlijn-top a {
  color: #F6F3EC;
  text-decoration-color: #F6C985;
  text-decoration-thickness: 2px;
}

main .about {
  display: flex;
  width: 100%;
}

main .about .about-afbeelding {
  width: 50%;
  height: 45rem;
  background-image: url('@/assets/images/about.png');
  background-repeat: no-repeat;
  background-size: cover;
}

main .about .about-tekst {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  color: #3D877F;
}

main .about .about-tekst h2 {
  margin-bottom: 2rem;
}

main .about .about-tekst p {
  margin-top: 1rem;
}

.skills-carousel-wrapper {
  overflow: hidden;
  width: 100%;
  background-color: #3D877F;
  padding: 3rem 0;
  position: relative;
}

.skills-carousel {
  width: 100%;
  position: relative;
}

/* Belangrijk: scoped support */
:deep(.skills-track) {
  display: flex;
  width: max-content;
  animation: scroll-loop 30s linear infinite;
}

/* Skill-item */
:deep(.skill) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 4rem; /* extra ruimte tussen iconen */
  color: white;
  font-weight: 500;
  font-size: 0.95rem;
  text-align: center;
  white-space: nowrap;
}

:deep(.skill img) {
  width: 4rem;
  height: auto;
  margin-bottom: 0.5rem;
}

/* Scroll animatie */
@keyframes scroll-loop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pauzeer animatie bij hover (optioneel) */
.skills-carousel-wrapper:hover :deep(.skills-track) {
  animation-play-state: paused;
}

/* Responsive styling */
@media (max-width: 700px) {
  :deep(.skill) {
    margin: 0 2rem;
    font-size: 0.85rem;
  }

  :deep(.skill img) {
    width: 3rem;
  }
}



main .tijdlijn {
  width: 85%;
  margin: 10rem auto 15rem auto;
  position: relative;
  max-width: 1920px;
}

main .tijdlijn .tijdlijn-afbeelding {
  width: 55%;
  text-align: center;
  margin: 5rem 0;
}

main .tijdlijn .tijdlijn-tekst1 {
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #3D877F;
}

main .tijdlijn article {
  display: flex;
  border-bottom: 0.3rem dashed #3D877F;
}

main .tijdlijn article img {
  width: 50%;
}

main .tijdlijn .tijdlijn-tekst1:nth-child(odd) {
  margin-right: 5rem;
}

main .tijdlijn .tijdlijn-tekst1:nth-child(even) {
  margin-left: 5rem;
}

main .knop-tijdlijn-container-24,
main .knop-tijdlijn-container-20,
main .knop-tijdlijn-container-17,
main .knop-tijdlijn-container-12 {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}

main .knop-tijdlijn-container-24 { top: 23.5%; }
main .knop-tijdlijn-container-20 { top: 53%; }
main .knop-tijdlijn-container-17 { top: 77%; }
main .knop-tijdlijn-container-12 { top: 100%; }

.knop-tijdlijn-24,
.knop-tijdlijn-20,
.knop-tijdlijn-17,
.knop-tijdlijn-12 {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-color: #FFF;
  border: 5px solid #3D877F;
  color: #3D877F;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
}

.tijdlijn-lijn {
  position: absolute;
  background-color: #3D877F;
  left: 49.5%;
  height: 100%;
  width: 0.5rem;
  z-index: 0;
}

.tijdlijn-top-container {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}

.tijdlijn-top {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-color: #3D877F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  padding: 0.75rem;
}

.tijdlijn-top i {
  background-color: white;
  margin-top: 0.75rem;
  padding: 0.5rem;
  border-radius: 5rem;
  color: #3D877F;
}

main .about article.about-tekst img {
  display: none;
}

@media (max-width: 700px) {
  main .about .about-afbeelding {
    display: none;
  }
  main .about article.about-tekst img {
    display: flex;
    width: 100%;
  }
  main .about {
    width: 85%;
    margin: 0 auto;
    flex-direction: column;
  }
  main .about .about-tekst {
    margin: 2rem auto;
    width: 100%;
  }
  main .tijdlijn {
    margin: 5rem auto 15rem auto;
  }
  main .tijdlijn .tijdlijn-top-container,
  main .tijdlijn .tijdlijn-lijn {
    display: none;
  }
  main .tijdlijn article {
    flex-direction: column;
    width: 100%;
  }
  main .tijdlijn article .tijdlijn-afbeelding img {
    width: 75%;
  }
  main .tijdlijn article .tijdlijn-tekst1,
  main .tijdlijn article .tijdlijn-afbeelding {
    width: 100%;
  }
  main .tijdlijn .tijdlijn-tekst1:nth-child(odd) {
    margin-right: 0;
  }
  main .tijdlijn .tijdlijn-tekst1:nth-child(even) {
    margin-left: 0;
  }
  main .tijdlijn article:nth-child(even) .tijdlijn-tekst1 {
    order: 1;
  }
  main .tijdlijn article .tijdlijn-tekst1 p {
    margin-bottom: 6rem;
  }
  main .knop-tijdlijn-container-24 { top: 22%; }
  main .knop-tijdlijn-container-20 { top: 51%; }
  main .knop-tijdlijn-container-17 { top: 76%; }
}
</style>
