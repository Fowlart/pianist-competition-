import styled from "styled-components";
import React from "react";
import {BiLinkExternal} from "react-icons/all";
import logo from "../1163023.png";

const Div = styled.div`
  text-align: center;
  background-color: black;
  background-image: url("${logo}");
  height: 900px;
`;

const A = styled.a`
  font-family: "Segoe UI", serif;
  font-style: oblique;
  font-weight: 800;
  margin-top: 20px;
  font-size: 20px;
  color: lawngreen;
  transition: all ease;
  text-decoration: none;

  :hover {
    color: darkred;
  }
`;


export const InfoPage = () => {
    return (<Div>
        <br/>
        <br/>
        <A href="https://drive.google.com/file/d/1qdyL0mXafowI888sPJLyM7yuhYJNR70b/view?usp=sharing"><BiLinkExternal/>
            Склад організаційного комітету </A>
        <br/>
        <br/>
        <br/>
        <A href="https://drive.google.com/file/d/1ka7GuVc0mhHzR5jq1qhTCHnlNa0HcXmB/view?usp=sharing"><BiLinkExternal/>Положення</A>
        <br/>
        <br/>
        <br/>
        <A href="https://drive.google.com/file/d/16sz0uu564Bl7l9Y-bqMO_-gLPqTuDBYC/view?usp=sharing"><BiLinkExternal/>Брошура</A>
    </Div>);
}
