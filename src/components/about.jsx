import React, { Component } from "react";

const LANGUAGES = ["EN", "DE"];
export class about extends Component {
  state = {
    lang: "EN",
  };

  setLang = (lang) => {
    this.setState({ lang });
  };

  renderLanguages = () => {
    return LANGUAGES.map((lang) => {
      return (
        lang !== this.state.lang ? 
        <a href="#about" onClick={() => this.setLang(lang)}>
          {lang}{" "}
        </a> : lang + " "
      );
    });
  };

  renderText = () => {
    const lang = this.state.lang.toLowerCase();
    const data = this.props.data;
    return data ? data[lang].map((p) => {
      return <p>{p}</p>;
    }) : <p>TBD</p>;
  };

  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Andrea Conangla</h2>
                {this.renderLanguages()}
                {this.renderText()}
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              {" "}
              <img
                src="img/about.jpg"
                className="iqmg-responsive"
                alt=""
              />{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default about;
