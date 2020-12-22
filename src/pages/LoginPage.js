import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import {Button,Divider,Grid,Header,Icon,Segment,Form} from 'semantic-ui-react'
const LoginPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }
  return (
    <>
    <div style={{marginTop:100,marginLeft:400,marginRight:400}}>
    <Segment inverted placeholder >
        <Grid columns={2} stackable textAlign='center'>
        <Divider vertical><span style={{color:'white'}}>Or</span></Divider>

        <Grid.Row verticalAlign='middle'>
            <Grid.Column>
            <div style={{marginLeft:25}}>
            <Header icon>
            <span style={{color:'white'}}><Icon name='user' />
                Login!
                </span>
            </Header>
            <br />
            <Form>
            <Form.Input id="username" placeholder="user name" onChange={e => {
                setUserName(e.target.value);
            }}/><br />
            <Form.Input id="password" type="password" placeholder="password" onChange={e => {
                setPassword(e.target.value);
            }}/><br />
            {/* Login web form  */}
            <Form.Button onClick={login}>Log in</Form.Button>
            </Form>
            </div>
            </Grid.Column>

            <Grid.Column>
            <div style={{marginLeft:325}}>
            <Header icon>
            <span style={{color:'white'}}>
                <Icon name='film' />
                Sign Up
                </span>
            </Header>
            <Link to="/signup"><Button id="smallButton" inverted color='green'>SignUp</Button></Link>
            </div>
            </Grid.Column>
        </Grid.Row>
        </Grid>
    </Segment>
    </div>
    </>
  );
};

export default LoginPage;