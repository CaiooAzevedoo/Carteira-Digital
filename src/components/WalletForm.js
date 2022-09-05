import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { getCurrencies } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <input data-testid="value-input" />
        <input data-testid="description-input" />
        <select data-testid="currency-input">
          { currencies.map((currency) => (
            <option
              key={ currency }
              value={ currency }
            >
              { currency }

            </option>
          ))}
        </select>

        <select data-testid="method-input">
          <option value="Dinheiro">Dinheiro</option>
          <option value="credit">Cartão de crédito</option>
          <option value="debit">Cartão de débito</option>
        </select>
        <select data-testid="tag-input">
          <option value="food">Alimentação</option>
          <option value="fun">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transportation">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </div>
    );
  }
}

// WalletForm.propTypes = {
//   currencies: PropTypes.arrayOf(PropTypes.object),
//   getCurrencisToState: PropTypes.func,
// }.isRequired;

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

// const mapDispatchToProps = (dispatch) => ({
//   getCurrencisToState: (response) => dispatch(getCurrencies(response)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
export default connect(mapStateToProps)(WalletForm);
