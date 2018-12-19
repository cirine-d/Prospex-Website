import React, { Component } from "react";
import logo from "./images/prospex-logo.png";
import posed from "react-pose";
import Menu from "@material-ui/icons/Menu";
import "./css/App.css";

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

const HomeCover = props => {
  return (
    <div>
      <Header className="App-header" pose={props.hide ? "hidden" : "start"}>
        <Logo
          src={logo}
          pose={props.hide ? "hidden" : "start"}
          className="App-logo"
          alt="logo"
        />

        <MissionStatement
          pose={props.hide ? "hidden" : "start"}
          className="Mission-statement"
        >
          Realising young people's potential
        </MissionStatement>
      </Header>
      <MenuButton
        pose={props.hide ? "hidden" : "start"}
        className="Menu-button"
      >
        <Menu style={{ height: "40px", width: "40px", color: "#69b6ce" }} />
      </MenuButton>
    </div>
  );
};

export default HomeCover;
