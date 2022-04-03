import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
// import Header from "components/headers/light";
// import Footer from "components/footers/MiniCenteredFooter";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "images/star-icon.svg";
// import MoneyIcon from "images/success-green-check-mark.svg"
export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage disabled>
      {/* <Header/> */}
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We aim to crowd-aggregate the following <HighlightedText>Essentials.</HighlightedText>
          </>
        }
      />
  
      <FeatureWithSteps
        subheading={<Subheading> So How does vaccimate work ?</Subheading>}
        heading={
          <>
          <div style={{fontSize:"40px"}}>     Here are it's 3 main  <HighlightedText style={{fontSize:"30px"}}>Functionalities.</HighlightedText></div>
         
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            We Always Abide by Our <HighlightedText>Principles.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Verified Leads",
            description: "We strive hard in verifying the stock availability and the genuinity of all leads posted on our site",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Professional and Genuine",
            description: "If certain leads are proven to be misleading (or) crowd-source campaigns are found to be illicit, we shall take stringent legal measures against such people",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      />
      
     

      <MainFeature
        subheading={<Subheading>Quality Work</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      />
      {/* <GetStarted/> */}
      {/* <Footer /> */}
    </AnimationRevealPage>
  );
}
