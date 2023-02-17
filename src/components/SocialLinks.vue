<template>
  <div class="social-links">
    <div v-for="social in socialLinks" class="social-icon-container">
      <a :class="social.name" :href="social.link" target="_blank">
        <font-awesome-icon :icon="social.icon"/>
      </a>
    </div>
  </div>
</template>
<script>
import {my} from "../store/store";
import {faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";

const SocialLink = (name, link, icon) => {
  return {
    name: name, link: link, icon: icon
  };
}

export default {
  name: 'SocialLinks',
  data() {
    const socials = my.socials;
    return {
      socialLinks: [
        SocialLink('twitter', socials.twitter, faTwitter),
        SocialLink('facebook', socials.facebook, faFacebookF),
        SocialLink('instagram', socials.instagram, faInstagram),
        SocialLink('linkedin', socials.linkedin, faLinkedinIn),
        SocialLink('github', socials.github, faGithub),
      ]
    }
  }
}
</script>