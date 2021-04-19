import React from 'react';
import Signup from './comps/Signup';
import { Container } from 'react-bootstrap';
import AuthProvider from './contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './comps/Login'
import './index.css';
import PrivateRoute from './comps/PrivateRoute';
import ForgotPassword from './comps/ForgotPassword'

function App() {
  return (
    <div className="App">
      
      <Container>
        <div>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                {/* <Route exact path="/" component={Home} /> */}
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
