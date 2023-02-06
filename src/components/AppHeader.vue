<template>
  <!-- ======= Mobile nav toggle button ======= -->
  <i class="bx bx-menu mobile-nav-toggle d-lg-none py-3" @click="navToggle()" ref="navToggleBtn"></i>

  <header id="header" class="d-flex flex-column justify-content-center">
    <nav id="navbar" class="navbar nav-menu">
      <ul>
        <li  v-for="(section,i) in sections"  >
          <a v-if="section.hash" :href="section.hash" class="nav-link" :class="i===0 ? ' active' :''">
            <i :class="section.icon"></i> <span>{{ section.name }}</span>
          </a>
        </li>
      </ul>
    </nav><!-- .nav-menu -->

  </header>
</template>
<script>


export default {
  name: 'AppHeader',
  props: {
    sections: {
      type: Array,
      default: () => []
    }
  },
  methods:{
    navToggle(){
      document.querySelector('body').classList.toggle('mobile-nav-active')
      this.$refs.navToggleBtn.classList.toggle('bx-menu')
      this.$refs.navToggleBtn.classList.toggle('bx-x')
    }
  },
  mounted() {
    let navbarLinks = document.querySelectorAll('.nav-link');
    //add the navToggle method as the click listener for navbarLinks if in mobile view
    if (window.innerWidth <= 991) {
      navbarLinks.forEach(navbarLink => {
        navbarLink.addEventListener('click', this.navToggle)
      })
    }
    const navbarLinksActive = () => {
      let position = window.scrollY + 200
      navbarLinks.forEach(navbarLink => {
        if (!navbarLink.hash) return
        let section = document.querySelector(navbarLink.hash)
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




<style scoped>

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

.nav-menu a,
.nav-menu a:focus {
  display: flex;
  align-items: center;
  color: var(--color-text);
  padding: 10px 18px;
  margin-bottom: 8px;
  transition: 0.3s;
  font-size: 15px;
  border-radius: 50px;
  background: var(--color-background-mute);
  border: 1px solid var(--color-border);
  height: 56px;
  width: 100%;
  overflow: hidden;
}

.nav-menu a i,
.nav-menu a:focus i {
  font-size: 20px;
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
.mobile-nav-toggle {
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 9998;
  border: 0;
  background: none;
  font-size: 28px;
  transition: all 0.4s;
  outline: none !important;
  line-height: 0;
  cursor: pointer;
  border-radius: 50px;
  padding: 5px;
}

.mobile-nav-toggle i {
  color: var(--color-heading);
}

.mobile-nav-active {
  overflow: hidden;
}

.mobile-nav-active #header {
  left: 0;
}

.mobile-nav-active .mobile-nav-toggle {
  color: var(--color-text-in-primary);
}

</style>