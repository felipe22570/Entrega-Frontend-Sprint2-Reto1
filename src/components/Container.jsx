import React, { Component } from "react";
import styled from "styled-components";
import Mostrar from "./Mostrar";

import Navbar from "./Navbar";

const Cont = styled.div`
   margin: 0;
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
