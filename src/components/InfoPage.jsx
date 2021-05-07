import styled from "styled-components";
import React from "react";
import {BiLinkExternal} from "react-icons/all";

const Div = styled.div`
  text-align: left;
`;

const A = styled.a`
  font-family: "Segoe UI", serif;
  margin-top: 20px;
  font-size: 20px;
  color: lawngreen;
  font-style: initial;
  transition: all ease;
  text-decoration: none;
  :hover {
    color: darkred;
  }
`;


export const InfoPage = () => {
    return (<Div>
        <A href="https://drive.google.com/file/d/1qdyL0mXafowI888sPJLyM7yuhYJNR70b/view?usp=sharing"><BiLinkExternal/>
            Склад організаційного комітету </A>
        <br/>
        <A href="https://drive.google.com/file/d/1ka7GuVc0mhHzR5jq1qhTCHnlNa0HcXmB/view?usp=sharing"><BiLinkExternal/>Положення</A>
        <br/>
        <A href="https://drive.google.com/file/d/16sz0uu564Bl7l9Y-bqMO_-gLPqTuDBYC/view?usp=sharing"><BiLinkExternal/>Брошура</A>
        <br/>
    </Div>);
}
