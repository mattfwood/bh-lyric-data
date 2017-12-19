function getVerses(lyrics) {
  const verses = lyrics.split('\n\n');

  const verseOwners = [];

  if (verses.length > 1) {
    verses.forEach(verse => {
      if (verse.includes('[') || verse.includes(']')) {
        let verseOwner = verse.split('[')[1].split(']')[0].trim();

        let verseType = 'N/A'

        if (verseOwner.includes(':')) {
          verseType = verseOwner.split(':')[0].trim();
          verseOwner = verseOwner.split(':')[1].trim();
        }

        verseOwners.push({ 
          verseOwner,
          verse,
          verseType
        });
      }
    });
  } else {
    // find verse owner another way
  }

  return verseOwners;
}

module.exports = getVerses;
