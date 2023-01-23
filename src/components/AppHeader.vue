<script>


export default {
  name: 'AppHeader',
  data() {
    return {
      //sections : name, hash, icon, active
      sections: [
        {name: 'Home', hash: '#hero', icon: 'bx bx-home', active: true},
        // {name: 'About', hash: '#about', icon: 'bx bx-user', active: false},
        {name: 'Portfolio', hash: '#portfolio', icon: 'bx bx-book-content', active: false},
        {name: 'Services', hash: '#services', icon: 'bx bx-server', active: false},
        {name: 'Resume', hash: '#resume', icon: 'bx bx-file-blank', active: false},
        {name: 'Contact', hash: '#contact', icon: 'bx bx-envelope', active: false},
      ]
    }
  },
  computed: {
    sections(){
      return this.sections;
    }
  },
  mounted() {
    let navbarLinks = this.$el.querySelectorAll('.nav-link')
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
    document.addEventListener('scroll', navbarLinksActive)
  }
}
</script>

<template>
  <header id="header" class="d-flex flex-column justify-content-center">
    <nav id="navbar" class="navbar nav-menu">
      <ul>
        <li v-for="section in sections" >
          <a :href="section.hash" class="nav-link" :class="section.active ? 'active' :''">
            <i :class="section.icon"></i> <span>{{ section.name }}</span>
          </a>
        </li>
      </ul>
    </nav><!-- .nav-menu -->

  </header>
</template>


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
    background: #fff;
    border-right: 1px solid #e6e9ec;
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
  color: #45505b;
  padding: 10px 18px;
  margin-bottom: 8px;
  transition: 0.3s;
  font-size: 15px;
  border-radius: 50px;
  background: #f2f3f5;
  height: 56px;
  width: 100%;
  overflow: hidden;
  transition: 0.3s;
}

.nav-menu a i,
.nav-menu a:focus i {
  font-size: 20px;
}

.nav-menu a span,
.nav-menu a:focus span {
  padding: 0 5px 0 7px;
  color: #45505b;
}

@media (min-width: 992px) {

  .nav-menu a,
  .nav-menu a:focus {
    width: 56px;
  }

  .nav-menu a span,
  .nav-menu a:focus span {
    display: none;
    color: #fff;
  }
}

.nav-menu a:hover,
.nav-menu .active,
.nav-menu .active:focus,
.nav-menu li:hover>a {
  color: #fff;
  background: #0563bb;
}

.nav-menu a:hover span,
.nav-menu .active span,
.nav-menu .active:focus span,
.nav-menu li:hover>a span {
  color: #fff;
}

.nav-menu a:hover,
.nav-menu li:hover>a {
  width: 100%;
  color: #fff;
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
  color: #45505b;
}

.mobile-nav-active {
  overflow: hidden;
}

.mobile-nav-active #header {
  left: 0;
}

.mobile-nav-active .mobile-nav-toggle {
  color: #fff;
  background-color: #0563bb;
}

</style>