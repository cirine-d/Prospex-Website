import React, { Component } from "react";
import logo from "./images/prospex-logo.png";
import kayaks from "./images/kayaks.jpg";
import "./App.css";
import posed from "react-pose";
import Menu from "@material-ui/icons/Menu";

const Header = posed.div({
  start: {
    height: "100vh",
    position: "fixed",
    width: "100%",
    justifyContent: "center",
    display: "block",
    paddingTop: "216px",
    opacity: 1
  },
  hidden: {
    height: "10vh",
    position: "fixed",
    display: "flex",
    paddingTop: "0px",
    width: "100%",
    justifyContent: "space-between",
    opacity: 0.5
  }
});

const Logo = posed.img({
  start: {
    height: "150px",
    opacity: 1
  },
  hidden: {
    height: "80px",
    opacity: 1
  }
});

const MenuButton = posed.div({
  start: {
    opacity: 0
  },
  hidden: {
    opacity: 1
  }
});

const MissionStatement = posed.div({
  start: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
});

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
        <Header
          className="App-header"
          pose={this.state.isHide ? "hidden" : "start"}
        >
          <Logo
            src={logo}
            pose={this.state.isHide ? "hidden" : "start"}
            className="App-logo"
            alt="logo"
          />

          <MissionStatement
            pose={this.state.isHide ? "hidden" : "start"}
            className="Mission-statement"
          >
            Realising young people's potential
          </MissionStatement>
        </Header>
        <MenuButton
          pose={this.state.isHide ? "hidden" : "start"}
          className="Menu-button"
        >
          <Menu style={{ height: "40px", width: "40px", color: "#69b6ce" }} />
        </MenuButton>
        <div className="Home-statement">
          <h2>There are two sides to Islington.</h2>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p>some text</p>
            <img src={kayaks} alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
