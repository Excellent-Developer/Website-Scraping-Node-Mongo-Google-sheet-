var callNewsAPI = require('../helpers/newsApi');


var source = 'the-new-york-times';

async function GetNews() {
    try {
        await callNewsAPI(source);
        return;
    } catch (e) {
        console.log(e);
        throw Error(e);
    }

}



module.exports = GetNews;