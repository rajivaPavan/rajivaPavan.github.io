<template>
  <main>
  <!--    h1 text centered vertically and horizontally in the page-->
    <div class="d-flex justify-content-center align-content-center flex-column" id="content">
      <h1 class="text-center">404</h1>
      <h2 class="text-center">Page not found</h2>
      <img class="mx-auto mt-3" :src="gif" alt="Image also not found 😓" loading="lazy">
    </div>
    <h2 class="text-center mt-auto"><button class="btn"><a href="https://pavanpitiwaduge.me">Back home 🏠🥹</a></button></h2>
  </main>
</template>
<style scoped>
#content{
  height: 85vh;
  color: var(--color-text);
}
h1{
  font-size: 10rem;
}
h2{
  font-size: 3rem;
}
img{
  height: 300px;
  width: 300px;
  object-fit: contain;
}
/*for mobile*/
@media only screen and (max-width: 600px) {
  h1{
    font-size: 4rem;
  }
  h2{
    font-size: 2rem;
  }
}
</style>
<script>
export default {
  name: 'Page404',
  data() {
    return {
      gifs:[
          'https://media.tenor.com/9F_duOWDcrMAAAAM/what-minions.gif',
          'https://media.giphy.com/media/YAlhwn67KT76E/giphy.gif',
          'https://media.giphy.com/media/tJeGZumxDB01q/giphy.gif',
          'https://media.giphy.com/media/a5viI92PAF89q/giphy.gif',
          'https://media.giphy.com/media/3o751XCnKoIwchqtEs/giphy.gif',
          'https://media.giphy.com/media/55d4cDB5zXccQlA8Ig/giphy.gif',
          'https://media.giphy.com/media/X7byz3vE1NRGU/giphy.gif',
      ],
      gif: ''
    }
  },
  mounted() {
    // random gif from the array
    this.gif = this.gifs[Math.floor(Math.random() * this.gifs.length)];
  }
}
</script>