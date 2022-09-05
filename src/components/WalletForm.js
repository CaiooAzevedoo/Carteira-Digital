import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, saveExpenses } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);

    this.state = {
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Saúde',
    };
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  addExpense({ target }) {
    const { value, description, currency, method, tag } = this.state;
    const { getCurrencies, selectExpense, expenseId, exchangeRates } = this.props;
    getCurrencies();
    selectExpense({
      id: expenseId,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    });
    target.parentElement.firstChild.value = '';
    target.parentElement.firstChild.nextSibling.value = '';
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <input
          name="value"
          data-testid="value-input"
          onChange={ this.handleChange }
        />
        <input
          name="description"
          data-testid="description-input"
          onChange={ this.handleChange }
        />
        <select
          name="currency"
          data-testid="currency-input"
          onChange={ this.handleChange }
        >
          { currencies.map((currency) => (
            <option
              key={ currency }
              value={ currency }
            >
              { currency }

            </option>
          ))}
        </select>

        <select
          name="method"
          data-testid="method-input"
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          name="tag"
          data-testid="tag-input"
          onChange={ this.handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        <button
          type="button"
          onClick={ this.addExpense }
        >
          Adicionar despesa

        </button>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectExpense: PropTypes.func.isRequired,
  expenseId: PropTypes.number.isRequired,
  exchangeRates: PropTypes.objectOf.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenseId: state.wallet.expenseId,
  exchangeRates: state.wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  selectExpense: (expense) => dispatch(saveExpenses(expense)),
  getCurrencies: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
// export default connect(mapStateToProps)(WalletForm);
