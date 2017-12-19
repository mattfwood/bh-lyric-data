const fs = require('fs');
const Lyricist = require('lyricist');
const bhSongs = require('./bhSongs');

async function fetchLyrics(song) {
  let currentSong = await lyricist.song(song.id, { fetchLyrics: true });

  currentSong.title = currentSong.title.replace('/', '');

  fs.writeFileSync(`./songs/${currentSong.title}.js`, `module.exports = ${JSON.stringify(currentSong.lyrics)}`, 'utf8');
}

module.exports = fetchLyrics;