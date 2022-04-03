import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { Link } from "react-router-dom";
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/hospital-bed.svg";
import ShieldIconImage from "../../images/diving.svg";
import CustomizeIconImage from "../../images/blood.svg";
import FastIconImage from "../../images/virus-vaccine.svg";
// import ReliableIconImage from "../../images/reliable-icon.svg";
import ReliableIconImage from "../../images/crowdsource.svg";
import SimpleIconImage from "../../images/doctor.png";
import SimpleIconImage1 from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Oxygen",
      description: "We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.",
      color:"red",
      link:"oxygen",
    },
     { imageSrc: CustomizeIconImage, title: "Blood & Plasma",color:"cyan",link:"blood_plasma"},
    { imageSrc: SupportIconImage, title: "Hospital Beds",color:"green",link:"hospital_beds", },
   
    { imageSrc: ReliableIconImage, title: "Crowdsource Campaigns",color:"yellow",link:"crowdsource_campaigns", },
    { imageSrc: FastIconImage, title: "Emergency Drugs",color:"pink",link:"emergency_drugs", },
    { imageSrc: SimpleIconImage, title: "Doctor Support",color:"orange",link:"doctor_support", },
    { imageSrc: SimpleIconImage1, title: "Food & Groceries",color:"purple",link:"food_grocery", }
  ];

  return (
    <Container className="explore-container" style={{marginLeft:"auto",backgroundColor:"",border:"1px solid transparent",marginTop:"0rem"}}>
      <ThreeColumnContainer className="inner-container">
        <Heading>Find Your <span tw="text-primary-500">Essentials</span></Heading>
        {cards.map((card, i) => (
          // backgroundColor:`${card.color}`
          <Column key={i}>
            <Card className="explore-card" style={{width:"90%"}}>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
               <Link to={`/explore/${card.link}`}> <p className="description" style={{fontSize:"19px",fontWeight:"bolder",color:"purple",marginTop:"-2px"}}>    { "Click Here!"}
                </p></Link> 
              
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
