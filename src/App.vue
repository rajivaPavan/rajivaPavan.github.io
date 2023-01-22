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
      const currentPath = this.currentPath.slice(1); //remove the leading slash

      if(currentPath.startsWith('#')){
        //scroll to section with id
        const section = document.getElementById(currentPath.slice(1)); //remove the leading hash
        if(section){
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }

      //scroll to page top before changing the view
      window.scrollTo({ top: 0, behavior: 'auto' });

      return routes["/" + currentPath] || Page404;
    },
  },
  mounted() {
    // watch for changes in the current path
    this.$watch(
        () => getCurrentPath(),
        (newValue) => {
           this.currentPath = newValue;
        }
    );
  },
}
</script>
