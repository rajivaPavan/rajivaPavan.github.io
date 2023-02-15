// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

export default function initIcons() {
    library.add(faSun,faMoon);
}