<template>
  <footer id="footer">
    <div class="container">
      <p>
        Crafted by Pavan Pitiwaduge with Vue Js
      </p>
      <ThemeSwitch/>
    </div>
  </footer>
</template>
<script>
import ThemeSwitch from "./ThemeSwitch.vue";

export default {
  name: 'AppFooter',
  components: {ThemeSwitch},
}
</script>

<style scoped>

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  color: var(--color-heading);
  font-size: 14px;
  text-align: center;
  padding: 30px 0;
}
#footer p {
  font-size: 15px;
  font-style: italic;
  padding: 0 10px;
  margin: 0 0 15px 0;
}

/*Mobile view*/
@media (max-width: 992px) {
  #footer {
    padding: 0;
  }
}

</style>