import Ember from 'ember';

export default Ember.Component.extend({
    inputWithDash: function(e) {
        this.validate('13,48,49,50,51,52,53,54,55,56,57,45', e);
    },
    validate: function(strCheck, e) {
        var eventInstance = window.event ? event : e;
        var unicode = eventInstance.charCode ? eventInstance.charCode : eventInstance.keyCode;
        if (strCheck.indexOf(unicode) === -1) {
            e.preventDefault();
        }
    },
    didInsertElement: function() {
        var self = this;
        this.$('#phone_number').mask('999-999-9999');
        this.$('#phone_number').keypress(function (event) { self.inputWithDash(event); });
    }
});
