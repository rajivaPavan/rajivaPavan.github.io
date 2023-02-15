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
import {my} from "../store/store";

const SocialLink = (name, link, icon) => {
  return {
    name: name, link: link, icon: icon
  };
}

export default {
  name: 'SocialLinks',
  data() {
    const socials = my.socials;
    return{
      socialLinks: [
        SocialLink('twitter', socials.twitter, 'bx bxl-twitter'),
        SocialLink('facebook', socials.facebook, 'bx bxl-facebook'),
        SocialLink('instagram', socials.instagram, 'bx bxl-instagram'),
        SocialLink('linkedin', socials.linkedin, 'bx bxl-linkedin'),
          SocialLink('github', socials.github, 'bx bxl-github'),
      ]
    }
  }
}
</script>