<template>
  <router-link
    :to="{ name: 'ProjectDetail', params: { slug: project.slug } }"
    class="project-card"
  >
    <div class="card-image" :style="{ backgroundImage: 'url(' + project.image + ')' }">
      <div class="card-overlay">
        <div class="card-text">
          <p class="card-category">{{ project.category }}</p>
          <h3 class="card-title">{{ project.title }}</h3>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.project-card {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  border: none;
  border-radius: 1rem;
  transition: transform 0.3s ease;
  will-change: transform;
  color: inherit;
}

.project-card:hover {
  transform: scale(1.05);
}

.card-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.card-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
}

.card-category {
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.15);
  padding: 0.2rem 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 3px;
  color: #fff;
  margin: 0;
  cursor: pointer;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}
</style>
