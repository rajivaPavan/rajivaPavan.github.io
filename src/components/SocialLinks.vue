<template>
  <div class="social-links">
    <div v-for="social in socialLinks" class="social-icon-container">
      <a :class="social.name"  :href="social.link" target="_blank">
        <img v-if="colored" class="hover:scale-125 transition-transform duration-300" :src="social.icon" :alt="social.link">
        <font-awesome-icon class="hover:scale-[2] transition-transform duration-300" v-else :icon="social.icon"/>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.social-icon-container{
  a{
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
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  svg{
    transition: all 0.2s ease-in-out;
  }
  svg:hover{
    color: var(--color-link-hover);
  }
}
</style>
<script>
import {my} from "../store/store";
import {faFacebookF, faGithub, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {imageUrls} from "../store/urls";

const SocialLink = (name, link, icon) => {
  return {
    name: name, link: link, icon: icon
  };
}

export default {
  name: 'SocialLinks',
  props:{
    colored: false
  },
  data() {
    const socials = my.socials;
    if(this.colored)
    return {
      socialLinks: [
        SocialLink('twitter', socials.twitter, imageUrls.twitter),
        SocialLink('facebook', socials.facebook, imageUrls.facebook),
        SocialLink('instagram', socials.instagram, imageUrls.instagram),
        SocialLink('linkedin', socials.linkedin, imageUrls.linkedin),
        SocialLink('github', socials.github, imageUrls.githubSocial),
      ]
    }
    else{
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
}
</script>