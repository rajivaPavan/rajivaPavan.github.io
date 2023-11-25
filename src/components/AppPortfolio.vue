<template>
  <section id="portfolio" ref="portfolio" class="portfolio section-bg">
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
        <TransitionGroup id="portfolio-container" name="fade"
                         tag="div">
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
import KardsApp from '/assets/images/portfolio/app-kards-2.jpg';
import ExMoApp from '/assets/images/portfolio/app-exmo.webp';
import nanoProcessor from '/assets/images/portfolio/academic-nanoprocessor.jpg';
import AppPortfolioItem from "./AppPortfolioItem.vue";
import {imageUrls} from "../store/urls.js";
import {Portfolio, PortfolioItem, PortfolioItemDetails} from "../entities/portfolio.js";
import {faGithub, faGooglePlay} from "@fortawesome/free-brands-svg-icons";
import {faEarth} from "@fortawesome/free-solid-svg-icons";

const projects = [
  new PortfolioItem(
      {
        name: "ExMo App",
        category: Portfolio.FilterApp,
        image: ExMoApp,
        details: new PortfolioItemDetails({
          links: [{
            url: "https://exmo.uom.lk/app/",
            icon: faEarth
          }],
          tech: [
            {image: imageUrls.kotlin},
            {image: imageUrls.android},
            {image: imageUrls.reactNative},
            {image: imageUrls.sceneView},
          ]
        })
      }
  ),
    new PortfolioItem({
      name:"4 Bit Nano Processor",
      category: Portfolio.FilterAcademic,
      image:nanoProcessor,
      details: new PortfolioItemDetails({
        links: [
          {url:"https://github.com/rajivaPavan/Nanoprocessor-Design-Project", icon: faGithub},
        ],
        tech: [
        ]
      })
    }),
  new PortfolioItem({
    name: 'Kards',
    category: Portfolio.FilterApp,
    image: KardsApp,
    details: new PortfolioItemDetails({
      links: [
        {url: 'https://play.google.com/store/apps/details?id=games.kardsapp.cardgame', icon: faGooglePlay},
        {url: 'https://kardsapp.github.io/', icon: faEarth},
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
    name: 'Speech Olympiad XV Website',
    category: Portfolio.FilterWeb,
    image: SOWeb,
    details: new PortfolioItemDetails({
      links: [
        {url: 'https://github.com/SpeechOlympiadXV/speecholympiadxv.github.io', icon: faGithub},
        {url: 'https://speecholympiad.live/', icon: faEarth},
      ],
      tech: [
        //  vue3
        {image: imageUrls.vue_small},
      ]
    }),
  }),
];

export default {
  name: 'AppPortfolio',
  components: {AppPortfolioItem},
  data() {
    return {
      currentFilter: Portfolio.FilterAll,
      portfolioFilters: [
          ...Portfolio.filters,
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
  },
  computed: {
    portfolioItemsFiltered() {
      return this.portfolioItems.filter(item => Portfolio.filter(item, this.currentFilter));
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

  .portfolio-container-wrapper {
    border-radius: 10px;
    //border: 1px solid $color-border;
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

    .portfolio-item {
      width: 33%;
      margin-bottom: 10px;
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  // style scrollbar for desktop view. Move scrollbar a little bit to up from bottom
  @media (min-width: 768px) {
    #portfolio-container {
      align-content: start;

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
    .portfolio-container-wrapper {
      padding: 10px 0;
    }
    #portfolio-container {
      flex-direction: row;
      overflow-y: auto;
      max-height: 70vh;
      margin: -5px 5px 0;

      .portfolio-item {
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
    transform: scale(0.0);
  }

  .fade-leave-active {
    position: absolute;
  }
}
</style>