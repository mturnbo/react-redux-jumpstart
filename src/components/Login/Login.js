import React from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import './Login.scss';

const Login = () => (
  <Container size="xsmall">
    <form className="uk-form-stacked">
      <div className="uk-margin">
        <div className="uk-inline jumpstart-login-input">
          <span className="uk-form-icon" data-uk-icon="icon: user" />
          <input className="uk-input" type="text" />
        </div>
      </div>
      <div className="uk-margin">
        <div className="uk-inline jumpstart-login-input">
          <span className="uk-form-icon" data-uk-icon="icon: lock" />
          <input className="uk-input" type="password" />
        </div>
      </div>
      <div className="uk-align-right">
        <Button category="primary" label="Login" onClick={() => console.log('login')} />
      </div>
    </form>
  </Container>
);

export default Login;
