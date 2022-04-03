import { useState, useEffect } from "react";
import axios from "axios";
// import "./PrivateScreen.css";
import { useHistory } from "react-router-dom";
import DashedBorderSixFeatures from "components/features/DashedBorderSixFeatures";
const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
const history=useHistory();
  useEffect(() => {
    if(!localStorage.getItem("authToken"))history.replace("/login")
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData("cookies and localstorage are used to persist sessions in the client browser. You can use them to re-authenticate a returning user. I am not familiar with the sessionID key, but I must assume it is set by the passport middleware into the express req object based on your queryString ?token= . You may be storing this as a global variable in your application and will be lost if the user closes the browser. use cookies or localstorage if you want to store this token value for later. Or you could just make the user login again and save the trouble altogether!");
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? (
    <span style={{marginTop:"5rem"}} className="error-message">{error}</span>
  ) : (
    <div className="top_priv"style={{marginTop:"96px",padding:"2rem",minHeight:"100vh",backgroundColor:"#FAFAFA",textAlign:"center",  overflow: "hidden"}}>
<DashedBorderSixFeatures/>
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  );
};

export default PrivateScreen;
