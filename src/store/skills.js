import {imageUrls} from "./urls";

const languages = {
    python: { name: 'Python', image: imageUrls.python },
    cSharp: { name: 'C#', image: imageUrls.cSharp },
    java: { name: 'Java', image: imageUrls.java },
    c: { name: 'C', image: imageUrls.c },
    cPlusPlus: { name: 'C++', image: imageUrls.cPlusPlus },
    css: { name: 'CSS', image: imageUrls.css },
    javaScript: { name: 'JavaScript', image: imageUrls.javascript },
    typeScript: { name: 'TypeScript', image: imageUrls.typescript },
};

const frontendTech = {
    nextJs: { name: 'Next.js', image: imageUrls.nextJs },
    vue: { name: 'Vue', image: imageUrls.vue },
    bootstrap: { name: 'Bootstrap', image: imageUrls.bootstrap },
    tailwindCSS: { name: 'Tailwind CSS', image: imageUrls.tailwind },
    html: { name: 'HTML', image: imageUrls.html },
    css: { name: 'CSS', image: imageUrls.css },
};

const backendFrameworks = {
    dotNetCore: { name: '.NET Core', image: imageUrls.dotNetCore },
};

const databases = {
    mySQL: { name: 'MySQL', image: imageUrls.mysql },
};

const versionControl = {
    git: { name: 'Git', image: imageUrls.git },
    gitHub: { name: 'GitHub', image: imageUrls.github },
};

const mobile = {
    flutter: { name: 'Flutter', image: imageUrls.flutter },
    android: { name: 'Android', image: imageUrls.android },
};

const misc = {
    signalR: { name: 'SignalR', image: imageUrls.signalR },
    webRTC: { name: 'WebRTC', image: imageUrls.webrtc },
    laTeX: { name: 'LaTeX', image: imageUrls.latex },
    arCore: { name: 'ARCore', image: imageUrls.arcore },
};


const _languages = [
    languages.python,
    languages.cSharp,
    languages.java,
    languages.c,
    languages.cPlusPlus,
    languages.javaScript,
    languages.typeScript
];

const _frontendFrameworks = [
    frontendTech.nextJs,
    frontendTech.vue,
    frontendTech.html,
    frontendTech.css,
    frontendTech.bootstrap,
    frontendTech.tailwindCSS,
];

const _backendFrameworks = [
    backendFrameworks.dotNetCore,
];

const _databases = [
    databases.mySQL,
];

const _versionControl = [
    versionControl.git,
    versionControl.gitHub,
];

const _mobile = [
    mobile.flutter,
    mobile.android,
];

const _misc = [
    misc.signalR,
    misc.webRTC,
    misc.laTeX,
    misc.arCore,
];

export const skillCategories= [
    //name and image from official sites of the technologies or from google images or wikipedia
    {name: 'Web', skills: [..._backendFrameworks,..._frontendFrameworks,]},
    {name: 'Mobile', skills: _mobile},
    {name: 'Databases', skills: _databases},
    {name: 'Languages', skills: _languages},
    {name: 'Version Control', skills: _versionControl},
    {name: 'Miscellaneous', skills: _misc},
]

export default {languages, frontendFrameworks: frontendTech, backendFrameworks, databases, versionControl, mobile, misc}



