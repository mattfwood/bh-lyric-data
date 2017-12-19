const fs = require('fs');
const songLyrics = require('require-all') ({
  dirname     :  __dirname + '/songs',
});
const getVerses = require('./getVerses');

/*
 * Create verse data object from
 * song lyrics and owners
 */
function buildVerseData() {
  // get verses for each song
  const songs = Object.keys(songLyrics);

  const verseData = [];
  // build object of all verses and owners
  songs.forEach(song => {
    let lyrics = songLyrics[song];

    verseData.push({
      songTitle: song,
      verses: getVerses(lyrics)
    });
  });

  fs.writeFileSync(`allVerseData.js`, `module.exports = ${JSON.stringify(verseData)}`, 'utf8');

  return verseData
}

module.exports = buildVerseData;
