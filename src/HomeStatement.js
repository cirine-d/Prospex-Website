import React, { Component } from "react";
import kayaks from "./images/kayaks.jpg";
import "./css/HomeStatement.css";

const HomeStatement = props => {
  return (
    <div className="Home-statement">
      <h2>There are two sides to Islington.</h2>
      <div className="panel-container">
        <div className="left-panel">
          <p>
            The leafy mansions of the upper middle classes – and the low-income
            households in which a third of under-sixteens live.
            <br />
            <br />
            In one in three Islington households, no-one is employed. Over half
            of single parents in the borough – mostly mothers – are out of work.
            Just a fifth are in full employment, half the national average. The
            borough has the highest recorded prevalence of depression and severe
            mental illness in London. It is highly overpopulated, with triple as
            many people per square metre as the average London borough, and the
            second lowest proportion of green space.
            <br />
            <br />
            It’s also full of young people with drive, creativity, ideas – and
            enormous potential. But without safe green spaces, playgrounds, or
            youth centres, they have nowhere to grow. And without the financial
            freedom to travel to other areas of the city, they cannot benefit
            from better local provisions elsewhere.
            <br />
            <br />
            We don’t want their energy and ambitions to go to waste.
          </p>
        </div>
        <div className="right-panel">
          <img src={kayaks} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default HomeStatement;
