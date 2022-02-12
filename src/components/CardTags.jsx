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

const CardTags = ({ tags }) => {
   return (
      <div>
         {tags.map((u, index) => (
            <Button key={index}>{u}</Button>
         ))}
      </div>
   );
};

export default CardTags;
