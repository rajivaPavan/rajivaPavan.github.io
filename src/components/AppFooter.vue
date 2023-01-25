<template>
  <footer id="footer">
    <div class="container">
<!--      <h3>Pavan Pitiwaduge</h3>-->
      <p>
        "When your intention is pure, no matter how you are judged, you will always get what you deserve.."
      </p>
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

<style scoped>

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  background: var(--color-background);
  color: var(--color-heading);
  font-size: 14px;
  text-align: center;
  padding: 30px 0;
}
#footer p {
  font-size: 15px;
  font-style: italic;
  padding: 0 10px;
  margin: 0 0 40px 0;
}

/*Mobile view*/
@media (max-width: 992px) {
  #footer {
    padding: 0;
  }
}
</style>