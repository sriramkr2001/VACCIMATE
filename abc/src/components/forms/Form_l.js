import React,{useState,useEffect} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import axios from "axios";
import validator from "validator";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import { useHistory ,useLocation} from "react-router-dom";
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

export default ({lead_type,id}) => {
  // console.log(id,"yayyy")
  const location=useLocation()
  // console.log(location)
  const history = useHistory();
  let [error,setError]=useState("")
let [state,setState]=useState(
  {
    name:"",
    title:"",
    email:"",
    phone_no:"",
    lead_status:"Available",
    profession_org:"",
    address:"",
    availability:"",
    instructions:"",
    message:"",
    createdDate:Date.now(),
    verified:"false",
    category:"leads",
    blood_plasma:"",
    food_grocery:"",
    emergency_drugs:"",
    area_landmark:"",
    postUserID: id
  }
)

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const submitHandler = async (e) => {
    e.preventDefault();
console.log(state)


const config = {
  header: {
    "Content-Type": "application/json",
  },
};

if(state.area_landmark.split(" ").length>2)
{ setTimeout(() => {
  setError("");
}, 2000);
return setError("max 2 words for area/landmark")
}


if(!validator.isMobilePhone(state.phone_no,["en-IN"],{strictMode:true})){
   setTimeout(() => {
    setError("");
  }, 2000); 
  return setError("enter a valid indian phone number of the format +91xxxxxxxxxx 10digits without space")}

  const x = state.email.split("@")[1]
if (!(validator.isEmail(state.email)&&(x=='gmail.com'||x=='outlook.com'))){   
  setTimeout(() => {
   setError("");
 }, 2000);
return setError('Enter valid Email! we only allow gmail/outlook emails')
}
try {
  await axios.post(
    `/api/explore/${lead_type}`,
      state,
    config
  );



  history.push("/explore");
} catch (error) {
  console.log(error,"wow")
  };
}
  

  










  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
           
            <h2>Lead Details Form</h2>
           
          
            <form onSubmit={submitHandler}>
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Name</Label>
                    <Input id="name-input" type="text" name="name" placeholder="E.g. John Doe" required="true" value={state.name} onChange={(e)=>{
                      // e.target.style.backgroundColor="red"
                      let x=e.target.name
                         setState({...state, [x]:e.target.value})
                    }} />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="name-input">Title of the request (one -line)</Label>
                    <Input id="title-input" type="text" name="title" placeholder="E.g I need 5 does of xyz..." required="true"  value={state.title}
                    onChange={(e)=>{
                      let x=e.target.name
                         setState({...state, [x]:e.target.value})
                    }} />
                  </InputContainer>

                  <InputContainer style={{display:"flex",flexDirection:"row"}}>
                    <Label htmlFor="status-input">Status of the Lead</Label>
                    <select name="lead_status" id="cars" style={{backgroundColor:"rgba(100,21,255)",marginTop:"0.5rem"}} required="true" value={state.lead_status} 
                    
                    onChange={(e)=>{
                      let x=e.target.name
                         setState({...state, [x]:e.target.value})
                    }}
                    
                    
                    
                    
                    >
  <option value="volvo">Available</option>
  <option value="saab">Unavailable</option>
  <option value="mercedes">Not Responding</option>
  <option value="audi">Limited Time Only</option>
  <option value="audi">Busy</option>
</select>
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Your Email Address</Label>
                    <Input id="email-input" type="email" name="email" placeholder="E.g. john@gmail.com" required="true" value={state.email} 
                    
                    onChange={(e)=>{
                      let x=e.target.name
                         setState({...state, [x]:e.target.value})
                    }}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="profession/org-input">Your Profession/Org</Label>
                    <Input id="prof/org-input" type="prof" name="profession_org" placeholder="E.g. Software Engineer/Paypal" required="true" value={state.profession_org} 
                    
                    onChange={(e)=>{
                      let x=e.target.name
                         setState({...state, [x]:e.target.value})
                    }}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="phone.no-input">Your Phone Number</Label>
                    <Input id="phoneNo-input" type="phoneNo" name="phone_no" placeholder="ex:+919901666922  valid indian phone.no " required="true" value={state.phone_no}
                    onChange={(e)=>{
                      let x=e.target.name
                         setState({...state, [x]:e.target.value})
                    }}
                    
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Your Area/Landmark</Label>
                    <Input id="area_landmark" type="area_landmark" name="area_landmark" placeholder="2 words max" required="true" value={state.area_landmark} 
                    
                    onChange={(e)=>{
                      let x=e.target.name
                         setState({...state, [x]:e.target.value})
                    }}
                    />
                  </InputContainer>
                  <InputContainer tw="flex-1">
          
                    <Label htmlFor="name-input">Your Address</Label>
                    <TextArea id="message-input" name="address" placeholder="E.g. xyz .. Chennai,TamilNadu India" required="true"value={state.address}
                    
                    onChange={(e)=>{
                      let x=e.target.name
                         setState({...state, [x]:e.target.value})
                    }}
                    
                    
                    
                    />
                  </InputContainer>
                  
                  <InputContainer >
                    <Label htmlFor="working-hrs"> Availability Hours of Lead</Label>
                    <Input   id="availability-input" type="availability" name="availability" placeholder="10am to 5pm" required="true"  value={state.availability}
                    onChange={(e)=>{
                      let x=e.target.name
                         setState({...state, [x]:e.target.value})
                    }}
                    
                    
                    />
                  </InputContainer>

               {location.pathname==="/explore/blood_plasma"&&
                <InputContainer style={{display:"flex",flexDirection:"row"}}>
                <Label htmlFor="status-input">Blood/Plasma ?</Label>
                <select name="blood_plasma" id="cars" style={{backgroundColor:"rgba(100,21,255)",marginTop:"0.5rem"}} required="true" value={state.blood_plasma} 
                
                onChange={(e)=>{
                  let x=e.target.name
                     setState({...state, [x]:e.target.value})
                }} 
                >
<option value="Blood" selected="true">Blood</option>
<option value="Plasma">Plasma</option>

</select>
              </InputContainer>   } 

              {location.pathname==="/explore/food_grocery"&& <InputContainer style={{display:"flex",flexDirection:"row"}}>
                    <Label htmlFor="status-input">Food/Grocery ?</Label>
                    <select name="food_grocery" id="cars" style={{backgroundColor:"rgba(100,21,255)",marginTop:"0.5rem"}} required="true" value={state.bfood_grocery} 
                    
                    onChange={(e)=>{
                      let x=e.target.name
                         setState({...state, [x]:e.target.value})
                    }} 
                    >
  <option value="food" selected>Food</option>
  <option value="grocery">Grocery</option>

</select>
                  </InputContainer>}            
                 
                 {location.pathname==="/explore/emergency_drugs"&&
                  <InputContainer style={{display:"flex",flexDirection:"row"}}>
                    <Label htmlFor="status-input">Which Drug ?</Label>
                    <select name="emergency_drugs" id="cars" style={{backgroundColor:"rgba(100,21,255)",marginTop:"0.5rem"}} required="true" value={state.emergency_drugs} 
                    
                    onChange={(e)=>{
                      let x=e.target.name
                         setState({...state, [x]:e.target.value})
                    }} 
                    >
  <option value="Remdesivir">Remdesivir</option>
  <option value="Tocilizumab">Tocilizumab</option>
  <option value="Liposomal Amphotericin B">Liposomal Amphotericin B</option>
  <option value="Posaconazole">Posaconazole</option>
  <option value="Isuvaconazole">Isuvaconazole</option>
  <option value="Isuvaconazole" selected>others</option>

</select>
                  </InputContainer>}

                  {location.pathname==="/explore/hospital_beds"&&
                  <InputContainer style={{display:"flex",flexDirection:"row"}}>
                    <Label htmlFor="status-input">Which Type of Hospital Bed /isolation care center?</Label>
                    <select name="hospital_beds" id="cars" style={{backgroundColor:"rgba(100,21,255)",marginTop:"0.5rem"}} required="true" value={state.hospital_beds} 
                    
                    onChange={(e)=>{
                      let x=e.target.name
                         setState({...state, [x]:e.target.value})
                    }} 
                    >
  <option value="Regular Beds">Regular Beds</option>
  <option value="Oxygen Beds">Oxygen Beds</option>
  <option value="ICU Beds-Ventilator/CPAP">ICU Beds-Ventilator/CPAP</option>
  <option value="Screening Centers">Screening Centers</option>
  <option value="Isolation Centers">Isolation Centers</option>
  <option value="others" selected>others</option>

</select>
                  </InputContainer>}
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Your Message</Label>
                    <TextArea id="message-input" name="message" placeholder="E.g. Details about your event" required="true" value={state.message}
                    
                    onChange={(e)=>{
                      let x=e.target.name
                         setState({...state, [x]:e.target.value})
                    }}
                    
                    
                    
                    />
                  </InputContainer>


           
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Instructions/Specifics</Label>
                    <TextArea id="message-input" name="instructions" placeholder="E.g. Call only at so and so timings etc..." required="true" value={state.instructions}
                    onChange={(e)=>{
                      let x=e.target.name
                         setState({...state, [x]:e.target.value})
                    }}
                    
                    
                    />
                  </InputContainer>
                </Column>
              </TwoColumn>
              {error!=""&&<h3 style={{fontSize:"20px",color:"red"}}>
               <br/>
               {error}
               <br/>
              </h3>}
              <SubmitButton type="submit" value="Submit">Submit</SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};