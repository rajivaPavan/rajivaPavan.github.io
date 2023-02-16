<template>

  <!-- ======= Header ======= -->
  <AppHeader :sections="sections"/><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <AppHero/><!-- End Hero -->

  <main id="main">
    <component :is="section.app_component" v-for="section in getMainSections()" :key="section.hash"></component>
    <AppFooter/>
  </main><!-- End #main -->


  <AppPreloader/>
  <a class="back-to-top d-flex align-items-center justify-content-center" href="#hero"><font-awesome-icon
      icon="fas fa-arrow-up"/></a>
</template>

<script>
import {markRaw} from "vue";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import AppContact from "../components/AppContact.vue";
import AppPortfolio from "../components/AppPortfolio.vue";
import AppHero from "../components/AppHero.vue";
import AppSkills from "../components/AppSkills.vue";
import AppPreloader from "../components/AppPreloader.vue";
import {faBriefcase, faHome, faLaptopCode, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

const reactiveSections = [
  {name: 'Home', hash: '#hero', icon: faHome, app_component: AppHero},
  {name: 'Portfolio', hash: '#portfolio', icon: faBriefcase, app_component: AppPortfolio},
  {name: 'Skills', hash: '#skills', icon: faLaptopCode, app_component: AppSkills},
  {name: 'Contact', hash: '#contact', icon: faPhoneAlt, app_component: AppContact},
  {name: 'Footer', app_component: AppFooter}
];

const sections = reactiveSections.map(section => {
  return markRaw(section);
});

export default {
  name: "PageHome",
  components: {AppPreloader, AppHeader, AppFooter, AppHero},
  data() {
    return {
      sections
    }
  },
  methods: {
    getMainSections() {
      //sections except the hero and footer
      return this.sections.slice(1, this.sections.length - 1);
    },
  },
  mounted() {
    /**
     * Back to top button
     */
    let backToTop = document.querySelector('.back-to-top')
    if (backToTop) {
      const toggleBackToTop = () => {
        if (window.scrollY > 100) {
          backToTop.classList.add('active')
        } else {
          backToTop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBackToTop)
      document.addEventListener('scroll', toggleBackToTop)
    }
  }
}
</script>

<style scoped>
#main {
  background-color: var(--color-background);
}
/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: #0563bb;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
  color: #fff;
}

.back-to-top i {
  font-size: 28px;
  line-height: 0;
}

.back-to-top:hover {
  background: #0678e3;
  color: #fff;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}
</style>