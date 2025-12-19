<template>
  <!-- main section for extracurriculars -->
  <section class="page">
    <!-- title -->
    <h1>Extracurriculars</h1>

    <!-- first club block -->
    <div class="club-block">
      <!-- club image -->
      <img src="@/assets/swe.jpg" alt="Society of Women Engineers" class="club-img" />
      <!-- club info text -->
      <div class="club-info">
        <h2>Society of Women Engineers</h2>
        <p>Professional Development Committee</p>
        <p>Planned and lead events such as resume building, finances, networking, etc.</p>
      </div>
    </div>

    <!-- second club block -->
    <div class="club-block">
      <img src="@/assets/ambassadors.jpg" alt="Mechanical Engineering Ambassadors" class="club-img" />
      <div class="club-info">
        <h2>Mechanical Engineering Ambassadors</h2>
        <p>Recruitment Chair & Lead Ambassador</p>
        <p>Presented in various settings to recruit peers into the club, created and presented STEM modules and activities to K-12 students.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* empty for now, no logic needed */
</script>

<style scoped>
/* overall page style */
.page {
  padding: 2rem;
  text-align: center;
}

/* style for each club block */
.club-block {
  display: flex;              /* use flexbox */
  flex-direction: column;     /* stack items on mobile */
  align-items: center;        /* center horizontally */
  gap: 1rem;                  /* space between image and text */
  margin-bottom: 2.5rem;      /* space between blocks */
}

/* club image style */
.club-img {
  max-width: 280px;           /* limit size */
  height: auto;               /* keep aspect ratio */
  border-radius: 10px;        /* rounded corners */
  border: 3px solid #444;     /* dark outline */
}

/* club info text block */
.club-info {
  max-width: 500px;
}

/* desktop layout */
@media (min-width: 768px) {
  .club-block {
    flex-direction: row;       /* put image and text side by side */
    align-items: center;       /* vertical centering */
    justify-content: center;   /* horizontal centering */
    text-align: left;          /* align text left */
    gap: 3rem;                 /* bigger gap */
  }

  /* let text take up space */
  .club-info {
    flex: 1;
  }
}
</style>
