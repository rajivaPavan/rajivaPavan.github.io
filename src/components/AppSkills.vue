<template>
  <section id="skills" class="skills section-bg">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Skills</h2>
        <p></p>
      </div>

      <div class="row skills-content justify-content-center">

        <div class="col-12 col-lg-11 skills-images">
          <div v-for="skill in skills">
            <img :src="skill.image" class="img-thumbnail border-0" :alt="skill.name">
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
<script>
import {skills} from "../store/skills.js";

export default {
  name: 'AppSkills',
  data() {
    return {
      skills
    }
  },

}
</script>
<style scoped>

.skills-images{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.skills-images img{
  height: 100px;
  margin: 10px;
  object-fit: contain;
}

/*Mobile*/
@media (max-width: 767px) {
  .skills-images img{
    height: 50px;
    margin: 5px;
  }
}

</style>