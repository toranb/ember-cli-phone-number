/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-phone-number',
  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/jquery-mask-library/lib/mask.js');
  }
};
