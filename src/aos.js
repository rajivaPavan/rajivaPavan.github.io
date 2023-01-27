export default function initAOS(settings){
    const addStyles = (el, styles) => {
        Object.keys(styles).forEach((key) => {
            el.style[key] = styles[key];
        });
    }

    const isInViewport = (el) => {
        // get the element's position and size
        const elementRect = el.getBoundingClientRect();
        const elementTop = elementRect.top;
        const elementBottom = elementRect.bottom;

        // get the viewport's size
        const viewportHeight = window.innerHeight;

        // check if the element is in the viewport
        return elementTop <= viewportHeight && elementBottom >= 0;
    }

    const animateElements = (elements) => {
        elements.forEach((el) => {
            if (isInViewport(el) && !el.classList.contains('aos-animate')){
                el.classList.add('aos-animate');
            }
        });
    }

    const _initAOS = (settings) => {
        const duration = settings.duration || 0;
        const delay = settings.delay || 0;
        const easing = settings.easing || 'ease';

        const elementsToAnimate = document.querySelectorAll('[data-aos]');

        //add styles to elements
        elementsToAnimate.forEach((el) => {
            const styles = {
                'transition-duration': duration + 'ms',
                'transition-delay': delay + 'ms',
                'transition-timing-function': easing,
            };
            addStyles(el, styles);
        });

        animateElements(elementsToAnimate);

    }

    const aosListener = () => {
        _initAOS(settings);
    };

    document.addEventListener('DOMContentLoaded', aosListener);
    document.addEventListener('scroll', aosListener);
}