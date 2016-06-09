/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.jumbEl = element(by.css('.jumbotron'));
  this.unknownUserTitle = element(by.css('.unknown-user h2'));
  this.knownUserTitle = element(by.css('.known-user h1'));
  this.navBar = element(by.css('.navbar'));
  this.navBarItems = this.navBar.all(by.css('li'));
  this.navBarHomeLink = this.navBar.element(by.css('li a[ui-sref=home]'));
};

module.exports = new MainPage();
