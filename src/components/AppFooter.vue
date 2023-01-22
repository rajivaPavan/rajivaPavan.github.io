<template>
  <footer id="footer">
    <div class="container">
      <h3>Brandon Johnson</h3>
      <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
      <SocialLinks/>
    </div>
  </footer>
</template>
<script>

import SocialLinks from "./SocialLinks.vue";

export default {
  name: 'AppFooter',
  components: {SocialLinks},
}
</script>