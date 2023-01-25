<script>
import SocialLinks from "./SocialLinks.vue";

export default {
  name: 'AppContact',
  components: {SocialLinks},
  data() {
    return {
      contactMethods: [
        {name: 'email', value: 'pavanpitiwaduge@outlook.com', icon: 'bi bi-envelope', contactClass : 'email',
        contact: () => {
          window.open('mailto:' + this.contactMethods[0].value);
        }},
        {name: 'phone', value: '+94 77 540 5059', icon: 'bi bi-phone', contactClass : 'phone', contact: () => {
          window.open('tel:'+ this.contactMethods[1].value);
        }}
          ]
    }
  },
  methods:{

  }
}
</script>
<template>
  <section id="contact" class="contact">
    <div class="container" data-aos="fade-up">
      <div class="d-flex flex-column align-items-center mb-5 justify-content-center" id="freelance">
        <h1 class="text-center"><strong>I'm <span class="available">Available</span> for freelancing</strong></h1>
      </div>

      <div class="section-title">
        <h2>Contact Me</h2>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-5 mb-3 mb-lg-0">
          <div class="info d-flex flex-column px-3 px-lg-2
            flex-lg-row justify-content-lg-between align-items-lg-center">

            <div v-for="method in contactMethods" :class="method.contactClass" class="mb-4 mb-lg-0" @click="method.contact()">
              <i :class="method.icon"></i>
              <h4 class="text-capitalize">{{ method.name }}:</h4>
              <p>{{method.value}}</p>
            </div>

          </div>
        </div>
        <div class="col-lg-6">
          <SocialLinks/>
        </div>
      </div>

    </div>
  </section>
</template>

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

.contact .info i {
  font-size: 20px;
  color: var(--color-primary);
  float: left;
  width: 44px;
  height: 44px;
  background: #eef7ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
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
  font-size: 20px;
  display: inline-block;
  background: var(--color-link);
  color: var(--color-text-in-primary);
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

:deep(.social-links a:hover) {
  background: var(--color-link-hover);
  color: var(--color-text-in-primary);
  text-decoration: none;
}
</style>