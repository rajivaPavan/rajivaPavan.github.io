<template>

  <!-- ======= Header ======= -->
  <AppHeader/><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <AppHero/><!-- End Hero -->

  <main id="main">

    <AppPortfolio/>

    <AppServices/>

<!--    <AppResume/>-->

    <AppContact/>
    <AppFooter/>
  </main><!-- End #main -->


<!--  <div id="preloader"></div>-->
  <a href="#hero" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
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
#main{
  background-color: var(--color-background);
}
</style>