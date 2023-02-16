/**
 * Description:
 * This file will import the necessary libraries for the project based on the environment
 * If in development mode, it will import the libraries from node_modules
 * If in production mode, it will import the libraries from a cdn
 */

//import the custom js
import {links, scripts} from "./tags.js";


function importLibraries() {
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
}

importLibraries();



