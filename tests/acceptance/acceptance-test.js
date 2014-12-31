import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('phone-number Acceptance Test', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

test("phone-number Acceptance Test", function() {
    visit('/');
    fillIn('input', '515-555');
    triggerEvent('input', 'blur');
    andThen(function(){
        equal(find('input').val(), '');
    });
    fillIn('input', '515-555-5454');
    triggerEvent('input', 'blur');
    andThen(function(){
        equal(find('input').val(), '515-555-5454');
    });
    fillIn('input', '5');
    triggerEvent('input', 'blur');
    andThen(function(){
        equal(find('input').val(), '');
    });
    fillIn('input', '515-555-54546888888809');
    triggerEvent('input', 'blur');
    andThen(function(){
        equal(find('input').val(), '515-555-5454');
    });
    fillIn('input', '515-555-545a4');
    triggerEvent('input', 'blur');
    andThen(function(){
        equal(find('input').val(), '515-555-5454');
    });
    fillIn('input', '515555545abc14');
    triggerEvent('input', 'blur');
    andThen(function(){
        equal(find('input').val(), '515-555-5451');
    });
    fillIn('input', '5-*15-5^*(55545abc14');
    triggerEvent('input', 'blur');
    andThen(function(){
        equal(find('input').val(), '515-555-5451');
    });
});
