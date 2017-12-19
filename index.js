const fs = require('fs');
const Lyricist = require('lyricist');
const bhSongs = require('./bhSongs');
const getDiscography = require('./getDiscography');
const fetchLyrics = require('./fetchLyrics');
const getVerses = require('./getVerses');
const buildVerseData = require('./buildVerseData')
const allVerseData = require('./allVerseData');
const songLyrics = require('require-all') ({
  dirname     :  __dirname + '/songs',
});

const accessToken = 'g1hOS1k3aDUrWD9Vk8HsVqsgbU12u3DPWhIu8FijtwP7t-Dl47rykF4MNXCCYYDp';

const lyricist = new Lyricist(accessToken);

buildVerseData();

// fetch lyrics for each song
// bhSongs.forEach(song => {
//   fetchLyrics(song);
// });

// let allSongs = [];

// allVerseData.forEach(song => {

// });

