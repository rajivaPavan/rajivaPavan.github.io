import {imageUrls} from "./urls";

const languages = {
    python: { name: 'Python', image: imageUrls.python, link: "https://www.python.org/"},
    cSharp: { name: 'C#', image: imageUrls.cSharp, link: "https://docs.microsoft.com/en-us/dotnet/csharp/"},
    java: { name: 'Java', image: imageUrls.java, link : "https://www.java.com/en/"},
    c: { name: 'C', image: imageUrls.c, link: "https://www.cprogramming.com/"},
    cPlusPlus: { name: 'C++', image: imageUrls.cPlusPlus, link: "https://www.cplusplus.com/" },
    css: { name: 'CSS', image: imageUrls.css, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    javaScript: { name: 'JavaScript', image: imageUrls.javascript, link: "https://www.javascript.com/"},
    typeScript: { name: 'TypeScript', image: imageUrls.typescript, link: "https://www.typescriptlang.org/" },
};

const frontendTech = {
    nextJs: { name: 'Next.js', image: imageUrls.nextJs, link: "https://nextjs.org/" },
    vue: { name: 'Vue.js', image: imageUrls.vue, link: "https://vuejs.org/" },
    bootstrap: { name: 'Bootstrap', image: imageUrls.bootstrap, link: "https://getbootstrap.com/" },
    tailwindCSS: { name: 'Tailwind CSS', image: imageUrls.tailwind, link: "https://tailwindcss.com/" },
    html: { name: 'HTML', image: imageUrls.html, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    css: { name: 'CSS', image: imageUrls.css, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
};

const backendFrameworks = {
    dotNetCore: { name: '.NET Core', image: imageUrls.dotNetCore, link: "https://dotnet.microsoft.com/" },
};

const databases = {
    mySQL: { name: 'MySQL', image: imageUrls.mysql, link: "https://www.mysql.com/" },
};

const versionControl = {
    git: { name: 'Git', image: imageUrls.git, link: "https://git-scm.com/" },
    gitHub: { name: 'GitHub', image: imageUrls.github, link: "https://github.com/" },
};

const mobile = {
    flutter: { name: 'Flutter', image: imageUrls.flutter, link: "https://flutter.dev/" },
    android: { name: 'Android', image: imageUrls.android, link: "https://developer.android.com/" },
};

const misc = {
    signalR: { name: 'SignalR', image: imageUrls.signalR, link: "https://learn.microsoft.com/en-us/azure/azure-signalr/signalr-overview" },
    webRTC: { name: 'WebRTC', image: imageUrls.webrtc, link: "https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API" },
    laTeX: { name: 'LaTeX', image: imageUrls.latex, link: "https://www.latex-project.org/" },
    arCore: { name: 'ARCore', image: imageUrls.arcore, link: "https://developers.google.com/ar/" },
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



