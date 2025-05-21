<template>
  <main>
    <div class="achtergrond"></div>

    <section id="inleiding-container">
      <div id="inleiding">
        <section id="home-tekst">
          <h1 :class="{ visible: showTitle }" class="fade-title">
            "Enlighten your story"
          </h1>
          <p>
            Als leidraad in mijn werk hecht ik waarde aan het aangaan van warme en betekenisvolle relaties met mensen. Door deze relaties leer ik hun unieke verhalen kennen en breng ik deze tot leven als designer. Samen creëren en visualiseren we hun verhaal op een manier die recht doet aan hun visie en wensen, waardoor we een authentiek en krachtig verhaal kunnen vormgeven.
          </p>
          <button class="button">
            <RouterLink to="/contact">Get in touch</RouterLink>
          </button>
        </section>

        <section class="home-afbeelding">
          <img src="@/assets/images/profielfoto.png" alt="profielfoto" />
        </section>
      </div>
    </section>

    <div id="mobiele-inhoud">
      <p>
        Als leidraad in mijn werk hecht ik waarde aan het aangaan van warme en betekenisvolle relaties met mensen. Door deze relaties leer ik hun unieke verhalen kennen en breng ik deze tot leven als designer. Samen creëren en visualiseren we hun verhaal op een manier die recht doet aan hun visie en wensen, waardoor we een authentiek en krachtig verhaal kunnen vormgeven.
      </p>
      <button class="button">
        <RouterLink to="/contact">Get in touch</RouterLink>
      </button>
    </div>

    <div id="titel">
      <h2>Uitgelichte projecten</h2>
    </div>

    <div class="container">
    <section id="home-projecten">
      <Projectcard
        v-for="(project, index) in featuredProjects"
        :key="index"
        :project="project"
      />
    </section>
    </div>

    <div id="button-projecten">
      <button class="button">
        <RouterLink to="/projecten">Meer projecten zien?</RouterLink>
      </button>
    </div>
  </main>
</template>

<script>
import { RouterLink } from 'vue-router'
import projects from '@/data/projects.js'
import Projectcard from '@/components/Projectcard.vue'

export default {
  name: 'HomeView',
  components: {
    RouterLink,
    Projectcard
  },
  data() {
    return {
      showTitle: false,
      featuredProjects: projects.slice(0, 3)
    }
  },
  mounted() {
    setTimeout(() => {
      this.showTitle = true
    }, 500)
  }
}
</script>

<style scoped>
.fade-title {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 1s ease, transform 1s ease;
}

.fade-title.visible {
  opacity: 1;
  transform: translateY(0);
}

#mobiele-inhoud p,
#mobiele-inhoud button {
  display: none;
}

main section#inleiding-container {
  background-color: #F6F3EC;
}

main #inleiding {
  width: 85%;
  margin: 0 auto;
  display: flex;
  padding-top: 5rem;
}

main #inleiding section#home-tekst {
  width: 50%;
  color: #3D877F;
}

main #inleiding section#home-tekst h1 {
  font-family: "Varela Round", sans-serif;
  font-size: 4rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

main #inleiding section.home-afbeelding {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

main #inleiding section.home-afbeelding img {
  max-width: 75%;
  height: auto;
}

#home-projecten {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-between;
}


#titel {
  width: 85%;
  margin: 0 auto;
}

#titel h2 {
  color: #3D877F;
  margin: 4rem 0 2rem 0;
}

main #inleiding section#home-tekst button.button {
  margin: 2rem 0;
}

#button-projecten {
  text-align: center;
}

#button-projecten button {
  margin-bottom: 10rem;
}

#home-projecten .project-card {
  flex: 1 1 calc(33.333% - 1.5rem);
  max-width: calc(33.333% - 1.5rem);
  margin-bottom: 2rem;
}


/* 📱 Responsive styles */
@media (max-width: 800px) {
  main #inleiding {
    flex-direction: column;
    align-items: center;
  }

  main #inleiding section#home-tekst,
  main #inleiding section.home-afbeelding {
    width: 100%;
  }

  main #inleiding section#home-tekst h1 {
    order: 1;
    font-size: 3rem;
  }

  main #inleiding section#home-tekst p,
  main #inleiding section#home-tekst button {
    display: none;
  }

  #mobiele-inhoud p,
  #mobiele-inhoud button {
    display: block;
    margin-bottom: 2rem;
  }

  #mobiele-inhoud {
    width: 85%;
    margin: 2rem auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #home-projecten {
    flex-direction: column;
    align-items: center;
  }

  #home-projecten .project-card {
    max-width: 75%;
    width: 100%;
  }
}
</style>
