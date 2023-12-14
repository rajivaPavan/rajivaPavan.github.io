<template>
  <!-- ======= Mobile nav toggle button ======= -->

  <div class="mobile-nav-toggle d-lg-none" @click="navToggle()">
    <div class="hamburger">
      <button :class="isOpen ? 'hamburger_active' : ''" type="button" class="hamburger_button">
        <span class="hamburger_inner"></span>
        <span class="hamburger_inner"></span>
        <span class="hamburger_inner"></span>
      </button>
    </div>
  </div>

  <header id="header" class="d-flex flex-column justify-content-center">
    <nav id="navbar" class="nav-menu flex flex-column">
      <ul>
        <li v-for="(section,i) in sections">
          <a v-if="section.hash" :href="section.hash" class="nav-link" :class="i===0 ? ' active' :''">
            <font-awesome-icon :icon="section.icon"/> <span>{{ section.name }}</span>
          </a>
        </li>
      </ul>
    </nav><!-- .nav-menu -->
  </header>
</template>
<script>
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {select} from "../site";
export default {
  name: 'AppHeader',
  props: {
    sections: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      menuIcon: faBars,
      isOpen: false
    }
  },
  computed: {
    navToggleIcon() {
      return this.menuIcon;
    }
  },
  methods:{
    navToggle(){
      document.querySelector('body').classList.toggle('mobile-nav-active');
      this.isOpen = !this.isOpen;
    }
  },
  mounted() {
    let navbarLinks = document.querySelectorAll('.nav-link');
    // Add the navToggle method as the click listener for navbarLinks if in mobile view
    // this is to close the navbar when a link is clicked
    if (window.innerWidth <= 991) {
      navbarLinks.forEach(navbarLink => {
        navbarLink.addEventListener('click', this.navToggle)
      })
    }
    // Add active class to navbar links when on the corresponding section
    const navbarLinksActive = () => {
      let position = window.scrollY + 200
      navbarLinks.forEach(navbarLink => {
        if (!navbarLink.hash) return
        let section = select(navbarLink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarLink.classList.add('active')
        } else {
          navbarLink.classList.remove('active')
        }
      })
    }
    document.addEventListener('load', navbarLinksActive);
    document.addEventListener('scroll', navbarLinksActive);
  }
}
</script>

<style scoped lang="scss">

#header {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 9997;
  transition: all 0.5s;
  padding: 15px;
  overflow-y: auto;
}

@media (max-width: 991px) {
  #header {
    width: 300px;
    background: var(--color-background);
    border-right: 1px solid var(--color-border);
    left: -300px;
  }
}


/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation
*/
.nav-menu {
  padding: 0;
  display: block;
}

.nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu>ul>li {
  position: relative;
  white-space: nowrap;
}
.nav-menu font-awesome-icon{
  transition: none;
}
.nav-menu a,
.nav-menu a:focus {
  display: flex;
  align-items: center;
  color: var(--color-text);
  padding: 10px 18px;
  margin-bottom: 8px;
  transition: width 0.3s;
  font-size: 15px;
  border-radius: 50px;
  background: var(--color-background-mute);
  border: 1px solid var(--color-border);
  height: 56px;
  width: 100%;
  overflow: hidden;
}

.nav-menu a font-awesome-icon,
.nav-menu a:focus font-awesome-icon {
  font-size: 20px;
  transition: color 0ms !important;
}

.nav-menu a span,
.nav-menu a:focus span {
  padding: 0 5px 0 7px;
  color: var(--color-text);
}

@media (min-width: 992px) {

  .nav-menu a,
  .nav-menu a:focus {
    width: 56px;
  }

  .nav-menu a span,
  .nav-menu a:focus span {
    display: none;
    color:  var(--color-text-in-primary);
  }
}

.nav-menu a:hover,
.nav-menu .active,
.nav-menu .active:focus,
.nav-menu li:hover>a {
  color:  var(--color-text-in-primary);
  background: var(--color-primary-bright);
}

.nav-menu a:hover span,
.nav-menu .active span,
.nav-menu .active:focus span,
.nav-menu li:hover>a span {
  color:  var(--color-text-in-primary);
}

.nav-menu a:hover,
.nav-menu li:hover>a {
  width: 100%;
  color:  var(--color-text-in-primary);
}

.nav-menu a:hover span,
.nav-menu li:hover>a span {
  display: block;
}

/**
* Mobile Navigation
*/

.mobile-nav-active {
  overflow: hidden;
}

.mobile-nav-active #header {
  left: 0;
}

.mobile-nav-active .mobile-nav-toggle {
  color: var(--color-text-in-primary);
  background: var(--color-primary-bright);
}

$hamburger-color: var(--color-text);

.hamburger{
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;

  &_button {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 1.5rem;
    width: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;

    &:focus {
      outline: none;
    }

    &:hover {
      .hamburger_inner {
        background-color: $hamburger-color;
      }
    }

    .hamburger_inner {
      width: 1.5rem;
      height: 0.2rem;
      background-color: $hamburger-color;
      border-radius: 0.2rem;
      transition: all 0.3s ease-in-out;
      position: relative;
      transform-origin: 1px;

      &:first-child {
        transform: rotate(0);
      }

      &:nth-child(2) {
        opacity: 1;
        transform: rotate(0);
      }

      &:nth-child(3) {
        transform: rotate(0);
      }
    }
  }

  &_active {
    .hamburger_inner {
      &:first-child {
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
      }
    }
  }

}
</style>