import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import TeamIllustrationSrcz from "../../images/logo_transparent.png";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { Link,useHistory } from "react-router-dom";
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const DecoratorBlob = styled(SvgDotPattern)(() => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Steps = tw.ul`mt-12`;
const Step = tw.li`mt-8 flex flex-col md:flex-row items-center md:items-start`;
const StepNumber = tw.div`font-semibold text-4xl leading-none text-gray-400`;
const StepText = tw.div`mt-3 md:mt-0 md:ml-6`;
const StepHeading = tw.h6`leading-none text-xl font-semibold`;
const StepDescription = tw.p`mt-3 max-w-xs leading-loose text-sm text-gray-600 font-medium`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;
const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;
export default ({
  subheading = "Our Expertise",
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  imageSrc = TeamIllustrationSrcz,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageDecoratorBlob = false,
  textOnLeft = true,
  steps = null,
  decoratorBlobCss = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const defaultSteps = [
    {
      heading: "Provide Essentials & Leads",
      description: "Are u an individual or organization who has access to valuable covid-resources and wish to help the community or are u someone who has leads about some potential resource donors free or paid , please make lead/donation posts so that the needy get access to them .Remember you will be saving precious lives through your generosity .All the best"
    },
    {
      heading: "Request Essentials",
      description: "Have the funds but not the appropriate leads to procure the essentials. Worry not , create a request post which will be seen by individuals worldwide who will help you out ! remember , we're in this together !"
    },
    {
      heading: "Crowdsourcing Campaigns",
      description: " if you can't afford resources or treatments ,then please create crowdsourcing posts which when verified can be funded by individuals worldwide.Hope this meets ur costs!"
    }
  ];

  if (!steps) steps = defaultSteps;
const history=useHistory();
  return (
    <Container>
      <TwoColumn className="TwoColumn">
 
          {/* <Image src={TeamIllustrationSrcz} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
          {imageDecoratorBlob && <DecoratorBlob css={decoratorBlobCss} />} */}
           <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" className="landing_imgy" src={TeamIllustrationSrcz} alt="Design Illustration" style={{  transform: "rotate(-10deg)",marginLeft:"0rem",marginTop:"0.5rem",marginRight:"1rem",backgroundColor:"pink",padding:"10px",borderRadius:"10%",	animation:" floaty 6s ease-in-out infinite"}} />
           

<TextColumn textOnLeft={textOnLeft} className="TextColumn">
          <TextContent className="TextContentz">
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Steps className="Step"style={{width:"100%"}}>
              {steps.map((step, index) => (
                <Step key={index} className="Step1" >
                  <StepNumber>{(index+1).toString().padStart(2,'0')}</StepNumber>
                  <StepText>
                    <StepHeading>{step.heading}</StepHeading>
                    <StepDescription className="Stepz" ><p ClassName="Stepz" style={{textAlign:"justify"}}>{step.description}</p></StepDescription>
                  </StepText>
                </Step>
              ))}
            </Steps>
          </TextContent>
        </TextColumn>

        

      </TwoColumn>
      <Actions className="CTA" style={{margin:"auto",marginTop:"-5rem"}}>
              {/* <input type="text" placeholder="Your E-mail Address" /> */}
              <button onClick={(e)=>{history.push("/register")}} className="cta_button" style={{zIndex:"1",height:"50px",marginRight:"30%",maxWidth:"170px",marginLeft:"45%",marginTop:"-10px"}}>Signup !</button>
            </Actions>
    </Container>
  );
};
