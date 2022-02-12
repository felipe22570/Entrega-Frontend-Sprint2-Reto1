import React from "react";
import styled from "styled-components";
import CardFeatures from "./CardFeatures";
import CardTags from "./CardTags";

const Card = styled.div`
   @import url("https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap");

   font-family: "Spartan", sans-serif;
   font-weight: 500;
   font-size: 15px;
   border-left: 5px solid hsl(180, 29%, 50%);
   border-radius: 5px;
   padding: 15px;
   display: flex;
   flex: auto;
   align-items: center;
   align-content: center;
   justify-content: space-between;
   width: 80%;
   margin: auto;
   box-shadow: 0px 15px 17px 0px rgba(10, 148, 91, 0.2);
   margin-bottom: 15px;

   @media screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
      font-size: 13px;
   }
`;

const CardContain = styled.div`
   display: flex;
   flex: auto;
   gap: 2%;

   img {
      width: 100px;
      height: 100px;
   }
   @media screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
      gap: 0;
      img {
         width: 40px;
         height: 40px;
         margin-top: -35px;
      }
      justify-content: left;
      align-items: left;
      align-content: flex-start;
   }
`;

const Info = styled.div`
   display: flex;
   gap: 15px;
   opacity: 0.4;
   font-weight: bolder;
`;

const Titulo = styled.h3`
   font-weight: 700;
   cursor: pointer;
   &:hover {
      color: hsl(180, 29%, 50%);
   }
`;

const Cards = ({ elemento }) => {
   const { imagen, nombre, features, info, tags } = elemento;

   console.log(imagen);

   return (
      <div>
         <Card>
            <CardContain>
               <img src={imagen} alt="" />
               <div>
                  <CardFeatures features={features} />
                  <Titulo>{nombre}</Titulo>
                  <Info>
                     <span>{info}</span>
                  </Info>
               </div>
            </CardContain>
            <hr />
            <CardTags tags={tags} />
         </Card>
      </div>
   );
};

export default Cards;
