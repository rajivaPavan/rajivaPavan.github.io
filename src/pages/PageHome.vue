<template>
  <!-- ======= Mobile nav toggle button ======= -->
  <!-- <button type="button" class="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button> -->
  <i class="bi bi-list mobile-nav-toggle d-lg-none"></i>
  <!-- ======= Header ======= -->
  <AppHeader/><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <AppHero/><!-- End Hero -->

  <main id="main">

    <!-- ======= About Section ======= -->
    <AppAbout/><!-- End About Section -->

    <!-- ======= Facts Section ======= -->
    <AppFacts/><!-- End Facts Section -->

    <!-- ======= Skills Section ======= -->
    <AppSkills/><!-- End Skills Section -->

    <!-- ======= Resume Section ======= -->
    <AppResume/><!-- End Resume Section -->

    <!-- ======= Portfolio Section ======= -->
    <AppPortfolio/><!-- End Portfolio Section -->

    <!-- ======= Services Section ======= -->
    <AppServices/><!-- End Services Section -->

    <!-- ======= Testimonials Section ======= -->
    <AppTestimonials/><!-- End Testimonials Section -->

    <!-- ======= Contact Section ======= -->
    <AppContact/><!-- End Contact Section -->

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <AppFooter/><!-- End Footer -->

<!--  <div id="preloader"></div>-->
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</template>

<script>


import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import AppContact from "../components/AppContact.vue";
import AppTestimonials from "../components/AppTestimonials.vue";
import AppServices from "../components/AppServices.vue";
import AppPortfolio from "../components/AppPortfolio.vue";
import AppResume from "../components/AppResume.vue";
import AppHero from "../components/AppHero.vue";
import AppSkills from "../components/AppSkills.vue";
import AppFacts from "../components/AppFacts.vue";
import AppAbout from "../components/AppAbout.vue";

export default {
  name: "PageHome",
  components: {AppHeader, AppFooter, AppAbout,AppFacts, AppSkills,
    AppContact, AppTestimonials, AppServices, AppPortfolio, AppResume, AppHero}
}
</script>

<style scoped>

</style>