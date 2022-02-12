import React, { Component } from "react";
import styled from "styled-components";

const url =
   "https://res.cloudinary.com/dcane9asx/image/upload/v1644635479/bg-header-desktop_nyew9x.svg";

const Header = styled.div`
   top: 0;
   left: 0;
   width: 100%;
   margin: 0;
   padding: 0;
   background-color: hsl(180, 29%, 50%);
`;

export default class Navbar extends Component {
   render() {
      return (
         <Header>
            <img src={url} alt="" height={"120px"} width={"100%"} />
         </Header>
      );
   }
}
