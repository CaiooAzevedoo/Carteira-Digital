import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { email, total, currency } = this.state;
    return (
      <div>
        TrybeWallet
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{total}</p>
        <p data-testid="header-currency-field">{currency}</p>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
