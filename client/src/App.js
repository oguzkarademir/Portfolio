import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import { Homepage } from "./components/homepage/Homepage";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Projects } from "./components/projects/Projects";
import { Blogs } from "./components/Blogs/Blogs";
import { Cv } from "./components/Cv";
import { Login } from "./components/Login";
import { Admin } from "./components/Admin";
import { NewProject } from "./components/projects/NewProject";
import { NewArticle } from "./components/Blogs/NewArticle";
import { ProjectPage } from "./components/projects/ProjectPage";
import firebase from "./firebase/fbconfig"
import { useDispatch, useSelector } from "react-redux";
import {loginSuccess, logOut} from "./redux/actions/authActions"


function App() {

  const dispatch = useDispatch();

  const loginStatus = useSelector(state => state.auth.loginStatus)

  useEffect(()=>{
    firebase.firebase.auth().setPersistence(firebase.firebase.auth.Auth.Persistence.SESSION)
    firebase.firebaseAuth.onAuthStateChanged(user => {
      if (user){
        dispatch(loginSuccess())
      } else {
        dispatch(logOut())
      }
    })
  }, [])
  
  return (
    <BrowserRouter>
      <Container fluid className="app">
        <NavBar />

        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/cv" component={Cv} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={!loginStatus?Homepage:Admin} />
          <Route exact path="/newproject" component={!loginStatus?Homepage:NewProject} />
          <Route exact path="/newarticle" component={!loginStatus?Homepage:NewArticle} />
          <Route exact path="/projects/:id" component={ProjectPage} />
        </Switch>

        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
