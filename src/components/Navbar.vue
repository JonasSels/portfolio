<template>
  <nav>
    <div class="nav-container">
      <h1><RouterLink to="/">Jonas Sels</RouterLink></h1>

      <div class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul class="nav-links" :class="{ show: isMenuOpen }">
        <li><RouterLink to="/" exact-active-class="active">Home</RouterLink></li>
        <li><RouterLink to="/about" exact-active-class="active">Over mij</RouterLink></li>
        <li><RouterLink to="/projecten" exact-active-class="active">Projecten</RouterLink></li>
        <li><RouterLink to="/contact" exact-active-class="active">Contact</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'Navbar',
  components: {
    RouterLink
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style scoped>
nav {
  background-color: #364C49;
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 100;
}

nav .nav-container {
  width: 85%;
  margin: 0 auto;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

nav .nav-container h1 a {
  font-family: "Pacifico", sans-serif;
  font-size: 2rem;
  text-decoration: none;
  color: white;
}

/* Hamburger menu */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger span {
  height: 3px;
  width: 25px;
  background: white;
  margin: 4px;
  border-radius: 5px;
}

/* Actieve hamburger (kruisje) */
.hamburger.active span {
  background: white;
  transition: transform 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
  width: 30px;
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
  width: 30px;
}

/* Nav links */
.nav-links {
  display: flex;
  list-style: none;
  align-items: center;
}

.nav-links li {
  margin-left: 2rem;
}

.nav-links li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.nav-links li a.active {
  border-bottom: 2px solid white;
}

/* Responsive */
@media (max-width: 700px) {
  .nav-container {
    flex-direction: row;
    justify-content: space-between;
  }

  .hamburger {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #364C49;
    padding-top: 1.5rem;
    position: absolute;
    top: 5rem;
    left: 0;
  }

  .nav-links.show {
    display: flex;
  }

  .nav-links li {
    margin: 1.5rem 0;
    width: 100%;
    text-align: center;
  }
}
</style>
