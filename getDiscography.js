const fs = require('fs');
const Lyricist = require('lyricist');

const accessToken = 'g1hOS1k3aDUrWD9Vk8HsVqsgbU12u3DPWhIu8FijtwP7t-Dl47rykF4MNXCCYYDp';

const lyricist = new Lyricist(accessToken);

let allSongs = [];

lyricist.songsByArtist(323651, { perPage: 50 }).then(songs => {
  allSongs = allSongs.concat(songs);

  lyricist.songsByArtist(323651, { perPage: 50, page: 2 }).then(songs => {
    allSongs = allSongs.concat(songs);

    lyricist.songsByArtist(323651, { perPage: 50, page: 3 }).then(songs => {
      allSongs = allSongs.concat(songs);
      
      fs.writeFileSync('./bhSongs.js', JSON.stringify(allSongs), 'utf8' )
    });
  });
});