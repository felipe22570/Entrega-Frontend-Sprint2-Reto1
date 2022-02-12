import React, { Component } from "react";
import styled from "styled-components";
import Mostrar from "./Mostrar";

import Navbar from "./Navbar";

const Cont = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
`;

export default class Container extends Component {
   render() {
      return (
         <Cont>
            <Navbar />
            <Mostrar />
         </Cont>
      );
   }
}
