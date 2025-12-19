<template>
  <!-- main section for portfolio -->
  <section class="page">
    <!-- title -->
    <h1>Portfolio</h1>
    <h2>Projects</h2>

    <!-- loop through all projects -->
    <div v-for="project in projects" :key="project.id" class="project-block">
      <!-- optional icon if project has one -->
      <img v-if="project.icon" :src="project.icon" :alt="`${project.category} icon`" class="icon" />

      <!-- project title -->
      <h3>{{ project.title }}</h3>
      <!-- project details -->
      <p><strong>Category:</strong> {{ project.category }}</p>
      <p><strong>Year:</strong> {{ project.year }}</p>
      <p>{{ project.description }}</p>

      <!-- list of technologies used -->
      <ul>
        <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
      </ul>

      <!-- main image for project -->
      <img :src="project.image" :alt="project.title" class="main-img" />

      <!-- extra gallery images if available -->
      <div v-if="project.gallery.length" class="scroll-gallery">
        <img
            v-for="(img, index) in project.gallery"
            :key="index"
            :src="img"
            :alt="`${project.title} image ${index+1}`"
        />
      </div>

      <!-- project outcome -->
      <p><em>{{ project.outcome }}</em></p>
    </div>
  </section>
</template>

<script setup lang="ts">
/* import project data from separate file */
import { projects } from "@/data/projects.js";
</script>

<style scoped>
/* overall page padding */
.page {
  padding: 2rem;
}

/* style for each project block */
.project-block {
  display: flex;              /* use flexbox */
  flex-direction: column;     /* stack items on mobile */
  align-items: center;        /* center horizontally */
  text-align: center;         /* center text */
  gap: 1rem;                  /* space between elements */
  margin-bottom: 3rem;        /* space between projects */
}

/* small icon style */
.icon {
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
}

/* main project image style */
.main-img {
  max-width: 280px;           /* limit size */
  border-radius: 10px;        /* rounded corners */
  margin: 0.5rem 0;           /* spacing */
  border: 3px solid #444;     /* dark outline */
}

/* horizontal scroll gallery */
.scroll-gallery {
  display: flex;
  gap: 1rem;
  overflow-x: auto;           /* allow sideways scroll */
  -webkit-overflow-scrolling: touch; /* smooth scroll on mobile */
  scroll-snap-type: x mandatory;     /* snap to images */
  justify-content: center;
}

/* gallery images style */
.scroll-gallery img {
  height: 150px;
  flex-shrink: 0;             /* don’t shrink */
  border-radius: 8px;         /* rounded corners */
  scroll-snap-align: start;   /* snap at start */
  border: 2px solid #444;     /* dark outline */
}

/* desktop layout */
@media (min-width: 768px) {
  .project-block {
    flex-direction: row;      /* side by side layout */
    align-items: center;      /* vertical centering */
    justify-content: center;  /* horizontal centering */
    text-align: left;         /* align text left */
    gap: 3rem;                /* bigger gap */
  }

  /* let text take up space */
  .project-block h3,
  .project-block p,
  .project-block ul {
    flex: 1;
  }

  /* bigger main image on desktop */
  .main-img {
    max-width: 350px;
  }
}
</style>
