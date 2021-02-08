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
    <Container>
      <Row className="justify-content-center">
          <h2 className="text-center p-3 row justify-content-center" style={{color:" #a3a3a3a9"}}>
              This is just the way I add contents.
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
                  background:"none", 
                  border:"none",
                  height:"38px",
                  marginLeft:"5px"}}
                  >
                    <FiArrowRightCircle style={{fontSize:"35px"}}/>
              </Button>
              {/* <Button 
              onClick={()=>firebase.signOut()}
              >
                  sign out
              </Button> */}
          </Form>
      </Row>
    </Container>
  );
};
