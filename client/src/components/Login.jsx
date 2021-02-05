import React, { useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import {FiArrowRightCircle} from "react-icons/fi"
import firebase from "../firebase/fbconfig"
import { useDispatch } from "react-redux";
import {loginFail} from "../redux/actions/authActions"
import { useHistory } from "react-router-dom"




export const Login = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")

     const handleSubmit = (e) => {
        e.preventDefault()
        firebase.signIn(email, password).then((res)=>{
            if(res){
                history.push("/admin")
            } else {
                dispatch(loginFail())
                history.push("/")
            }
        })
     }

  return (
    <Container className="p-5">
      <Row className="p-5 justify-content-center">
          <h2 className="text-center p-5 row justify-content-center" style={{color:" #a3a3a3a9"}}>
              Login if you are Oguz Karademir.<br /> This is just the way I add content to the website.
          </h2>
      </Row>
      <Row className="p-2 justify-content-center">
          <Form className="m-1 d-flex" onSubmit={handleSubmit}>
              <Form.Group className="mr-2">
                  <Form.Control type="text" placeholder="Admin" onChange={(e)=>setEmail(e.target.value)}/>
              </Form.Group>
              <Form.Group >
                  <Form.Control type="password" placeholder="Admin password" onChange={(e)=>setPassword(e.target.value)}/>
              </Form.Group>
              <Button 
              type="submit"
              style={{
                  color:"rgba(173, 3, 3, 0.986)", 
                  fontWeight:"500", 
                  backgroundColor:" white", 
                  border:"none",
                  height:"38px",
                  marginLeft:"15px"}}
                  >
                      Go to add page <FiArrowRightCircle style={{fontSize:"20px"}}/>
              </Button>
              <Button 
              onClick={()=>firebase.signOut()}
              >
                  sign out
              </Button>
          </Form>
      </Row>
    </Container>
  );
};
