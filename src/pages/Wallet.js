import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { fetchAPI } from '../redux/actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      currency: 'BRL',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { total, currency } = this.state;
    const { email } = this.props;
    return (
      <div>
        TrybeWallet
        <Header
          email={ email }
          total={ Number(total).toFixed(2) }
          currency={ currency }
        />
        <WalletForm />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
