<template>
  <section id="portfolio" class="portfolio section-bg">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Portfolio</h2>
        <p>The nature of a portfolio is that it's always a work in progress.</p>
      </div>

      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <ul id="portfolio-filters">
            <li v-for="filter in portfolioFilters" :class="isFilterActive(filter)? 'filter-active':''"
                @click="setFilter(filter)">{{ filter.name }}
            </li>
          </ul>
        </div>
      </div>

      <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
        <div v-for="col in [...Array(3).keys()]" class="col-lg-4 col-md-6">
          <div v-for="item in getPortfolioColItems(col)" class="portfolio-item">
            <div class="portfolio-wrap">
              <img :src="item.image" alt="" class="img-fluid">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SOWeb from '/assets/images/portfolio/web-so.jpeg';
import DocuSignWeb from '/assets/images/portfolio/web-docusign.png';
import KardsApp from '/assets/images/portfolio/app-kards.jpg';
import IntelliSurgery from '/assets/images/portfolio/web-intellisurgery.png';
import TranslatorApp from '/assets/images/portfolio/app-translator.png';
import PortfolioWeb from '/assets/images/portfolio/web-portfolio.png';

class Portfolio {
  static FilterAll = {name: 'All', filter: '*'};
  static FilterApp = {name: 'App', filter: '.filter-app'};
  static FilterWeb = {name: 'Web', filter: '.filter-web'};

  static filter = (item, filter) => {
    if (filter.filter === Portfolio.FilterAll.filter) return true;
    return item.category.filter === filter.filter;
  }
}

class PortfolioItem {
  constructor({name, category, image, details}) {
    this.name = name;
    this.category = category;
    this.image = image;
    this.details = details;
  }
}

class PortfolioItemDetails {
  constructor({links, tech}) {
    this.links = links;
    this.tech = tech;
  }
}

