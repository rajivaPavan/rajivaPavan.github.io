<template>
  <div class="social-links">
    <div class="social-icon-container" v-for="social in socialLinks">
      <a  :class="social.name" :href="social.link" target="_blank">
        <i :class="social.icon"></i>
      </a>
    </div>
  </div>
</template>
<script>
const SocialLink = (name, link, icon) => {
  return {
    name: name, link: link, icon: icon
  };
}

export default {
  name: 'SocialLinks',
  data() {
    return{
      socialLinks: [
        SocialLink('twitter', 'https://twitter.com/RajivaPavan', 'bx bxl-twitter'),
        SocialLink('facebook', 'https://www.facebook.com/pavan.pitiwaduge', 'bx bxl-facebook'),
        SocialLink('instagram', 'https://www.instagram.com/_pavan.0001/', 'bx bxl-instagram'),
        SocialLink('linkedin', 'https://www.linkedin.com/in/pavan-pitiwaduge/', 'bx bxl-linkedin'),
          SocialLink('github', 'https://github.com/rajivaPavan', 'bx bxl-github'),
      ]
    }
  }
}
</script>