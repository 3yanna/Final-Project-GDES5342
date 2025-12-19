<template>
  <!-- main section for skills -->
  <section class="page">
    <!-- title -->
    <h1>Skills</h1>

    <!-- container for both skill groups -->
    <div class="skills-container">
      <!-- technical skills block -->
      <div class="skills-block">
        <h2>Technical Skills</h2>
        <!-- each skill has a label and a bar showing level -->
        <div class="skill">
          <span>Electronics - Arduino & Circuits</span>
          <div class="bar"><div class="fill" style="width: 80%"></div></div>
        </div>
        <div class="skill">
          <span>Data Collection & Analysis - Excel</span>
          <div class="bar"><div class="fill" style="width: 90%"></div></div>
        </div>
        <div class="skill">
          <span>Coding - C++, Python, MatLab</span>
          <div class="bar"><div class="fill" style="width: 95%"></div></div>
        </div>
        <div class="skill">
          <span>Simulations - Motion, Mold, Machine</span>
          <div class="bar"><div class="fill" style="width: 85%"></div></div>
        </div>
      </div>

      <!-- interpersonal skills block -->
      <div class="skills-block">
        <h2>Interpersonal Skills</h2>
        <div class="skill">
          <span>Collaboration</span>
          <div class="bar"><div class="fill" style="width: 90%"></div></div>
        </div>
        <div class="skill">
          <span>Leadership</span>
          <div class="bar"><div class="fill" style="width: 80%"></div></div>
        </div>
        <div class="skill">
          <span>Communication</span>
          <div class="bar"><div class="fill" style="width: 95%"></div></div>
        </div>
        <div class="skill">
          <span>Problem Solving</span>
          <div class="bar"><div class="fill" style="width: 85%"></div></div>
        </div>
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

/* container for skill blocks */
.skills-container {
  display: flex;
  flex-direction: column; /* stack on mobile */
  gap: 2rem;              /* space between blocks */
  align-items: center;
  justify-content: center;
}

/* each block has a max width */
.skills-block {
  max-width: 400px;
}

/* spacing for each skill */
.skill {
  margin: 0.75rem 0;
}

/* style for skill name */
.skill span {
  display: block;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

/* background bar */
.bar {
  background: #ddd;       /* light gray */
  border-radius: 6px;     /* rounded corners */
  overflow: hidden;       /* hide overflow */
  height: 12px;           /* bar height */
}

/* filled part of bar */
.fill {
  background: #1e3a8a;    /* dark blue */
  height: 100%;
  border-radius: 6px;
}

/* desktop layout */
@media (min-width: 768px) {
  .skills-container {
    flex-direction: row;  /* side by side */
    gap: 4rem;            /* bigger gap */
  }

  .skills-block {
    text-align: left;     /* align text left */
  }
}
</style>
