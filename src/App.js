import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import LectureDetails from './components/lectures/LectureDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateLecture from './components/lectures/CreateLecture'



function App() {
  return (
    <BrowserRouter>
       <div className="App">
         <Navbar />
         <Switch>
           <Route exact path='/' component={Dashboard} />
           <Route path='/lectures/:id' component={LectureDetails} />
           <Route path='/signin' component={SignIn} /> 
           <Route path='/signup' component={SignUp} />
           <Route path='/create' component={CreateLecture} />
         </Switch>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
