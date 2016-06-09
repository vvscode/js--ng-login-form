'use strict';

describe('The main page', function () {
  var page;
  var authForm;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
    authForm = require('./components/auth-form.po');
  });

  it('should list more than 5 awesome things', function () {
    expect(page.navBar.isPresent()).toBe(true);;
    expect(page.navBarItems.count()).toBe(1);
  });

  it('show show welcome message', function() {
    expect(page.unknownUserTitle.isPresent()).toBe(true);
    expect(page.unknownUserTitle.getText()).toBe('Sorry, we don\'t recognize you. Please authorize:');

    expect(page.knownUserTitle.isPresent()).toBe(false);
  });
});

describe('Auth form at main page', function () {
  var page;
  var authForm;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
    authForm = require('./components/auth-form.po');
  });

  it('It should show helper text', function () {
    expect(authForm.loginHelpText.getText()).toBe('You did not enter a field');
    expect(authForm.passwordHelpText.getText()).toBe('You did not enter a field');

    authForm.loginInput.sendKeys('12');
    expect(authForm.loginHelpText.getText()).toBe('Login is too short. Should be 3 symbols at least');
    authForm.loginInput.sendKeys('12345');
    expect(authForm.loginHelpText.getText()).toBe('');

    authForm.passwordInput.sendKeys('12');
    expect(authForm.passwordHelpText.getText()).toBe('Password is too short. Should be 5 symbols at least');
    authForm.passwordInput.sendKeys('12345');
    expect(authForm.passwordHelpText.getText()).toBe('');
  });

  it('should send to error page of wrong credentials', function() {
      authForm.loginInput.sendKeys('wrong login');
      authForm.passwordInput.sendKeys('wrong password');
      authForm.submitButton.click();
      expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/index.html#/error');
      expect(element(by.css('.label.label-danger.result-text')).getText()).toBe('Auth failed');
  });

  it('should send to success page of correct credentials', function() {
      authForm.loginInput.sendKeys('user1');
      authForm.passwordInput.sendKeys('password1');
      authForm.submitButton.click();
      expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/index.html#/success');
      expect(element(by.css('.label.label-success.result-text')).getText()).toBe('Congratulations! You\'re logged in!');
  });

  it('main page should recognize authorized users', function() {
      authForm.loginInput.sendKeys('user1');
      authForm.passwordInput.sendKeys('password1');
      authForm.submitButton.click();
      page.navBarHomeLink.click();
      expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/index.html#/');
      expect(page.unknownUserTitle.isPresent()).toBe(false);
      expect(page.knownUserTitle.isPresent()).toBe(true);
      expect(page.jumbEl.element(by.css('h1')).getText()).toBe('Hi, we know you!');
  });
});
