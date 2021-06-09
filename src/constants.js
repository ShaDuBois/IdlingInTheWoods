import React from 'react';

const TWITCH_EMBED_URL = "https://embed.twitch.tv/embed/v1.js";

const MEDIA_DEFAULT_HEIGHT = 480;
const MEDIA_DEFAULT_WIDTH = 940;

const ROOT_PATH = '_self' in React.createElement('div') ?
'localhost' : 'https://shadubois.github.io/IdlingInTheWoods/'
console.log(ROOT_PATH)
// TODO in TDZ for use 

export {
    TWITCH_EMBED_URL,
    MEDIA_DEFAULT_HEIGHT,
    MEDIA_DEFAULT_WIDTH,
    ROOT_PATH
};