import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Andrea Conangla</h2>
                {this.props.data?.paragraphs.map(p => {
                  return <p>{p}</p>
                })}
              </div>
            </div>
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="iqmg-responsive" alt=""/> </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
