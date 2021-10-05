const fs = require('fs');
const data = JSON.stringify({
  "title" : "Introduction to Automata Theory, Languages, and Computation",
  "edition" : "3",
  "author" : "J. E. Hopcroft, R. Motwani, and J. D. Ullman",
  "ISBN" : "9781292056166",
  "course" : "CSED341",
  "publisher" : "pearson"
});

fs.writeFileSync('./textbook.json', data, 'utf8', (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('file saved');
});