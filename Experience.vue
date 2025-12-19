<template>
  <!-- main section for experience -->
  <section class="page">
    <!-- title -->
    <h1>Experience</h1>

    <!-- list of courses -->
    <h2>Coursework</h2>
    <ul>
      <li>Deformable Body Mechanics</li>
      <li>Material Properties</li>
      <li>Design and Manufacturing</li>
      <li>Electronics</li>
      <li>Thermodynamics</li>
      <li>Fluid Mechanics</li>
      <li>Heat Transfer</li>
      <li>Graphic Design (UI and UX)</li>
    </ul>

    <!-- projects section -->
    <h2>Projects</h2>
    <div class="project-item">
      <!-- project name -->
      <p>Automatic Thread Twisting Robot</p>
      <!-- project image -->
      <img src="@/assets/thread.jpg" alt="Automatic Thread Twisting Robot" />
    </div>

    <div class="project-item">
      <p>Filipino Recipes Website</p>
      <img src="@/assets/filipino.png" alt="Filipino Recipes Website" />
    </div>

    <!-- leadership section -->
    <h2>Leadership</h2>
    <div class="leadership-item">
      <p>Mechanical Engineering Ambassadors | Recruitment Chair & Lead Ambassador</p>
      <img src="@/assets/ambassadors.jpg" alt="Mechanical Engineering Ambassadors" />
    </div>

    <div class="leadership-item">
      <p>Society of Women Engineers | Professional Development Committee</p>
      <img src="@/assets/swe.jpg" alt="Society of Women Engineers" />
    </div>
  </section>
</template>

<script setup lang="ts">
/* keep this block even if no logic is needed */
</script>

<style scoped>
/* overall page padding */
.page {
  padding: 2rem;
}

/* style for project and leadership items */
.project-item,
.leadership-item {
  display: flex;              /* use flexbox */
  flex-direction: column;     /* stack items on mobile */
  align-items: center;        /* center horizontally */
  text-align: center;         /* center text */
  gap: 1rem;                  /* space between text and image */
  margin-bottom: 2.5rem;      /* space between items */
}

/* image styles */
.project-item img,
.leadership-item img {
  max-width: 300px;           /* limit size */
  height: auto;               /* keep aspect ratio */
  border-radius: 10px;        /* rounded corners */
  border: 3px solid #444;     /* dark outline */
}

/* desktop layout */
@media (min-width: 768px) {
  .project-item,
  .leadership-item {
    flex-direction: row-reverse; /* put text left, image right */
    align-items: center;         /* vertical centering */
    justify-content: center;     /* horizontal centering */
    text-align: left;            /* align text left */
    gap: 3rem;                   /* bigger gap */
  }

  /* bigger images on desktop */
  .project-item img,
  .leadership-item img {
    max-width: 350px;
  }

  /* let text take up space */
  .project-item p,
  .leadership-item p {
    flex: 1;
  }
}
</style>
