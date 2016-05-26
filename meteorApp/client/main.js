import '../imports/startup/accounts-config.js';
import '../imports/ui/body.js';

Router.route('/', function () {
  this.render('');
});

Router.route('/hello', function () {
  this.render('path');
});