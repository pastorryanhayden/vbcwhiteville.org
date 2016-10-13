var Airtable = require('airtable');
var fs          = require('fs');
var yaml        = require('js-yaml');

function loadConfig() {
  var ymlFile = fs.readFileSync('_config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var config = loadConfig().airtable;
var jsonfile = require('jsonfile');

var filepastor = '_data/pastor.json';
var pastor = new Airtable({ apiKey: config.apikey }).base(config.comingsoon);
var pastorJson = [];
var pastorJsonTest = [];
    pastor('pastor').select({
        maxRecords: 1,
      
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          pastorJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(filepastor, pastorJson, function (err) {
        console.error(err)
      });
      console.log('pastor worked');
    });


var filemain = '_data/main.json';
var main = new Airtable({ apiKey: config.apikey }).base(config.comingsoon);
var mainJson = [];
var mainJsonTest = [];
    main('Main_Content').select({
        maxRecords: 1,
      
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          mainJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(filemain, mainJson, function (err) {
        console.error(err)
      });
      console.log('main worked');
    });


var filepastor = '_data/pastor.json';
var pastor = new Airtable({ apiKey: config.apikey }).base(config.comingsoon);
var pastorJson = [];
var pastorJsonTest = [];
    pastor('Pastor').select({
        maxRecords: 1,
      
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          pastorJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(filepastor, pastorJson, function (err) {
        console.error(err)
      });
      console.log('pastor worked');
    });

var filecontact = '_data/contact.json';
var contact = new Airtable({ apiKey: config.apikey }).base(config.comingsoon);
var contactJson = [];
var contactJsonTest = [];
    contact('Contact').select({
        maxRecords: 1,
      
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          contactJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(filecontact, contactJson, function (err) {
        console.error(err)
      });
      console.log('contact worked');
    });

var fileimages = '_data/images.json';
var images = new Airtable({ apiKey: config.apikey }).base(config.comingsoon);
var imagesJson = [];
var imagesJsonTest = [];
    images('Images').select({
        maxRecords: 1,
        view: 'Main View'
      
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          imagesJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(fileimages, imagesJson, function (err) {
        console.error(err)
      });
      console.log('images worked');
    });