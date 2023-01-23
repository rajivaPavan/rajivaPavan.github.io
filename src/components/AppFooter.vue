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

<style>

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  background: #f7f8f9;
  color: #45505b;
  font-size: 14px;
  text-align: center;
  padding: 30px 0;
}

#footer h3 {
  font-size: 36px;
  font-weight: 700;
  position: relative;
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0 0 15px 0;
}

#footer p {
  font-size: 15px;
  font-style: italic;
  padding: 0;
  margin: 0 0 40px 0;
}

:deep(#footer .social-links) {
  margin: 0 0 40px 0;
}

:deep(#footer .social-links a) {
  font-size: 18px;
  display: inline-block;
  background: #0563bb;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

:deep(#footer .social-links a:hover) {
  background: #0678e3;
  color: #fff;
  text-decoration: none;
}
</style>