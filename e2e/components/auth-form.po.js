/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var AuthForm = function() {
  this.loginInput = element(by.model('vm.login'));
  this.loginHelpText = element(by.css('[ng-messages="authForm.login.$error"]'));
  this.passwordInput = element(by.model('vm.password'));
  this.passwordHelpText = element(by.css('[ng-messages="authForm.password.$error"]'));
  this.submitButton = element(by.css('button'));
};

module.exports = new AuthForm();
