<template>
  <main>
    <div class="achtergrond"></div>

    <div class="titel-project">
      <h1>"Bringing stories to life: From idea to reality"</h1>
    </div>

    <div class="filters">
      <div class="eigenprojecten">
        <h2>Persoonlijke projecten</h2>
        <button
          class="filter-button"
          :class="{ active: activeFilter === 'All' }"
          @click="filterProjects('All')"
        >All</button>
        <button
          class="filter-button"
          :class="{ active: activeFilter === 'Branding' }"
          @click="filterProjects('Branding')"
        >Branding</button>
        <button
          class="filter-button"
          :class="{ active: activeFilter === 'Photoshop' }"
          @click="filterProjects('Photoshop')"
        >Photoshop</button>
        <button
          class="filter-button"
          :class="{ active: activeFilter === 'Illustrator' }"
          @click="filterProjects('Illustrator')"
        >Illustrator</button>
      </div>

      <div class="schoolprojecten">
        <h2>Schoolprojecten</h2>
        <button
          class="filter-button"
          :class="{ active: activeFilter === 'Werkplekleren' }"
          @click="filterProjects('Werkplekleren')"
        >Werkplekleren 1</button>
        <button
          class="filter-button"
          :class="{ active: activeFilter === 'Werkplekleren 2' }"
          @click="filterProjects('Werkplekleren 2')"
        >Werkplekleren 2</button>
      </div>
    </div>

    <div class="projects">
      <div
        class="project-wrapper"
        v-for="project in filteredProjects"
        :key="project.title"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
  </main>
</template>

<script>
import projects from '@/data/projects.js'
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'ProjectenView',
  components: {
    ProjectCard
  },
  data() {
    return {
      activeFilter: 'All'
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === 'All') return projects;
      return projects.filter(
        (project) => project.category.toLowerCase() === this.activeFilter.toLowerCase()
      );
    }
  },
  methods: {
    filterProjects(filter) {
      this.activeFilter = filter;
    }
  }
}
</script>

<style scoped>
.titel-project {
  font-family: "Varela Round", sans-serif;
  width: 85%;
  margin: 0 auto;
  padding-top: 8rem;
  color: #3D877F;
  font-size: 1.2rem;
}

.filters {
  padding: 5rem 0;
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.filters h2 {
  margin: 2rem 0;
  color: #3D877F;
}

.filters button {
  background: none;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  border: 3px solid #3D877F;
  color: #3D877F;
  font-weight: bold;
  border-radius: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.filters button::after {
  content: "";
  position: absolute;
  width: 0;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(61, 135, 127, 0.5);
  transition: width 0.3s ease;
  z-index: 0;
}

.filters button:hover::after {
  width: 100%;
}

.filters button:hover {
  cursor: pointer;
  transform: translateY(-2px);
}

.filters button:active,
.filters button:focus,
.filters button.active {
  background-color: #3D877F;
  color: white;
}

.projects {
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 4rem;
}

.project-wrapper {
  flex: 0 1 calc(33.333% - 4rem);
  margin: 2rem 2rem 4rem 2rem;
  transition: transform 0.3s ease;
  transform-origin: center;
}

.project-wrapper:hover {
  transform: scale(1.05);
}

.eigenprojecten button,
.schoolprojecten button {
  margin: 0 1rem 1rem 0;
}

@media (max-width: 800px) {
  .filters {
    flex-direction: column;
  }

  .projects {
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
  }

  .project-wrapper {
    width: 100%;
    max-width: 60%;
    margin: 1rem 0;
  }
}
</style>
