/* helper modules for the forms */

var helper = (function(handlebars) {
  //klasses used to prevent conflict
  handlebars.registerHelper('classes', function(klasses) {
    var text = [];
    if (klasses instanceof Array) {
      klasses.forEach(function(klass) {
        if (typeof(klass) === 'string') {
          text.push(klass);
        }
      });
    } else {
      if (typeof(klasses) === 'string') {
        text.push(klasses);
      }
    }
    if (text.length === 0) {
      return "";
    } else {
      return 'class="' + text.join(' ') + '"';
    }
  });

  handlebars.registerHelper('attributes', function(attributes) {
    /* loop through each of the attributes and for each one,
     * print out attribute=attributes[attribute]
     * if attributes[attribute] is an array, perform a join first
     * */
    var outString = [];
    for (var attribute in attributes) {
      if (attribute instanceof Array) {
        outString.push(toString(attribute) + '=\"' + (attributes[attribute]).join(' ') + '\"');
      } else {
        outString.push(toString(attribute) + '=\"' + attributes[attribute] + '\"');
      }
    }
    return outString.join(' ');
  });

  return handlebars;
});

module.exports = helper;

