<template>
  <component :is="currentView"/>
</template>

<script>
import Page404 from "./pages/Page404.vue";
import PageHome from "./pages/PageHome.vue";

const routes = {
  '/': PageHome
}

export default {
  data(){
    return {
      currentPath: window.location.hash
    }
  },
  components: {
    PageHome
  },
  computed:{
    currentView() {
      //scroll to page top before changing the view
      window.scrollTo({ top: 0, behavior: 'auto' });

      return routes["/" + this.currentPath.slice(1)] || Page404;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      // TODO pass a reference to the current menu item
      this.currentPath = window.location.hash;
    });
  },
}
</script>
