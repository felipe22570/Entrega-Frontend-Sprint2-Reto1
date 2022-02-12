import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "./Cards";

const Body = styled.div`
   margin-top: 50px;
`;

const Mostrar = () => {
   const [elements, setElements] = useState([]);
   const getData = async () => {
      const url = "https://reto1-sprint2.herokuapp.com/cards";
      const res = await fetch(url);
      const data = await res.json();

      return data;
   };

   useEffect(() => {
      getData().then((data) => setElements(data));
   }, []);

   return (
      <Body>
         {console.log(elements)}

         {elements.map((u, index) => (
            <div key={index}>
               <Cards elemento={u} />
               <br />
            </div>
         ))}
      </Body>
   );
};
export default Mostrar;
