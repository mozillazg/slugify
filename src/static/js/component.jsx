import React from 'react';

export default class SlugifyForm extends React.Component {
  constructor() {
    super();

    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
    this.state = {
      text: '',
      slug: ''
    }
  };

  textChangeHandler(e) {
    this.setState({text: e.target.value.trim(), slug: ''});
  };

  slugFocusHandler(e) {
    e.target.select();
  };

  submitHandler(e) {
    e.preventDefault();
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === XMLHttpRequest.DONE &&
          httpRequest.status === 200) {
            var result = JSON.parse(httpRequest.responseText);
            this.setState({text: result.text, slug: result.slug});
            this.refs.inputSlug.select();
      }
    }.bind(this);
    httpRequest.open('POST', '/slugify', true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    var data = {text: this.state.text};
    httpRequest.send(JSON.stringify(data));
  };

  render() {
    return (
      <div className="form">
        <form action="/slugify" method="post" onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="input-text">Text:</label>
            <textarea name="input-text" ref="inputText" id="input-text"
             onChange={this.textChangeHandler}
             rows="5" cols="40" defaultValue={this.state.text}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="input-slug" className="hide">Slug:</label>
            <textarea name="input-slug" ref="inputSlug" id="input-slug"
             onFocus={this.slugFocusHandler}
             rows="5" cols="40" readOnly value={this.state.slug}></textarea>
          </div>
          <div className="form-actions">
            <input type="reset" value="Reset" />
            <input type="submit" value="Slugify" />
          </div>
        </form>
      </div>
    )
  }
}
