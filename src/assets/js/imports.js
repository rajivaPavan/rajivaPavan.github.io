/**
 * Description:
 * 1. Add fontawesome icons to the library
 * 2. Import the necessary libraries for the project based on the environment
 *      If in development mode, it will import the libraries from node_modules
 *      If in production mode, it will import the libraries from a cdn
 */



//add fontawesome icons to the library
import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowUp, faBars, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
library.add(faArrowUp, faBars, faEnvelope, faPhone);


//import the custom js
import {links, scripts} from "./tags.js";

//get the environment
const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';

//if in dev mode, import add node_modules
if (env === 'dev') {
    import('bootstrap/dist/css/bootstrap.min.css').then(() => {
        console.log('bootstrap css loaded')
    });
    import('bootstrap/dist/js/bootstrap.bundle.js').then(() => {
    });
}
//add the links to the head
Object.keys(links).reverse().forEach(lib => {
    let link = links[lib][env]
    if (link) {
        link.addAfterTitleTag()
    }
});
//add the scripts to the body
Object.keys(scripts).forEach(lib => {
    let script = scripts[lib][env]
    if (script) {
        script.addToEndOfBody()
    }
});



