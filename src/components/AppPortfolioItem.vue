<template>
  <div class="md:flex">
    <div class="w-full md:w-2/5">
      <div class="portfolio-item-wrap aspect-video mockup-browser border border-base-300">
        <div class="mockup-browser-toolbar">
          <div class="input border border-base-300"><a class="link-light text-decoration-none"
                                                      target="_blank" :href="item.link.url">{{item.link.url}}</a></div>
        </div>
        <img :src="item.image" :alt="item.name" class="img-fluid" loading="lazy">
        <div class="portfolio-info">
          <p>{{ item.category.name}}</p>
          <div class="portfolio-links">
            <a v-for="link in item.details.links" :href="link.url" target="_blank">
              <font-awesome-icon :icon="link.icon"/>
            </a>
          </div>
          <div v-if="item.details.tech" class="technologies">
                <img v-for="tech in item.details.tech" :src="tech.image" alt="" class="img-thumbnail border-0"
                     loading="lazy">
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio-info px-2 py-3 md:my-2 md:mx-3 flex flex-column justify-center">
      <h4>{{item.name}}</h4>
      <p class="line-clamp-5 md:line-clamp-3 text-white-60" style="font-size: 0.9em;">
        {{item.description}}
      </p>
      <div class="portfolio-links mb-2">
        <a class="mr-1" v-for="link in item.details.links" :href="link.url" target="_blank">
          <font-awesome-icon :icon="link.icon" class="fs-4 text-white-50"/>
        </a>
      </div>
      <div v-if="item.details.tech" class="technologies max-h-10 flex">
        <img v-for="tech in item.details.tech" :src="tech.image" alt="" class="w-10 mr-1
          img-thumbnail border-0"
             loading="lazy">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppPortfolioItem',
  props: {
    item: {}
  }
}
</script>
<style lang="scss" scoped>

//hide .topic in desktop
.text{
  color: var(--color-text);
  background-color: var(--color-background);
}
.topic{
  @extend .text;
  margin-top: 5px;
  @media (min-width: 768px){
    display: none;
  }
}
.portfolio-item-wrap {
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;

  .mockup-browser-toolbar{
    color: var(--color-text);
  }
}
.portfolio-info{
  color: var(--color-text);
}
</style>