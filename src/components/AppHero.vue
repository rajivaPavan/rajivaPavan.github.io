<script>
//TODO: optimize icons
import TypingList from "./TypingList.vue";
import SocialLinks from "./SocialLinks.vue";



export default {
  name: 'AppHero',
  components: {SocialLinks, TypingList},
  data() {
    return {
      name: 'Pavan Pitiwaduge',
      titles: ['an Engineering student', 'a Developer', 'a Freelancer']
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
#hero {
  width: 100%;
  height: 100vh;
  background: url("../assets/img/hero-bg.jpg") top right no-repeat;
  background-size: cover;
  position: relative;
}

/*for mobile screen*/
@media (max-width: 992px) {
  #hero {
    background: url("../assets/img/hero-bg-mobile.jpg") center center no-repeat;
    background-size: cover;
  }
}

@media (min-width: 992px) {
  #hero {
    padding-left: 160px;
  }
}

#hero:before {
  content: "";
  background: rgba(255, 255, 255, 0.8);
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
  color: #45505b;
}

#hero p {
  color: #45505b;
  margin: 15px 0 0 0;
  font-size: 26px;
  font-family: "Poppins", sans-serif;
}

:deep(#hero p span) {
  color: #0563bb;
  letter-spacing: 1px;
}

:deep(.social-links a) {
  font-size: 24px;
  display: inline-block;
  color: #45505b;
  line-height: 1;
  margin-right: 20px;
  transition: 0.3s;
}

:deep(.social-links a:hover) {
  color: #0563bb;
}

@media (max-width: 992px) {
  #hero {
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
}
</style>