<template>
  <section id="skills" class="skills section-bg">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Skills</h2>
      </div>

      <div class="row skills-content justify-content-center">
        <div class="col-12 col-lg-11 skill-categories">
          <div class="skill-category" v-for="category in skillCategories">
            <div class="text-center skill-category-name">{{category.name}}</div>
            <div class="skills">
              <div v-for="skill in category.skills" class="skill">
                <img loading="lazy" :src="skill.image" class="img-thumbnail border-0 skill-image" :alt="skill.name">
                <h6 class="text-center skill-name">{{skill.name}}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {skillCategories} from "../store/skills.js";

export default {
  name: 'AppSkills',
  data() {
    return {
      skillCategories
    }
  },

}
</script>
<style scoped>
.skills-content{
  color: var(--color-text);
}
.skill-categories{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.skill-category{
  margin: 15px 5px;
  border: 3px solid var(--color-border);
  border-radius: 10px;
  padding: 20px 5px 10px 5px;
  position: relative;
  transition: 0.5s ease-in-out;
}
.skill-category .skills{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.skill-category-name{
  margin: 0;
  padding: 0;
  font-family: var(--font-heading);
  font-size: 1.2rem;
  position: absolute;
  top: -10px;
  left: 10px;
  background: var(--color-background);
}
.skill{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}
.skill-image{
  height: 100px;
  margin: 10px;
  object-fit: contain;
}
.skill-name{
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
}

/*Mobile*/
@media (max-width: 767px) {
  .skill-image{
    height: 50px;
  }
}

</style>