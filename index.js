var Handlebars;
var Path       = require('path');
var fs         = require('fs');



var buildRonin = (function(handlebars) {
  handlebars = handlebars || require('handlebars');
  Handlebars = require('./lib/helpers.js')(handlebars);

  Ronin = {};
  //pull in all the templates
  Ronin.Templates = getTemplates({}, Path.join(__dirname, 'templates' ), '');

  return Ronin;
});


/* loads in the templates from the templates dir
 *  kkeping them sync since they only get run once on loadup.
 */
var getTemplates = function(Templates, directory, dirpath) {
  console.log(dirpath);
  var files = fs.readdirSync(directory);
  if (dirpath !== '') {
    console.log(dirpath);
    dirpath = dirpath + '/';
  }
  files.forEach(function(file) {
  if (fs.lstatSync(Path.join(directory, file)).isDirectory()) {
    getTemplates(Templates , Path.join(directory, file), dirpath + file);
  } else {
        // if the file ends in *.hbs, pull in the contents, compile it
        // and return it to the namespace;
        if ((/\.hbs$/).test(file)) {
          var contents = fs.readFileSync(Path.join(directory, file), 'utf8');
          Templates[String.prototype.slice.call(dirpath + file, 0, -4)] = Handlebars.compile(contents);
        }
      }
  });
  return Templates;
};


module.exports = buildRonin;


