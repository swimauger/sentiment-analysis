const fs = require('fs');
const readFileAsync = require('util').promisify(fs.readFile);

const Sentiment = {
    analysis: 0,
    analyze: async function(sentiment) {
        await this.runAnalysis(sentiment);
        console.log(this.analysis);
    },
    runAnalysis: function(sentiment) {
        return readFileAsync("../dictionary/positive.txt").then((data) => {
            if(data.toString().includes(sentiment.toLowerCase())) {
                this.analysis += 1;
            }
        }).catch((err) => {
            console.log("ERROR:",err);
        });
    }
}

Sentiment.analyze("awesome");
