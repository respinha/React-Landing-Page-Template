import React, { Component } from "react";

const LABELS = [
  "About",
  "Features",
  "Services",
  "Gallery",
  "Testimonials",
  "Teams",
  "Contact",
];
export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Andrea Conangla
          </a>{" "}
        </div>

        <div className="container">
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              {LABELS.map((label) => (
                <NavbarItem label={label} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const NavbarItem = ({ label }) => {
  return (
    <li>
      <a
        href={`#${label.toLowerCase()}`}
        className="page-scroll"
        style={{ fontWeight: "bold" }}
      >
        {label}
      </a>
    </li>
  );
};

export default Navigation;
