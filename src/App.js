import React, { useState } from 'react';
import ImageGrid from './comps/imageGrid';
import Modal from './comps/modal';
import Signup from './comps/Signup';
import Title from './comps/Title';
import UploadForm from './comps/uploadForm';
import { Container } from 'react-bootstrap';
import AuthProvider from './contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './comps/Login'
import './index.css';
import PrivateRoute from './comps/PrivateRoute';
import ForgotPassword from './comps/ForgotPassword'

function App() {
  // const [selectedImg , setSelectedImg] = useState(null);

  return (
    <div className="App">
      {/* <Title/> */}
      
      <Container>
        <div>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <div className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh"}}>
                <div className="w-100 " style={{ maxWidth: "400px"}}>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                </div>
                </div>
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;
