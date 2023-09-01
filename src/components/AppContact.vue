<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">

            <div class="section-title">
              <h2>Contact Me</h2>
            </div>

            <div class="info d-flex justify-content-center">
              <div v-for="method in contactMethods"
                   class="mb-2" role="button" @click="method.contact()">
                <div class="ci-container"><font-awesome-icon :icon="method.icon" class="contact-icon"/></div>
                <div class="name text-capitalize">{{ method.name }}:</div>
                <div class="value">{{method.value}}</div>
              </div>
            </div>

          </div>
        </section>
      </div>
      <div class="col-12 col-md-6">
        <section id="socials" class="socials">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Socials</h2>
            </div>
            <SocialLinks colored="true"/>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import SocialLinks from "./SocialLinks.vue";
import {my} from "../store/store";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

export default {
  name: 'AppContact',
  components: {SocialLinks},
  data() {
    return {
      contactMethods: [
        {name: 'email', value: my.email, icon: faEnvelope, contactClass : 'email',
        contact: () => {
          window.open('mailto:' + this.contactMethods[0].value);
        }},
          ]
    }
  },
}
</script>


<style scoped>
#freelance{
  background: url("../assets/img/freelance.jpg") right 66% no-repeat;
  background-size: cover;
  opacity: 0.95;
  height: 250px;
}
#freelance h1{
  color: var(--color-heading);
  opacity: 1 !important;
}
#freelance span{
  color: var(--color-inv-text);
}
@media (max-width: 992px) {
  #freelance{
    height: 175px;
  }
  section{
    padding-block: 1rem;
  }
  section:last-of-type{
    margin-bottom: 2rem;
  }
}
/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact .info .ci-container {
  color: var(--color-primary);
  float: left;
  transform: translateY(25%);
  width: 44px;
  height: 44px;
  background: var(--vt-c-white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid var(--color-border);
}
.contact-icon{
  font-size: 20px;
  color: var(--color-primary);
}

.contact .info .name {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--color-text);
}

.contact .info .value {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: #728394;
}

.contact .info div:hover i{
  background: var(--color-primary-bright);
  color: var(--color-text-in-primary);
}

:deep(.social-links) {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
}
:deep(.social-icon-container){
  display: flex;
  flex-direction: column;
  justify-content: center;
}
:deep(.social-links a) {
  padding: 0 !important;
  margin: 0 !important;
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  /*border: 1px solid var(--color-border);*/
  background-color: transparent !important;
}

</style>