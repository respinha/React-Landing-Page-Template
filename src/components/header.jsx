import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {this.props.data ? this.props.data.title : "Loading"}
                  <span></span>
                </h1>
              </div>
            </div>
          </div>
          <div className="overlay">
            <div className="row">
            <div className="col-md-8 col-md-offset-2" style={{ textAlign: 'center'}}>
              <p>{" "}</p>
            </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
