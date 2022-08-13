/* exported titleCase */

// helper function to check three letter words
// lowercase word
// if word is a conjunction, article, or preposition stay lower case
// if not uppercase first character of three letter word and lowercase the rest of the characters.
function checkThreeLetterWords(word) {
  // word = word.toLowerCase();
  if (word === 'and' || word === 'or' || word === 'nor' || word === 'but') {
    return word;
  } else if (word === 'a' || word === 'an' || word === 'the') {
    return word;
  } else if (word === 'for' || word === 'in' || word === 'of' || word === 'on' || word === 'to') {
    return word;
  } else {
    word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  return word;
}

function titleCase(title) {
  var casedTitle = '';
  var titleLowerCase = title.toLowerCase();
  // check if title string has a colon
  if (titleLowerCase.includes(':')) {
    var splitAtColon = titleLowerCase.split(': ');
    var splitFirstHalf = splitAtColon[0].split(' ');
    var splitSubtitle = splitAtColon[1].split(' ');
    for (var k = 0; k < splitFirstHalf.length; k++) {
      if (splitFirstHalf[k] === 'javascript') {
        splitFirstHalf[k] = 'JavaScript:';
        casedTitle += splitFirstHalf[k] + ' ';
      } else if (k === 0) {
        splitFirstHalf[k] = splitFirstHalf[k].charAt(0).toUpperCase() + splitFirstHalf[k].slice(1).toLowerCase();
        casedTitle += splitFirstHalf[k] + ' ';
      } else if (splitFirstHalf[k].includes('-')) {
        var hyphenK = splitFirstHalf[k].indexOf('-');
        splitFirstHalf[k] = splitFirstHalf[k].charAt(0).toUpperCase() + splitFirstHalf[k].slice(1, hyphenK).toLowerCase() + splitFirstHalf[k].charAt(hyphenK) + splitFirstHalf[k].charAt(hyphenK + 1).toUpperCase() + splitFirstHalf[k].slice(hyphenK + 2).toLowerCase();
        casedTitle += splitFirstHalf[k] + ' ';
      } else if (splitFirstHalf[k].length >= 4 && splitFirstHalf[k] === splitFirstHalf[splitFirstHalf.length - 1]) {
        splitFirstHalf[k] = splitFirstHalf[k].charAt(0).toUpperCase() + splitFirstHalf[k].slice(1).toLowerCase();
        casedTitle += splitFirstHalf[k] + ': ';
      } else if (splitFirstHalf[k].length >= 4) {
        splitFirstHalf[k] = splitFirstHalf[k].charAt(0).toUpperCase() + splitFirstHalf[k].slice(1).toLowerCase();
        casedTitle += splitFirstHalf[k] + ' ';
      } else if (splitFirstHalf[k].length <= 3) {
        casedTitle += checkThreeLetterWords(splitFirstHalf[k]) + ' ';
      }
    }
    // casedTitle.trimEnd();
    // casedTitle += ': ';
    for (var j = 0; j < splitSubtitle.length; j++) {
      if (j === 0) {
        splitSubtitle[j] = splitSubtitle[j].charAt(0).toUpperCase() + splitSubtitle[j].slice(1).toLowerCase();
        casedTitle += splitSubtitle[j] + ' ';
      } else if (splitSubtitle[j].includes('-')) {
        var hyphenJ = splitSubtitle[j].indexOf('-');
        splitSubtitle[j] = splitSubtitle[j].charAt(0).toUpperCase() + splitSubtitle[j].slice(1, hyphenJ).toLowerCase() + splitSubtitle[j].charAt(hyphenJ) + splitSubtitle[j].charAt(hyphenJ + 1).toUpperCase() + splitSubtitle[j].slice(hyphenJ + 2).toLowerCase();
        casedTitle += splitSubtitle[j] + ' ';
      } else if (splitSubtitle[j].length >= 4) {
        splitSubtitle[j] = splitSubtitle[j].charAt(0).toUpperCase() + splitSubtitle[j].slice(1).toLowerCase();
        casedTitle += splitSubtitle[j] + ' ';
      } else if (splitSubtitle[j].length <= 3) {
        casedTitle += checkThreeLetterWords(splitSubtitle[j]) + ' ';
      }
    }
  }
  if (titleLowerCase.includes(':') === false) {
    var titleSplit = title.toLowerCase().split(' ');
    for (var i = 0; i < titleSplit.length; i++) {
      // If word is 'javascript' change it to 'JavaScript'
      if (titleSplit[i] === 'javascript') {
        titleSplit[i] = 'JavaScript';
        casedTitle += titleSplit[i] + ' ';
      }
      // API is a known acronym
      else if (titleSplit[i] === 'api') {
        titleSplit[i] = 'API';
        casedTitle += titleSplit[i] + ' ';
      }
      // Capitalize the first word of the title and of any subtitle.
      else if (i === 0) {
        titleSplit[i] = titleSplit[i].charAt(0).toUpperCase() + titleSplit[i].slice(1).toLowerCase();
        casedTitle += titleSplit[i] + ' ';
      } // Capitalize the second part of hyphenated major words
      else if (titleSplit[i].includes('-')) {
        var hyphen = titleSplit[i].indexOf('-');
        titleSplit[i] = titleSplit[i].charAt(0).toUpperCase() + titleSplit[i].slice(1, hyphen).toLowerCase() + titleSplit[i].charAt(hyphen) + titleSplit[i].charAt(hyphen + 1).toUpperCase() + titleSplit[i].slice(hyphen + 2).toLowerCase();
        casedTitle += titleSplit[i] + ' ';
      }
      // Capitalize all words of 4 letters or more
      else if (titleSplit[i].length >= 4) {
        titleSplit[i] = titleSplit[i].charAt(0).toUpperCase() + titleSplit[i].slice(1).toLowerCase();
        casedTitle += titleSplit[i] + ' ';
      } // check if word has 3 characters or less. If so, call the helper function checkThreeLetterWords with the word as an argument
      else if (titleSplit[i].length <= 3) {
        casedTitle += checkThreeLetterWords(titleSplit[i]) + ' ';
      }
    }
  }
  var trimmedTitle = casedTitle.trimEnd();
  return trimmedTitle;
}
