<template>
  <div class="portfolio-wrap">
    <img :src="item.image" alt="" class="img-fluid img-thumbnail">
    <div class="portfolio-info">
      <h4>{{ item.name }}</h4>
      <p>{{ item.category.name }}</p>
      <div class="portfolio-links">
        <a v-for="link in item.details.links" :href="link.url" target="_blank"><i :class="link.icon"></i></a>
      </div>
      <div v-if="item.details.tech" class="technologies">
        <img v-for="tech in item.details.tech" :src="tech.image" alt="" class="img-thumbnail border-0"
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
<style scoped>
.portfolio-wrap {
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: var(--color-background-mute);
}

.portfolio-wrap::before {
  content: "";
  background: var(--color-background-filter);
  position: absolute;
  left: 30px;
  right: 30px;
  top: 30px;
  bottom: 30px;
  transition: all ease-in-out 0.3s;
  z-index: 2;
  opacity: 0;
}

.portfolio-wrap .portfolio-info {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.portfolio-wrap .portfolio-info::before {
  display: block;
  content: "";
  width: 48px;
  height: 48px;
  position: absolute;
  top: 35px;
  left: 35px;
  border-top: 3px solid var(--color-border-strong);
  border-left: 3px solid var(--color-border-strong);
  transition: all 0.5s ease 0s;
  z-index: 9994;
}

.portfolio-wrap .portfolio-info::after {
  display: block;
  content: "";
  width: 48px;
  height: 48px;
  position: absolute;
  bottom: 35px;
  right: 35px;
  border-bottom: 3px solid var(--color-border-strong);
  border-right: 3px solid var(--color-border-strong);
  transition: all 0.5s ease 0s;
  z-index: 9994;
}
.portfolio-wrap .portfolio-info h4, .portfolio-wrap .portfolio-info p {
  color: var(--color-text);
  background-color: var(--color-background);
  padding: 5px;
  border-radius: 5px;
}

.portfolio-wrap .portfolio-info h4 {
  font-size: 20px;
  font-weight: 600;
}

.portfolio-wrap .portfolio-info p {
  color: var(--color-text);
  background-color: var(--color-background);
  font-size: 14px;
  text-transform: uppercase;
  margin: 0;
}

.portfolio-wrap .portfolio-links a {
  color: var(--color-text);
  margin: 0 2px;
  font-size: 28px;
  display: inline-block;
  transition: 0.3s;
}
.portfolio-wrap .portfolio-links a:hover {
  color: var(--color-primary-bright);
}
.portfolio .portfolio-wrap:hover::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
}

.portfolio-wrap:hover .portfolio-info {
  opacity: 1;
}

.portfolio-wrap:hover .portfolio-info::before {
  top: 15px;
  left: 15px;
}

.portfolio-wrap:hover .portfolio-info::after {
  bottom: 15px;
  right: 15px;
}

.portfolio-wrap .technologies {
  display: inline-block;
  transition: 0.3s;
  background-color: transparent;
}

.portfolio-wrap .technologies img {
  height: 40px;
  margin: 5px;
}
</style>