import Ember from 'ember';

export default Ember.Component.extend({
    validate: function(strCheck, e) {
        var eventInstance = window.event ? event : e;
        var unicode = eventInstance.charCode ? eventInstance.charCode : eventInstance.keyCode;
        if (strCheck.indexOf(unicode) === -1) {
            e.preventDefault();
        }
    },
    didInsertElement: function() {
        var self = this;
        this.$('input').mask('999-999-9999');
        this.$('input').keypress(function (event) { self.validate('13,48,49,50,51,52,53,54,55,56,57,45', event); });
    }
});
