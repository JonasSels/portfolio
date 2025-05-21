<template>
  <main>
    <div class="achtergrond"></div>
    <div class="contact">
      <section class="contact-text">
        <h1>Heb je een vraag?</h1>
        <p>
          Zoek je iemand die jou kan ondersteunen op het vlak van visueel design en samen met jou een verhaal wil schrijven? Of zie je mij eerder als partner en wil je graag met mij samenwerken?
        </p>
        <p>Neem gerust contact met mij op via telefoon of e-mail!</p>
        <ul>
          <li><i class="fa-regular fa-envelope"></i> Jonas.sels@hotmail.com</li>
          <li><i class="fa-solid fa-phone"></i> 0471 92 74 56</li>
        </ul>
      </section>

      <section class="contact-form">
        <h1>Contactformulier</h1>
        <form action="mailto:jonas.sels@hotmail.com" method="POST" enctype="text/plain">
          <div class="form-group">
            <label for="voornaam">Voornaam:</label>
            <input type="text" id="voornaam" name="voornaam" required />
          </div>
          <div class="form-group">
            <label for="achternaam">Achternaam:</label>
            <input type="text" id="achternaam" name="achternaam" required />
          </div>
          <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="telefoonnummer">Telefoonnummer:</label>
            <input type="tel" id="telefoonnummer" name="telefoonnummer" required />
          </div>
          <div class="form-group">
            <label for="bericht">Bericht:</label>
            <textarea id="bericht" name="bericht" required></textarea>
          </div>
          <div class="form-group">
            <button class="button" type="submit">Verzenden</button>
          </div>
        </form>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>

<style scoped>
.contact {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  width: 85%;
  padding-top: 8rem;
  padding-bottom: 5rem;
  color: #3D877F;
}

.contact .contact-text,
.contact .contact-form {
  width: 50%;
}

.contact-text {
  padding-right: 2rem;
}

.contact-text h1 {
  margin-bottom: 2rem;
}

.contact-text p {
  margin-bottom: 1rem;
}

.contact-text ul li {
  list-style: none;
  padding-top: 2rem;
}

.contact-text ul li i {
  background-color: #3D877F;
  color: white;
  padding: 0.75rem;
  border-radius: 50%;
}

.contact-form {
  padding: 0 2rem;
}

.contact-form h1 {
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #3D877F;
  border-radius: 4px;
}

.form-group:last-child {
  text-align: center;
}

@media (max-width: 800px) {
  .contact {
    flex-direction: column;
  }

  .contact .contact-text,
  .contact .contact-form {
    width: 100%;
  }

  .contact-form {
    padding: 4rem 0;
  }
}
</style>
