<template>
  <component :is="currentView"/>
</template>

<script>
import Page404 from "./pages/Page404.vue";
import PageHome from "./pages/PageHome.vue";

const routes = {
  '/': PageHome
}

const getCurrentPath = ()=>{
  return window.location.pathname;
}

export default {
  data(){
    return {
      currentPath: getCurrentPath()
    }
  },
  components: {
    PageHome
  },
  computed:{
    currentView() {
      const currentPath = this.currentPath.slice(1);
      return routes["/" + currentPath] || Page404;
    },
  },
  mounted() {
    // watch for changes in the current path
    this.$watch(
        () => getCurrentPath(),
        (newValue) => {
          if(newValue !== this.currentPath)
           this.currentPath = newValue;
        }
    );
  },
}
</script>
