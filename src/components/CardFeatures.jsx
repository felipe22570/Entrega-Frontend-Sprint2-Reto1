import React from "react";
import styled from "styled-components";

const Button = styled.button`
   background-color: hsl(180, 31%, 95%);
   color: hsl(180, 29%, 50%);
   font-weight: bolder;
   border: none;
   padding: 10px;
   cursor: pointer;
`;

const New = styled.button`
   background-color: hsl(180, 29%, 50%);
   border-radius: 15px;
   font-size: 12px;
   color: white;
   font-weight: bold;
   border: none;
   padding: 5px;
`;

const Featured = styled.button`
   background-color: black;
   border-radius: 15px;
   font-size: 12px;
   color: white;
   font-weight: bold;
   border: none;
   padding: 5px;
`;

const CardFeat = styled.div`
   display: flex;
   gap: 10px;
   align-items: center;
`;

const CardFeatures = ({ features }) => {
   return (
      <CardFeat>
         {features.map((u, index) => {
            // <Button key={index}>{u}</Button>
            if (u === "NEW!") {
               return <New key={index}>{u}</New>;
            } else if (u === "Features") {
               return <Featured key={index}>{u}</Featured>;
            } else {
               return <Button key={index}>{u}</Button>;
            }
         })}
      </CardFeat>
   );
};

export default CardFeatures;
