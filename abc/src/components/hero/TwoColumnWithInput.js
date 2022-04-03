import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import {Link,useHistory} from "react-router-dom";
import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/design-illustration-2.svg";
import DesignIllustration1 from "../../images/vaccine_landing.svg";
import DesignIllustration2 from "../../images/vaccine2_landing.png";
import CustomersLogoStripImage from "../../images/customers-logo-strip.png";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;
const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;

export default ({ roundedHeaderButton }) => {
  const history=useHistory();
  return (
    <>
      {/* <Header roundedHeaderButton={roundedHeaderButton}  /> */}

      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
           Vaccimate  <span tw="text-primary-500"></span>
            </Heading>
            <Paragraph>
            Vaccimate is chennai's first covid resources aggregator platform !
            <br/>
       
            <p style={{textAlign:"justify",marginTop:"10px"}}> The pandemic has devastated the country. Amidst this ordeal, what was prevailant was the screams and desparation of countless families for covid-essesntial resources  <br/><br/>
        While some have been able to access these resources  in time, others have faced great difficulties in it's timely procurement.
      <br/><br/> We realise that the utmost need of the hour is to aggregate all such essentials such that every needy person has a chance to cure the ailment of their loved ones. Hence we built this platform. <br/> At vaccimate, we save Lives ! join us in our mission now !
        
        
        
        </p>
             </Paragraph>
            <Actions className="CTA" style={{border:"1px solid transparent",height:"80px",textAlign:"center",paddingBottom:"10px"}}>
              {/* <input type="text" placeholder="Your E-mail Address" /> */}
              <button onClick={(e)=>{history.push("/register")}} style={{height:"50px",marginRight:"30%",maxWidth:"170px",marginLeft:"15%",marginTop:"-10px"}}>Signup !</button>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" className="landing_img" src={DesignIllustration2} alt="Design Illustration" style={{  marginLeft:"10rem",marginTop:"0.5rem",marginRight:"1rem",backgroundColor:"yellow",padding:"60px",borderRadius:"10%",	animation:" float 6s ease-in-out infinite"}} />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>

    </>
  );
};
