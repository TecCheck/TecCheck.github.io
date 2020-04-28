const MDCIconButtonToggle = mdc.iconButton.MDCIconButtonToggle;
const MDCMenu = mdc.menu.MDCMenu;

var darkmode = false;

var darkNightSwitch;
var languageMenu;
var languageMenuButton;

var languageMenuEnglish;
var languageMenuGerman;

function load() {
    var darkNightButton = document.getElementById("dark-night-switch")

    darkNightSwitch = new MDCIconButtonToggle(darkNightButton);
    languageMenu = new MDCMenu(document.getElementById("language-menu"));
    languageMenuButton = document.getElementById("language-menu-button");

    languageMenuEnglish = document.getElementById("language-menu-english");
    languageMenuGerman = document.getElementById("language-menu-german");

    languageMenuButton.addEventListener("click", function () {
        languageMenu.open = true;
    });

    languageMenuEnglish.addEventListener("click", function () {
        document.location.href = document.location.origin;
    });

    languageMenuGerman.addEventListener("click", function () {
        document.location.href = document.location.origin + "/de";
    });

    darkNightButton.addEventListener("click", function () {
        updateDark();
    });

    darkNightSwitch.on = window.matchMedia("(prefers-color-scheme: dark)").matches;
    updateDark();
}

function updateDark() {
    if(darkNightSwitch.on)
        loadDarkCss();
    else
        unloadDarkCss();
}

function loadDarkCss() {
    var cssId = "dark-css";
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = document.location.origin + "/css/style-dark.css";
        link.media = 'all';
        head.appendChild(link);
    }
}

function unloadDarkCss() {
    var css = document.getElementById("dark-css");
    if (css)
        css.remove();
}

document.addEventListener("DOMContentLoaded", function () {
    load();
});