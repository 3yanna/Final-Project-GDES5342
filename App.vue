<template>
  <div>
    <nav class="navbar">
      <router-link to="/">Overview</router-link>
      <router-link to="/experience">Experience</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/extracurriculars">Extracurriculars</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style scoped>
</style>
