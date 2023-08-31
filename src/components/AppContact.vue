<template>
  <section id="contact" class="contact">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Contact Me</h2>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-5 mb-3 mb-lg-0">
          <div class="info d-flex flex-column px-3 px-lg-2
            flex-lg-row justify-content-lg-between align-items-lg-center">

            <div v-for="method in contactMethods" :class="method.contactClass" class="mb-4 mb-lg-0" @click="method.contact()">
              <div class="ci-container"><font-awesome-icon :icon="method.icon" class="contact-icon"/></div>
              <h4 class="text-capitalize">{{ method.name }}:</h4>
              <p>{{method.value}}</p>
            </div>

          </div>
        </div>
        <div class="col-lg-6">
          <SocialLinks colored="true"/>
        </div>
      </div>

    </div>
  </section>
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
        {name: 'phone', value: my.phone, icon: faPhone, contactClass : 'phone', contact: () => {
          window.open('tel:'+ this.contactMethods[1].value);
        }}
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
}
/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact .info {
  width: 100%;
}

.contact .info .ci-container {
  color: var(--color-primary);
  float: left;
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

.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--color-text);
}

.contact .info p {
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
  width: 40px;
  height: 40px;
  /*border: 1px solid var(--color-border);*/
  background-color: transparent !important;
}

</style>