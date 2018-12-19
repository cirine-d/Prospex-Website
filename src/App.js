import React, { Component } from "react";
import HomeCover from "./HomeCover.js";
import HomeStatement from "./HomeStatement.js";
import Programmes from "./Programmes.js";
import "./css/App.css";

class App extends Component {
  state = {
    isHide: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.hideBar);
  }

  hideBar = () => {
    console.warn({ window: window.scrollY });

    window.scrollY > 10
      ? this.setState({ isHide: true })
      : this.setState({ isHide: false });

    this.prev = window.scrollY;
  };

  render() {
    return (
      <div className="App">
        <HomeCover hide={this.state.isHide} />
        <HomeStatement />
        <Programmes />
      </div>
    );
  }
}

export default App;
