<template>
  <!-- main section for contact -->
  <section class="page">
    <!-- title -->
    <h1>Contact Me</h1>

    <!-- contact info list -->
    <ul class="contact-list">
      <li>
        <strong>Email:</strong>
        <!-- email link -->
        <a href="mailto:eyanna.corinne@gmail.com">eyanna.corinne@gmail.com</a>
      </li>
      <li>
        <strong>LinkedIn:</strong>
        <!-- linkedin profile link -->
        <a href="https://linkedin.com/in/eyanna-dizon" target="_blank">linkedin.com/in/eyanna-dizon</a>
      </li>
      <li>
        <strong>Phone:</strong>
        <!-- phone link -->
        <a href="tel:+16513343236">(651) 334-3236</a>
      </li>
    </ul>

    <!-- contact form -->
    <form class="contact-form" @submit.prevent="submitForm">
      <!-- name field -->
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" v-model="name" type="text" required />
      </div>

      <!-- email field -->
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" required />
      </div>

      <!-- message field -->
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="message" rows="4" required></textarea>
      </div>

      <!-- submit button -->
      <button type="submit">Send Message</button>
    </form>
  </section>
</template>

<script setup lang="ts">
/* using vue's ref to store form data */
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

function submitForm() {
  // just log the data for now
  console.log("Form submitted:", { name: name.value, email: email.value, message: message.value });
  alert("Thank you for your message! (Form submission logic goes here)");
}
</script>

<style scoped>
/* overall page style */
.page {
  padding: 2rem;
  text-align: center;
}

/* contact info list style */
.contact-list {
  list-style: none;           /* remove bullets */
  padding: 0;
  margin: 1rem 0 2rem;
  display: flex;
  flex-direction: column;     /* stack on mobile */
  gap: 1rem;                  /* space between items */
  align-items: center;
}

/* links style */
.contact-list a {
  color: #1e3a8a;             /* dark blue */
  text-decoration: none;
  margin-left: 0.5rem;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
}

/* hover effect for links */
.contact-list a:hover {
  border-color: #444;         /* charcoal underline */
}

/* contact form style */
.contact-form {
  max-width: 500px;           /* limit width */
  margin: 0 auto;             /* center form */
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* each form group style */
.form-group {
  display: flex;
  flex-direction: column;
}

/* label style */
label {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

/* input and textarea style */
input,
textarea {
  padding: 0.5rem;
  border: 2px solid #444;
  border-radius: 6px;
  font-size: 1rem;
}

/* button style */
button {
  background: #1e3a8a;         /* dark blue */
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

/* button hover effect */
button:hover {
  background: #162d6a;         /* darker blue */
}

/* desktop layout */
@media (min-width: 768px) {
  .contact-list {
    flex-direction: row;       /* side by side */
    justify-content: center;
    gap: 3rem;
  }
}
</style>
