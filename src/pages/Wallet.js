import React from 'react';
import PropTypes from 'prop-types';
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
    const { total, currency } = this.state;
    const { email } = this.props;
    return (
      <div>
        TrybeWallet
        <Header
          email={ email }
          total={ total }
          currency={ currency }
        />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Wallet;
