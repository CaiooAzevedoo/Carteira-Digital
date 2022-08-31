import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, total, currency } = this.props;
    return (
      <div>
        Header
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{total}</p>
        <p data-testid="header-currency-field">{currency}</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Header;