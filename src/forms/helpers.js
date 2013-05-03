/* helper modules for the forms */

var helper = (function(handlebars) {
  //klasses used to prevent conflict
  Handlebars.registerHelper('classes', function(klasses) {
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



});



