<script>
import projects from '@/data/projects.js'

export default {
  name: 'ProjectDetail',
  data() {
    return {
      project: null,
      imageLoaded: false,
    }

  },
  computed: {
    formattedDescription() {
      // Vervang \n door <br> voor HTML-weergave
      return this.project?.description?.replace(/\n/g, '<br>') || '';
    }
  },
  created() {
    const slugParam = this.$route.params.slug;
    this.project = projects.find(p => p.slug === slugParam);
  }
}
</script>

<template>
  <main v-if="project">
    <div class="project-detail">

      <section class="header">
        <div class="container">
        <div class="header-title">
          <h1>{{ project.title }}</h1>
        </div>

        <div class="header-content">
          <div class="header-img">
            <img class="main-image" :class="{ loaded: imageLoaded }" :src="project.image" @load="imageLoaded = true"/>
          </div>

          <div class="header-text">
            <p v-html="formattedDescription"></p>

            <div v-if="project.resources" class="resource-buttons mt-4">
              <a
                v-for="(res, index) in project.resources"
                :key="index"
                :href="res.file"
                :download="res.type === 'download' ? '' : null"
                class="btn btn-outline-light me-2 mb-2"
                target="_blank"
                rel="noopener"
              >
                {{ res.label }}
              </a>
            </div>


          </div>

        </div>
        </div>

        <div class="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>

      </section>

      <div class="container">
      <div class="project-images">
        <img v-for="(img, index) in project.images" :key="index" :src="img" :alt="`${project.title} afbeelding ${index + 1}`"/>
      </div>
    </div>
    </div>
  </main>

  <main v-else>
    <div class="project-detail">
      <h1>Project niet gevonden</h1>
      <p>Het lijkt erop dat dit project niet bestaat of een foutieve link heeft.</p>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: #F6F3EC;
}

.header {
  position: relative;
  background-color: #3D877F;
  height: auto;
  min-height: 80vh;
  color: #F6F3EC;
  padding-bottom: 4rem;
}

.container {
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.header-content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
  padding-bottom: 4rem;
}
.header-title {
  padding-bottom: 4rem;

  h1 {
    display: inline-block;
    padding-bottom: 1rem;
    border-bottom: 2px solid #F6C985;
  }
}

.header-img,
.header-text {
  width: 100%;
}

.header-img img {
  width: 75%;
  max-width: 600px;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.header-img img.loaded {
  opacity: 1;
  transform: translateY(0);
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.wave svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 91px;
}

.wave .shape-fill {
  fill: #F6F3EC;
}

.project-detail {
  color: #3D877F;
}

.project-detail h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.project-detail p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  white-space: pre-line;
  line-height: 1.6;
}

.project-images {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  padding-bottom: 4rem;
}

.project-images img {
  width: calc(50% - 0.5rem); /* Twee naast elkaar met ruimte ertussen */
  height: auto;
  border-radius: 0.5rem;
  object-fit: cover;
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  .header-content {
    flex-wrap: nowrap;
  }

  .header-img,
  .header-text {
    width: 50%;
  }
}

@media (max-width: 767px) {
  .header-img {
    display: flex;
    justify-content: center;
  }

  .header-img img {
    max-width: 100%;
    height: auto;
  }
  .project-images img {
    width: 100%;
  }
}

@media (hover: hover) {
  .header-img img {
    transition: transform 0.5s ease;
  }

  .header-img:hover img {
    transform: scale(1.03);
  }
}


</style>