const projects = [
  new PortfolioItem({
    name: 'Kards',
    category: Portfolio.FilterApp,
    image: KardsApp,
    details: new PortfolioItemDetails({
      links: [
        {url: 'https://play.google.com/store/apps/details?id=games.kardsapp.cardgame', icon: 'bx bxl-play-store'},
        {url: 'https://www.kardsapp.games', icon: 'bx bx-world'},
      ],
      tech: [
        //flutter, webrtc, dotnet core, signalr, azure
        {image: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg'},
        {image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png'},
        {image: 'https://webrtc.github.io/webrtc-org/assets/images/webrtc-logo-vert-retro-dist.svg'},
        {image: 'https://img.stackshare.io/service/4013/SignalR-logo.png'}
      ]
    })
  }),
  new PortfolioItem({
    name: 'DocuSign',
    category: Portfolio.FilterWeb,
    image: DocuSignWeb,
    details: new PortfolioItemDetails({
      links: [
        {url: 'https://github.com/rajivaPavan/DocuSignWeb', icon: 'bx bxl-github'},
      ],
      tech: [
        {image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png'},]
    }),
  }),
  new PortfolioItem({
    name: 'Speech Olympiad XV Website',
    category: Portfolio.FilterWeb,
    image: SOWeb,
    details: new PortfolioItemDetails({
      links: [
        {url: 'https://github.com/SpeechOlympiadXV/speecholympiadxv.github.io', icon: 'bx bxl-github'},
        {url: 'https://speecholympiadxv.live/', icon: 'bx bx-world'},
      ],
      tech: [
        //  vue3
        {image: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg'},
      ]
    }),
  }),
  new PortfolioItem({
    name: 'IntelliSurgery',
    category: Portfolio.FilterWeb,
    image: IntelliSurgery,
    details: new PortfolioItemDetails({
      links: [
        {url: 'https://github.com/rajivaPavan/IntelliSurgery', icon: 'bx bxl-github'},
      ],
      tech: [
        //html, css3, bootstrap, javascript, dotnet core
        {image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png'},
      ]
    }),
  }),
  new PortfolioItem({
    name: 'Translator App',
    category: Portfolio.FilterApp,
    image: TranslatorApp,
    details: new PortfolioItemDetails({
      links: [
        {url: 'https://github.com/rajivaPavan/TranslatorApp', icon: 'bx bxl-github'},
      ],
      tech: [
        //kolin, jetpack compose
        {image: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg'},
        {image: 'https://www.vectorlogo.zone/logos/android/android-icon.svg'},
      ]
    })
  }),
  new PortfolioItem({
    name: 'Portfolio Website',
    category: Portfolio.FilterWeb,
    image: PortfolioWeb,
    details: new PortfolioItemDetails({
      links: [
        {url: 'https://github.com/rajivaPavan/rajivaPavan.github.io', icon: 'bx bxl-github'},],
      tech: [
        //vue3, tailwindcss
        {image: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg'},
      ]
    })
  })
];

export default {
  name: 'AppPortfolio',
  data() {
    return {
      currentFilter: Portfolio.FilterAll,
      portfolioFilters: [
        Portfolio.FilterAll,
        Portfolio.FilterApp,
        Portfolio.FilterWeb
      ],
      portfolioItems: projects
    }
  },
  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
    },
    isFilterActive(filter) {
      return this.currentFilter === filter;
    },
    getPortfolioColItems(col) {
      const items = this.portfolioItemsFiltered;
      const colItems = [];
      for (let i = col; i < items.length; i += 3) {
        colItems.push(items[i]);
      }
      return colItems;
    }
  },
  computed: {
    portfolioItemsFiltered() {
      return this.portfolioItems.filter(item => Portfolio.filter(item, this.currentFilter));
    }
  },
}
</script>
<style scoped>
.portfolio .section-title p {
  font-style: italic;
  color: var(--color-text);
}

.portfolio .portfolio-item {
  margin-bottom: 30px;
}

.portfolio #portfolio-filters {
  margin: 0 auto 25px auto;
  list-style: none;
  text-align: center;
  background: var(--color-background);
  border-radius: 50px;
  padding: 2px 15px;
}

.portfolio #portfolio-filters li {
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  color: var(--color-text);
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;
}

.portfolio #portfolio-filters li:hover,
.portfolio #portfolio-filters li.filter-active {
  color: var(--color-link-hover);
}

.portfolio #portfolio-filters li:last-child {
  margin-right: 0;
}

.portfolio .portfolio-wrap {
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: var(--color-background-mute);
}

.portfolio .portfolio-wrap::before {
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

.portfolio .portfolio-wrap .portfolio-info {
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

.portfolio .portfolio-wrap .portfolio-info::before {
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

.portfolio .portfolio-wrap .portfolio-info::after {
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

.portfolio .portfolio-wrap .portfolio-info h4, .portfolio .portfolio-wrap .portfolio-info p {
  color: var(--color-text);
  background-color: var(--color-background);
  padding: 5px;
  border-radius: 5px;
}

.portfolio .portfolio-wrap .portfolio-info h4 {
  font-size: 20px;
  font-weight: 600;
}

.portfolio .portfolio-wrap .portfolio-info p {
  color: var(--color-text);
  background-color: var(--color-background);
  font-size: 14px;
  text-transform: uppercase;
  margin: 0;
}

.portfolio .portfolio-wrap .portfolio-links {
  text-align: center;
  z-index: 4;
}

.portfolio .portfolio-wrap .portfolio-links a {
  color: var(--color-text);
  margin: 0 2px;
  font-size: 28px;
  display: inline-block;
  transition: 0.3s;
}

.portfolio .portfolio-wrap .portfolio-links a:hover {
  color: #148af9;
}

.portfolio .portfolio-wrap:hover::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
}

.portfolio .portfolio-wrap:hover .portfolio-info {
  opacity: 1;
}

.portfolio .portfolio-wrap:hover .portfolio-info::before {
  top: 15px;
  left: 15px;
}

.portfolio .portfolio-wrap:hover .portfolio-info::after {
  bottom: 15px;
  right: 15px;
}

.portfolio .portfolio-wrap .technologies {
  display: inline-block;
  transition: 0.3s;
}

.technologies {
  background-color: transparent;
}

.technologies img {
  height: 40px;
  margin: 5px;
}
</style>