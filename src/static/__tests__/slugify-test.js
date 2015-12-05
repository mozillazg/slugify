jest.dontMock('../js/component.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const SlugifyForm = require('../js/component.jsx');
let open, send, onload, onerror, DONE, setRequestHeader;


describe('SlugifyForm', () => {

  it('changes the text after input', () => {
    var node = TestUtils.renderIntoDocument(<SlugifyForm />);
    expect(node.render).toBeTruthy();

    var textareas = TestUtils.scryRenderedDOMComponentsWithTag(node, 'textarea');
    expect(textareas.length).toEqual(2);

    var inputText = textareas[0];
    var inputSlug = textareas[1];
    inputText.value = 'abc';
    inputSlug.value = 'abcefg';
    TestUtils.Simulate.change(inputText);
    expect(inputText.value).toEqual('abc');
    expect(inputSlug.value).toEqual('');
  });

  it('update slug after submit', () => {
    var node = TestUtils.renderIntoDocument(<SlugifyForm />);
    var textareas = TestUtils.scryRenderedDOMComponentsWithTag(node, 'textarea');
    var inputText = textareas[0];
    var inputSlug = textareas[1];
    var form = TestUtils.findRenderedDOMComponentWithTag(node, 'form');

    inputText.value = 'a b c';
    inputSlug.value = 'abcefg';
    TestUtils.Simulate.change(inputText);
    var openfunc = jest.genMockFn();
    var sendfunc = function(data) {
      expect(JSON.parse(data)).toEqual({'text': 'a b c'});
      this.onreadystatechange();
    };
    createXHRmock(openfunc, sendfunc, 4, 200,
                  '{"text": "a b c", "slug": "abc"}');

    TestUtils.Simulate.submit(form);
    expect(openfunc).toBeCalledWith('POST', '/slugify', true);
    expect(inputSlug.value).toEqual('abc');

  });

});

function createXHRmock(openfunc, sendfunc, readyState, status, responseText) {

  class XMLHttpRequest {

    constructor() {
      this.open = openfunc.bind(this);
      this.DONE = 4;
      this.readyState = readyState
      this.status = status;
      this.responseText = responseText;
      this.setRequestHeader = jest.genMockFn();
      this.send = sendfunc.bind(this);
    }
  }

  XMLHttpRequest.DONE = 4;
  window.XMLHttpRequest = XMLHttpRequest;
};
