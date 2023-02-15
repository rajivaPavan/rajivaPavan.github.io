const DARK_THEME = "dark";
const LIGHT_THEME = "light";

function setDataTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
}

function setThemeInStorage(theme) {
    localStorage.setItem("data-theme", theme);
}

export default class AppTheme{
    //used to detect OS theme preference on page load
    static detectColorScheme() {
        let theme = LIGHT_THEME;    //default to light

        if (!window.matchMedia) {
            //matchMedia method not supported
            return false;
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            //OS theme setting detected as dark
            theme = DARK_THEME;
        }

        //dark theme preferred, set document with a `data-theme` attribute
        if (theme === DARK_THEME) {
            setDataTheme(DARK_THEME)
        }
    }

    static setDarkTheme() {
        setDataTheme(DARK_THEME);
        setThemeInStorage(DARK_THEME);
    }

    static setLightTheme() {
        setDataTheme(LIGHT_THEME);
        setThemeInStorage(LIGHT_THEME);
    }

    static addThemeListener(toggleSwitchToDark) {
        window.matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) => {
                if (e.matches) {
                    AppTheme.setDarkTheme();
                    toggleSwitchToDark(true)
                } else {
                    AppTheme.setLightTheme();
                    toggleSwitchToDark(false)
                }
            });
    }

    static getDataTheme() {
        return document.documentElement.getAttribute("data-theme");
    }
}

AppTheme.detectColorScheme();