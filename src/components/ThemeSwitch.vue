<template>
  <div class="d-flex justify-content-center">
    <div class="mb-4 mb-md-3">
      <input id="checkbox" ref="themeSwitch" class="checkbox" type="checkbox">
      <label class="checkbox-label" for="checkbox">
        <font-awesome-icon :icon="faMoon" class="moon" size="lg"/>
        <font-awesome-icon :icon="faSun" class="sun" size="lg"/>
        <span class="ball"></span>
      </label>
    </div>
  </div>
</template>
<script>
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import AppTheme from "../assets/js/app-theme";

export default {
  name: 'ThemeSwitch',
  data() {
    return {
      faSun,
      faMoon
    }
  },
  mounted() {
    //identify the toggle switch HTML element
    const toggleSwitch = this.$refs.themeSwitch;

    //function that sets the toggle switch to check (i.e. dark theme) or uncheck (i.e. light theme)
    function toggleSwitchToDark(isDark) {
      toggleSwitch.checked = isDark;
    }

    //function that changes the theme, and sets a localStorage variable to track the theme between page loads
    function switchTheme(e) {
      if (e.target.checked) {
        AppTheme.setDarkTheme();
        toggleSwitchToDark(true);
      } else {
        AppTheme.setLightTheme();
        toggleSwitchToDark(false);
      }
    }

    //listener for changes to the toggle switch
    toggleSwitch.addEventListener('change', switchTheme, false);
    //listener for changes to the theme
    AppTheme.addThemeListener(toggleSwitchToDark);

    //pre-check the dark-theme checkbox if dark-theme is set
    if (AppTheme.getDataTheme() === "dark") {
      toggleSwitchToDark(true);
    }
  }
}

</script>
<style lang="scss" scoped>
$transition-speed: 0.15s;
$checkbox-size: 28px;
$ball-size: 22px;
$switch-width: 53px;

.checkbox {
  opacity: 0;
  position: absolute;
  height: $checkbox-size;
}

.sun {
  //a yellowish orange color for the sun
  color: #f39c12;
}

.moon {
  //a yellowish color for the moon
  color: #f1c40f;
}

.checkbox-label {
  background-color: var(--color-background);
  width: $switch-width;
  height: $checkbox-size;
  border-radius: 50px;
  border: 1px solid var(--color-border);
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .ball {
    background-color: var(--color-primary-bright);
    width: $ball-size;
    height: $ball-size;
    position: absolute;
    left: 2px;
    top: 2px;
    bottom: 2px;
    border-radius: 50%;
    transition: transform $transition-speed linear;
  }
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(calc(#{$switch-width} / 2 - 2px));
}
</style>