import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link,useHistory} from "react-router-dom";
import validator from "validator";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import illustration from "images/logo_transparent.png";
import logo from "images/vaccimate_logo.png";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Login to Vaccimate",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Login With Google",
      url: "https://google.com"
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Login With Twitter",
      url: "https://twitter.com"
    }
  ],
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "#",
  signupUrl = "#",
 
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
    console.log(history,"something changed")
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/explore");
    } catch (error) {
      const x = email.split("@")[1]
      if (!(validator.isEmail(email)&&(x=='gmail.com'||x=='outlook.com'))){
        setError('Enter valid Email! we only allow gmail/outlook emails')
      }
      else
      setError(error.response.data.error);
      console.log(error.response.data.error)
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  
  
  
  
  
  
  
  return(
  <AnimationRevealPage>
    <Container style={{backgroundColor:"#EDE7F6",minHeight:"100vh",marginTop:"1rem",paddingTop:"3rem"}}>
      <Content style={{backgroundColor:"white"}}>
        <MainContainer>
          <LogoLink href={logoLinkUrl}>
            <LogoImage src={logo} />
          </LogoLink>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              {/* <SocialButtonsContainer>
                {socialButtons.map((socialButton, index) => (
                  <SocialButton key={index} href={socialButton.url}>
                    <span className="iconContainer">
                      <img src={socialButton.iconImageSrc} className="icon" alt=""/>
                    </span>
                    <span className="text">{socialButton.text}</span>
                  </SocialButton>
                ))}
              </SocialButtonsContainer> */}
              {/* <DividerTextContainer>
                <DividerText>Or Login with your account credentials</DividerText>
                <DividerText>Login with your account credentials</DividerText>

              </DividerTextContainer> */}
              <Form onSubmit={loginHandler}>
                <Input type="email" placeholder="Email"  required onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1} />
                <Input type="password" placeholder="Password"     required
            id="password"
            autoComplete="true"
         
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2} />
                <SubmitButton type="submit" style={{backgroundColor:"#1D8CF8"}}>
                  <SubmitButtonIcon className="icon" />
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
              </Form>
              <p tw="mt-6 text-xs text-gray-600 text-center">
                <Link to="/forgotpassword"> <span href={forgotPasswordUrl} style={{cursor:"pointer"}} tw="border-b border-gray-500 border-dotted">
                  Forgot Password ?
                </span></Link>
               
              </p>
              <p tw="mt-8 text-sm text-gray-600 text-center">
                Dont have an account?{" "}
                <Link to="/register"> <p tw="border-b border-gray-500 border-dotted">
                  Sign Up
                </p></Link>
               
                   <p style={{color:"red"}}>{error}</p>
              </p>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer style={{backgroundColor:"#F5F5F5"}}>
          <IllustrationImage  style={{minWidth:"30vw",maxHeight:"70vh",backgroundColor:"transparent",borderRadius:"10%"}} imageSrc={illustrationImageSrc} />

        </IllustrationContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
)};

