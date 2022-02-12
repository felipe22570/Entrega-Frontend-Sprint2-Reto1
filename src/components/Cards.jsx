import React, { Component } from "react";
import styled from "styled-components";
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
`;

const CardContain = styled.div`
   display: flex;
   flex: auto;
   gap: 2%;
`;

const ButtonCardTags = styled.button`
   background-color: hsl(180, 31%, 95%);
   color: hsl(180, 29%, 50%);
   font-weight: bolder;
   border: none;
   padding: 10px;
`;

const Info = styled.div`
   display: flex;
   gap: 15px;
   opacity: 0.4;
   font-weight: bolder;
`;

const New = styled.button`
   background-color: hsl(180, 8%, 52%);
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

const CardFeatures = styled.div`
   display: flex;
   gap: 10px;
   align-items: center;
`;

const Cards = ({ elemento }) => {
   const { imagen, nombre, features, info, tags } = elemento;

   console.log(imagen);

   return (
      <div>
         <Card>
            <CardContain>
               <img src={imagen} alt="" width={"100px"} height={"100px"} />
               <div>
                  <CardFeatures>
                     <ButtonCardTags>Photosnap</ButtonCardTags>
                     <New>NEW!</New>
                     <Featured>Featured</Featured>
                  </CardFeatures>
                  <h3 fontWeight={700}>{nombre}</h3>
                  <Info>
                     <span>{info}</span>
                  </Info>
               </div>
            </CardContain>
            <CardTags tags={tags} />
         </Card>
      </div>
   );
};

export default Cards;
