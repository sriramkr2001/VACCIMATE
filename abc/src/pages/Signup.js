import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link ,useHistory} from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import validator from "validator";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/logo_transparent.png";
import logo from "images/vaccimate_logo.png";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";

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
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Register to Vaccimate",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign Up With Google",
      url: "https://google.com"
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign Up With Twitter",
      url: "https://twitter.com"
    }
  ],
  submitButtonText = "Sign Up",
  SubmitButtonIcon = SignUpIcon,
  tosUrl = "#",
  privacyPolicyUrl = "#",
  signInUrl = "#"
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();
  if(localStorage.getItem("authToken"))history.push("/")
  const registerHandler = async (e) => {
    e.preventDefault();
    if(!username||!password||!email||!confirmpassword)
    {
      setTimeout(() => {
        setError("");
      }, 2000);
      return setError("Please Enter All Fields");
    }
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if(password.length<6)
    {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError(`password [${password}] is shorter than the minimum allowed length (6).`);
    }
    if (password !== confirmpassword ) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }
    const x = email.split("@")[1]
    if (!(validator.isEmail(email)&&(x=='gmail.com'||x=='outlook.com'))){   
         setEmail("")
         setTimeout(() => {
          setError("");
        }, 2000);
      return setError('Enter valid Email! we only allow gmail/outlook emails')

    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          email,
          password,
        },
        config
      );

      // localStorage.setItem("authToken", data.token);

      history.push("/login");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  
  
  
  
  
  return(
  <AnimationRevealPage>
      <Container style={{backgroundColor:"#EDE7F6",minHeight:"100vh",marginTop:"1rem",paddingTop:"3rem"}}>
      <Content>
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
                      <img src={socialButton.iconImageSrc} className="icon" alt="" />
                    </span>
                    <span className="text">{socialButton.text}</span>
                  </SocialButton>
                ))}
              </SocialButtonsContainer> */}   
          {error&&<h3  style={{color:"red",minWidth:"100%",textAlign:"center",border:"1px solid yellow",minHeight:"20px",marginBottom:"5px"}}>{error}</h3>} 
              <DividerTextContainer style={{marginTop:"0rem"}}>
                {/* <DividerText>Or Sign up with your e-mail</DividerText> */}
          
                <br/>
                <DividerText> Register with your gmail or outlook e-mails</DividerText>
              </DividerTextContainer>
              <Form onSubmit={registerHandler}>
              <Input type="username"   placeholder="Username" value={username}
            onChange={(e) => setUsername(e.target.value)}/>
          
                <Input type="email"   placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password"  placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
                  <Input type="password" placeholder="Confirm Password" value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}/>
                <SubmitButton type="submit">
                  <SubmitButtonIcon className="icon" />
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  <Input type="checkbox" required="true" style={{display:"inline"}}/>
                  <span>I agree to abide by treact's{" "}</span>
                  <a href={tosUrl} tw="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </a>{" "}
                  and its{" "}
                  <a href={privacyPolicyUrl} tw="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>

                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Already have an account?{" "}
              <Link to="/login"><p  tw="border-b border-gray-500 border-dotted">
                    Sign In
                  </p></Link>
                
                </p>
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer style={{backgroundColor:"#B3E5FC"}}>
          <IllustrationImage imageSrc={illustrationImageSrc} style={{marginTop:"-1rem"}}/>
        </IllustrationContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
)};
