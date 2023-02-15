<template>
  <section id="portfolio" class="portfolio section-bg" ref="portfolio">
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

      <div class="portfolio-container-wrapper" data-aos="fade-up" data-aos-delay="200">
        <TransitionGroup name="fade" tag="div"
                          id="portfolio-container">
          <div v-for="item in portfolioItemsFiltered" :key="item" class="portfolio-item">
            <AppPortfolioItem :item="item"/>
          </div>
        </TransitionGroup>
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
import AppPortfolioItem from "./AppPortfolioItem.vue";
import {imageUrls} from "../store/urls.js";
import {Portfolio, PortfolioItem, PortfolioItemDetails} from "../entities/portfolio.js";

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
      let arr= this.portfolioItems.filter(item => Portfolio.filter(item, this.currentFilter));
      return [...arr, ...arr, ...arr];
    }
  },
}
</script>
<style lang="scss" scoped>
// Define color variables
$color-background: var(--color-background);
$color-border: var(--color-border);
$color-primary-bright: var(--color-primary-bright);
$color-text: var(--color-text);
$color-link-hover: var(--color-link-hover);

.portfolio {
  .section-title {
    p {
      font-style: italic;
      color: $color-text;
    }
  }

  #portfolio-filters {
    margin: 0 auto 25px auto;
    list-style: none;
    text-align: center;
    background: $color-background;
    border-radius: 50px;
    padding: 2px 15px;

    li {
      cursor: pointer;
      display: inline-block;
      padding: 10px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      text-transform: uppercase;
      color: $color-text;
      margin-bottom: 5px;
      transition: all 0.3s ease-in-out;

      &:hover,
      &.filter-active {
        color: $color-link-hover;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .portfolio-container-wrapper{
    border-radius: 10px;
    border: 1px solid $color-border;
    padding: 10px;
  }
  #portfolio-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    overflow-x: scroll;
    overflow-y: hidden;
    max-height: 75vh;
    border-radius: 10px;

    .portfolio-item{
      width: 33%;
      margin-bottom:10px;
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  // style scrollbar for desktop view. Move scrollbar a little bit to up from bottom
  @media (min-width: 768px) {
    #portfolio-container {
      &::-webkit-scrollbar {
        height: 5px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: $color-primary-bright;
        border-radius: 5px;
      }
    }
  }

  // for mobile view one column of portfolio items is shown
  @media (max-width: 768px) {
    .portfolio-container-wrapper{
      padding: 10px 0;
    }
    #portfolio-container {
      flex-direction: row;
      overflow-y: auto;
      max-height: 70vh;
      margin: 0 5px;
      .portfolio-item{
        width: 100%;
      }
    }
  }

  // Define fade animations
  .fade-move,
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
  }

  .fade-leave-active {
    position: absolute;
  }
}
</style>