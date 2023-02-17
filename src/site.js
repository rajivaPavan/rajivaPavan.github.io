import initAOS from "./assets/js/aos.js";

/** Easy selector helper function */
export const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

/** Scrolls to an element with header offset */
export const scrollTo = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
        top: elementPos,
        behavior: 'smooth'
    })
}

(function () {
    "use strict";

    /** Scroll with offset on page load with hash links in the url */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollTo(window.location.hash)
            }
        }
    });

    /** Custom Animate on Scroll*/
    initAOS({
        duration: 1000,
        delay: 100,
        easing: 'ease-in-out',
    })
})()

