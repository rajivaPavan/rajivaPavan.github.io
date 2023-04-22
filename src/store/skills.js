import {imageUrls} from "./urls";

const languages = [
    {name:'Python', image: imageUrls.python},
    {name: 'C#',  image: imageUrls.cSharp},
    {name:'Java', image: imageUrls.java},
    {name: 'C', image: imageUrls.c},
    {name: 'C++', image: imageUrls.cPlusPlus},
    // web
    {name: 'HTML', image: imageUrls.html},
    {name: 'CSS', image: imageUrls.css},
    {name: 'JavaScript', image: imageUrls.javascript},
];

const frontendFrameworks = [
    {name: 'Vue', image: imageUrls.vue},
    {name: 'Bootstrap', image: imageUrls.bootstrap},
];

const backendFrameworks = [
    {name: '.NET Core', image: imageUrls.dotNetCore},
];

const databases = [
    {name: 'MySQL', image: imageUrls.mysql},
];

const versionControl = [
    {name: 'Git', image: imageUrls.git},
    {name: 'GitHub', image: imageUrls.github},
];

const mobile = [
    {name: 'Flutter', image: imageUrls.flutter},
    {name: 'Android', image: imageUrls.android},
];

const misc = [
    {name: 'SignalR', image: imageUrls.signalR},
    {name: 'WebRTC', image: imageUrls.webrtc},
    {name: 'LaTeX', image: imageUrls.latex},
];

export const skillCategories= [
    //name and image from official sites of the technologies or from google images or wikipedia
    {name: 'Backend', skills: backendFrameworks},
    {name: 'Frontend', skills: frontendFrameworks},
    {name: 'Mobile', skills: mobile},
    {name: 'Databases', skills: databases},
    {name: 'Languages', skills: languages},
    {name: 'Version Control', skills: versionControl},
    {name: 'Miscellaneous', skills: misc},
]




