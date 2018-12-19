import React, { Component } from "react";
import streetteam from "./images/streetteam.jpg";
import one2one from "./images/one2one.jpg";
import youthcenter from "./images/youthcenter.jpg";
import "./css/Programmes.css";

const Programmes = props => {
  return (
    <div className="programmes">
      <div className="panel-container-programmes">
        <div className="top-panel">
          <h5>What we do</h5>
          <p>
            Young people want places to go. In Islington, they have a number of
            options, but few of them are free.
            <br />
            <br />
            Community centres in estates have been closed, or are being
            redeveloped. Many don’t feel safe travelling to the places which
            remain open because of high incidence of crime or antisocial
            behaviour.
            <br />
            <br />
            Prospex gives them somewhere to learn, play, or just relax – closer
            to home. Our youth hubs offer a safe space for young people to meet
            new people, learn new skills, and enjoy themselves in an environment
            designed to promote positive wellbeing. We have a ‘Healthy Bodies,
            Healthy Minds’ approach – stimulating both the physical body, and
            the mind. We run regular cooking, gardening, arts and crafts, team
            building, and personal development sessions, coupled with sports,
            physical activity and trips to the countryside.
            <br />
            <br />
            Whatever they feel like doing, whoever they are, and whoever they
            wish to be, we want every young person to find a home at Prospex.
          </p>
        </div>
        <div className="bottom-panel">
          <div className="street-team-img">Street Team</div>
          <div className="one2one-img">One to One</div>
          <div className="youth-center-img">Youth Center</div>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
