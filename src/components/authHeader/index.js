import React, { useContext } from "react";
import { withRouter,Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import "./authHeader.css";
import {Button} from 'semantic-ui-react'
const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const { history } = props;

  return context.isAuthenticated ? (
    <>
      Welcome {context.userName}! <Button id="smallButton" inverted color='red' onClick={() => context.signout()}>SignOut</Button>
    </>
  ) : (
    <>
      You are not logged in{" "}

      <div class="ui buttons"><Link to="/login"><Button id="smallButton" inverted color='blue' onClick={() => history.push("/login")} >Login</Button></Link><div id="smallDiv" class="or"></div><Link to="/signup"><Button id="smallButton" inverted color='green'>SignUp</Button></Link></div>

    </>
  );
};

export default withRouter(BaseAuthHeader);
