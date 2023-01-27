<template>

  <!-- ======= Header ======= -->
  <AppHeader :sections="sections"/><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <AppHero/><!-- End Hero -->

  <main id="main">
    <component v-for="section in getMainSections()" :is="section.app_component" :key="section.hash"></component>
    <AppFooter/>
  </main><!-- End #main -->


<!--  <div id="preloader"></div>-->
  <a href="#hero" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</template>

<script>


import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import AppContact from "../components/AppContact.vue";
import AppPortfolio from "../components/AppPortfolio.vue";
import AppHero from "../components/AppHero.vue";
import AppSkills from "../components/AppSkills.vue";

export default {
  name: "PageHome",
  components: {AppHeader, AppFooter, AppSkills, AppPortfolio, AppContact, AppHero},
  data() {
    return {
      sections: [
        {name: 'Home', hash: '#hero', icon: 'bx bx-home', app_component: AppHero},
        {name: 'Portfolio', hash: '#portfolio', icon: 'bx bx-book-content', app_component: AppPortfolio},
        {name: 'Skills', hash: '#skills', icon: 'bx bx-server', app_component: AppSkills},
        {name: 'Contact', hash: '#contact', icon: 'bx bx-envelope', app_component: AppContact},
        {name: 'Footer', app_component: AppFooter}
      ]
    }
  },
  methods:{
    getMainSections(){
      //sections except the hero and footer
      return this.sections.slice(1, this.sections.length-1) ;
    },
  }
}
</script>

<style scoped>
#main{
  background-color: var(--color-background);
}
</style>