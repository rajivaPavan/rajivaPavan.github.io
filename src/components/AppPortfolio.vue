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
            <AppPortfolioItem :item="item"/>
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
import AppPortfolioItem from "./AppPortfolioItem.vue";
import {imageUrls} from "../store/urls.js";

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
        {image: imageUrls.flutter},
        {image: imageUrls.dotNetCore},
        {image: imageUrls.webrtc},
        {image: imageUrls.signalR},
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
        {image: imageUrls.dotNetCore},]
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
        {image: imageUrls.vue_small},
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
        {image: imageUrls.dotNetCore},
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
        {image: imageUrls.kotlin},
        {image: imageUrls.android},
      ]
    })
  }),
];

export default {
  name: 'AppPortfolio',
  components: {AppPortfolioItem},
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

</style>