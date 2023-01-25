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
<!--            <img :src="skill.image" class="img-thumbnail border-0" alt="">-->
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
<script>
export default {
  name: 'AppSkills',
  data() {
    return {
      skills: [
        //name and image from official sites of the technologies or from google images or wikipedia
        {name: 'HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'},
        {name: 'CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'},
        {name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'},
        {name: 'Vue', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'},
        //bootstrap
        {name: 'Bootstrap', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png'},
          //jquery
        {name: 'jQuery', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg', alt: 'jQuery'},

        {name: 'Python', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'},
        {name: 'C#',  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png'},
          //dotnet core
        {name: '.NET Core', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png'},
        //mysql
        {name: 'MySQL', image: 'https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png'},
          //signalr
        {name: 'Git', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png'},
        {name: 'GitHub', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png'},
        // flutter
        {name: 'Dart', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Dart-logo.png/1200px-Dart-logo.png'},
        {name: 'Flutter', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Google-flutter-logo.png/1200px-Google-flutter-logo.png'},

          //C++
        {name: 'C++', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png'},
          //C programming language
        {name: 'C', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/1200px-The_C_Programming_Language_logo.svg.png'},
        // webrtc
        {name: 'WebRTC', image: 'https://webrtc.github.io/webrtc-org/assets/images/webrtc-logo-horiz-retro-750x140.png'},
      ]
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