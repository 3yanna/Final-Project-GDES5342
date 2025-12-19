<template>
  <!-- main section of the page -->
  <section class="page">
    <!-- profile picture -->
    <img src="@/assets/myself.jpg" alt="Profile photo" class="profile-img" />

    <!-- text content like intro, jobs, interests -->
    <div class="page-content">
      <!-- headline about me -->
      <h1>Driven to engineer solutions that bridge theory and impact.</h1>
      <!-- school info -->
      <p>Junior in Mechanical Engineering at U of MN</p>
      <p>Minoring in Information Technology</p>

      <!-- current jobs -->
      <h2>Current Occupation</h2>
      <ul>
        <li>Student Lab Worker @ IT U of MN</li>
        <li>Technical Aide @ 3M</li>
      </ul>

      <!-- main interests -->
      <h2>Key Interests</h2>
      <ul>
        <li>Biomedical Innovation</li>
        <li>Hands-On Prototyping</li>
        <li>Design</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* overall page layout */
.page {
  padding: 2rem; /* space inside */
  display: flex; /* use flexbox */
  flex-direction: column; /* stack items on mobile */
  align-items: center; /* center horizontally */
  justify-content: center; /* center vertically */
  text-align: center; /* center text */
  gap: 2rem; /* space between image and text */
}

/* style for profile picture */
.profile-img {
  width: 220px; /* fixed width */
  height: 220px; /* fixed height */
  object-fit: cover; /* crop nicely */
  border-radius: 50%; /* make it round */
  border: 4px solid #444; /* dark outline */
}

/* layout changes when screen is bigger (desktop) */
@media (min-width: 768px) {
  .page {
    flex-direction: row; /* put image and text side by side */
    align-items: center; /* align vertically */
    text-align: left; /* text aligned left */
    gap: 3rem; /* more space between image and text */
  }

  /* limit width of text block */
  .page-content {
    max-width: 600px;
  }
}
</style>
