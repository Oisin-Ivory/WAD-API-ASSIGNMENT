import React, { useContext, useState } from "react";
import { Redirect ,Link} from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import {Button,Divider,Grid,Header,Icon,Segment,Form} from 'semantic-ui-react'

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (registered === true) {
    return <Redirect to="./login" />;
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
            <span style={{color:'white'}}><Icon name='film' />
                Sign Up!
                </span>
            </Header>
            <br />
            <Form>
            <Form.Input value={userName} placeholder="user name" onChange={e => {
            setUserName(e.target.value);
            }}/><br />
            <Form.Input value={password} type="password" placeholder="password" onChange={e => {
            setPassword(e.target.value);
            }}/><br />
            <Form.Input value={passwordAgain} type="password" placeholder="password again" onChange={e => {
            setPasswordAgain(e.target.value);
            }}/><br />
            <Form.Button onClick={register}>Register</Form.Button>
            </Form>
            </div>
            </Grid.Column>

            <Grid.Column>
            <div style={{marginLeft:325}}>
            <Header icon>
            <span style={{color:'white'}}>
                <Icon name='user' />
                Login
                </span>
            </Header>
            <Link to="/login"><Button id="smallButton" inverted color='blue'>Login</Button></Link>
            </div>
            </Grid.Column>
        </Grid.Row>
        </Grid>
    </Segment>
    </div>
    </>
  );
};

export default SignUpPage;