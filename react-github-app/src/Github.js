import React, { Component } from 'react';

class Github extends Component {
  constructor() {
    super();

    this.state = {
      repo: 'angular/angular'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ repo: event.target.value });
  }

  render() {
    return (
      <div>
        <header>
          <i className="fa fa-github" />
          Contribution activity in React!
          <div className="input-group input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text">https://github.com/</span>
            </div>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
        </header>

        <div className="Github">
          <contrib-graph repo={this.state.repo} />
        </div>
      </div>
    );
  }
}

export default Github;
