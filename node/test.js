const https = require('https');
const promisify = require('util').promisify;
// const MongoClient = require('mongodb').MongoClient;
// const parseString = require('xml2js').parseString;

const FILE = './habr.xml';
const URL = 'https://habrahabr.ru/rss/feed/posts/6435ab455cc26ab2a3a07a52929d35cf/';

const promiseReadFile = promisify(https.get);
// const promiseParseXML = promisify(parseString);
// const promiseMongoConnect = promisify(MongoClient.connect);

https.get(URL, (a, b, c) => {
    // .then(res => {
        let content = '';
        res.setEncoding('utf8');
        res
            .on('data', chunk => {
                content += chunk;
            })
            .on('end', () => {
                return promiseParseXML(content)
            })
            .on('error', err => {
                throw err
            })
        ;
    })
    // })
    // .catch(e => {
    //     debugger;
    // })