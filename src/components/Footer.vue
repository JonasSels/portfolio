<template>
  <footer>
    <div class="knop-container">
      <div class="knop-footer">
        <a :href="cv" download><strong>Download CV</strong></a>
      </div>
    </div>

    <div class="footer-slogan">
      <h2>Enlighten your story</h2>
    </div>

    <div class="footer-container">
      <p><a href="/" target="_blank">Privacy Policy</a></p>
      <p>Copyright@ Jonas Sels</p>
      <ul>
        <li><a href="https://www.instagram.com/jonas.sels/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href="https://www.linkedin.com/in/jonas-sels-76a7b3344/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
        <li><a href="https://www.facebook.com/jonas.sels.1" target="_blank"><i class="fa-brands fa-square-facebook"></i></a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { RouterLink } from 'vue-router'
import cv from '@/assets/pdf/JonasSels_cv.pdf'

export default {
  name: 'Footer',
  components: {
    RouterLink
  },
  data() {
    return {
      cv: cv
    }
}}
</script>

<style scoped>
footer {
  width: 100%;
  background-color: #364C49;
  position: relative;
  text-align: center;
}

.footer-container {
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid white;
  color: white;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
}

.footer-container ul {
  display: flex;
  list-style: none;
}

.footer-container ul li a {
  margin-left: 1rem;
  color: white;
  text-decoration: none;
}

.footer-container p a {
  color: white;
}

.knop-container {
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 11rem;
}

.knop-footer {
  width: 8rem;
  height: 8rem;
  border-radius: 5rem;
  background-color: #364C49;
  border: 3px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  flex-wrap: wrap;
}

.knop-footer a {
  padding: 1rem;
  text-align: center;
  word-wrap: break-word;
  color: #F6F3EC;
  display: inline-block;
  text-decoration-color: #F6C985;
  text-decoration-thickness: 2px;
}


.footer-slogan h2 {
  color: white;
  font-weight: bold;
  padding: 4rem 0;
}

@media (max-width: 700px) {
  .knop-container {
    bottom: 11rem;
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-container ul {
    padding-top: 2.5rem;
    margin-bottom: 1rem;
    margin-right: 0;
    padding-right: 0;
    padding-left: 0;
    margin-left: 0;
    font-size: 1.5rem;
    order: 1;
  }

  .footer-container p:first-of-type {
    order: 2;
    padding-bottom: 1rem;
  }

  .footer-container p:last-of-type {
    order: 3;
    padding-bottom: 1rem;
  }

  .footer-slogan {
    display: none;
  }
}
</style>
