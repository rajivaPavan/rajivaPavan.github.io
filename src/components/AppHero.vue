<script>
import TypingList from "./TypingList.vue";
import SocialLinks from "./SocialLinks.vue";
import {my} from "../store/store.js";

export default {
  name: 'AppHero',
  components: {SocialLinks, TypingList},
  data() {
    return {
      name: my.name,
      titles: my.titles
    }
  },
  methods: {
    getTitles() {
      return this.titles;
    }
  }
}
</script>
<template>
  <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>{{ this.name }}</h1>
      <p class="mb-4">I'm
        <TypingList :words="getTitles()"/>
      </p>
      <SocialLinks/>
    </div>
  </section>
</template>

<style scoped>
:root{
  --typing-text-color: var(--color-link-hover);
}

#hero {
  width: 100%;
  height: 100vh;
  background: url("../assets/img/hero-bg.jpg") top right no-repeat;
  background-size: cover;
  position: relative;
}

@media (min-width: 992px) {
  #hero {
    padding-left: 160px;
  }
}

#hero:before {
  content: "";
  background: var(--color-background);
  opacity: 0.8;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

#hero h1 {
  margin: 0;
  font-size: 64px;
  font-weight: 700;
  line-height: 56px;
  color:var(--color-heading);
}

#hero p {
  color: var(--color-heading);
  margin: 15px 0 0 0;
  font-size: 26px;
  font-family: "Poppins", sans-serif;
}

:deep(span){
  color: var(--typing-text-color);
  letter-spacing: 1px;
}
:deep(.social-links) {
  display: flex;
}
:deep(.social-links a) {
  font-size: 24px;
  display: inline-block;
  color: var(--color-heading);
  line-height: 1;
  margin-right: 20px;
  transition: none;
}
:deep(.social-links a:hover) {
  color: var(--color-link-hover);
}

@media (max-width: 992px) {
  #hero {
    background: url("../assets/img/hero-bg-mobile.jpg") center center no-repeat;
    background-size: cover;
    text-align: center;
  }
  #hero h1 {
    font-size: 32px;
    line-height: 36px;
  }
  #hero p {
    margin-top: 10px;
    font-size: 20px;
    line-height: 24px;
  }
  :deep(.social-links) {
    display: flex;
    justify-content: center;
  }
  :deep(.social-links a) {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>