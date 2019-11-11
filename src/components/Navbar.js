import React, { Component } from "react";
import classNames from "classnames";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // this.changeToClock = this.changeToClock.bind(this);
      // this.changeToContent = this.changeToContent.bind(this);
    };
  }

  changeToClock = () => {
    const { pageStatus, handleStatus } = this.props;
    handleStatus("clock");
    // this.setState({
    //   pageStatus: "clock"
    // });
    console.log(pageStatus);
  };

  changeToContent = () => {
    const { pageStatus, handleStatus } = this.props;
    handleStatus("content");
    // this.setState({
    //   pageStatus: "content"
    // });

    console.log(pageStatus);
  };

  changeToConverter = () => {
    const { pageStatus, handleStatus } = this.props;
    handleStatus("converter");
    // this.setState({
    //   pageStatus: "content"
    // });

    console.log(pageStatus);
  };

  render() {
    const { pageStatus, handleStatus } = this.props;
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <button
          className={classNames(
            "btn mx-2",
            {
              "btn-outline-primary": pageStatus !== "clock"
            },
            {
              "btn-primary": pageStatus == "clock"
            }
          )}
          onClick={this.changeToClock}
        >
          clock
        </button>

        <button
          className={classNames(
            "btn mx-2",
            {
              "btn-outline-primary": pageStatus !== "converter"
            },
            {
              "btn-primary": pageStatus == "converter"
            }
          )}
          onClick={this.changeToConverter}
        >
          converter
        </button>

        <button
          className={classNames(
            "btn mx-2",
            {
              "btn-outline-primary": pageStatus !== "content"
            },
            {
              "btn-primary": pageStatus == "content"
            }
          )}
          onClick={this.changeToContent}
        >
          content
        </button>
      </div>
    );
  }
}

export default Navbar;