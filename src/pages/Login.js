import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import saveEmail from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.loginIn = this.loginIn.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.validateButton = this.validateButton.bind(this);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleInput({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => this.validateButton());
  }

  // handleClick = () => {
  //   this.setState({ disabled: true });
  // };

  validateButton() {
    const { email, password } = this.state;
    const minLength = 6;
    // const validate = email.includes('@')
    // && email.includes('.com') && password.length >= minLength;
    // return validate;

    if (email.includes('@') && email.includes('.com') && password.length >= minLength) {
      this.setState({ disabled: false });
    } else this.setState({ disabled: true });
  }

  loginIn() {
    const { history, confirmedEmail } = this.props;
    const { email } = this.state;
    confirmedEmail(email);
    history.push('/carteira');
  }

  render() {
    const { disabled } = this.state;
    // const { history } = this.state;
    // if (disabled) return <Redirect to="/carteira" />;

    return (
      <div>
        Login
        <input
          name="email"
          data-testid="email-input"
          onChange={ this.handleInput }
        />
        <input
          name="password"
          data-testid="password-input"
          onChange={ this.handleInput }
        />
        <button
          type="button"
          onClick={ this.loginIn }
          disabled={ disabled }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf.isRequired,
  confirmedEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  confirmedEmail: (email) => dispatch(saveEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
