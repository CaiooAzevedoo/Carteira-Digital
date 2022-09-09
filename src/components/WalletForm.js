import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, saveExpenses, updateExpenseBtn } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);
    this.editExpenses = this.editExpenses.bind(this);
    this.state = {
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Saúde',
    };
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
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

  editExpenses(infoExpenses, { target }) {
    const { value, description, currency, method, tag } = this.state;
    const { selectExpense, endEdit } = this.props;
    selectExpense({
      id: infoExpenses.id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: infoExpenses.exchangeRates,
    });
    endEdit();
    target.parentElement.firstChild.value = '';
    target.parentElement.firstChild.nextSibling.value = '';
  }

  renderNormalFormal(currencies) {
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

  renderEditForm(currencies, infoExpenses) {
    return (
      <div>
        <input
          name="value"
          onChange={ this.handleChange }
          data-testid="value-input"
          placeholder={ infoExpenses.value }
        />
        <input
          name="description"
          onChange={ this.handleChange }
          data-testid="description-input"
          placeholder={ infoExpenses.description }
        />
        <select
          name="currency"
          onChange={ this.handleChange }
          data-testid="currency-input"
        >
          {currencies.map((currency) => (
            <option
              selected={ currency === infoExpenses.currency }
              key={ currency }
              value={ currency }
            >
              {currency}
            </option>
          ))}
        </select>
        <select
          name="method"
          onChange={ this.handleChange }
          data-testid="method-input"
        >
          <option selected={ infoExpenses.method === 'Dinheiro"' } value="Dinheiro">
            Dinheiro
          </option>
          <option
            selected={ infoExpenses.method === 'Cartão de crédito' }
            value="Cartão de crédito"
          >
            Cartão de crédito
          </option>
          <option
            selected={ infoExpenses.method === 'Cartão de débito' }
            value="Cartão de débito"
          >
            Cartão de débito
          </option>
        </select>
        <select
          name="tag"
          onChange={ this.handleChange }
          data-testid="tag-input"
        >
          <option
            selected={ infoExpenses.tag === 'Alimentação' }
            value="Alimentação"
          >
            Alimentação
          </option>
          <option
            selected={ infoExpenses.tag === 'Lazer' }
            value="Lazer"
          >
            Lazer
          </option>
          <option
            selected={ infoExpenses.tag === 'Trabalho' }
            value="Trabalho"
          >
            Trabalho
          </option>
          <option
            selected={ infoExpenses.tag === 'Transporte' }
            v
            alue="Transporte"
          >
            Transporte
          </option>
          <option
            selected={ infoExpenses.tag === 'Saúde' }
            value="Saúde"
          >
            Saúde
          </option>
        </select>
        <button
          type="button"
          onClick={ (event) => this.editExpenses(infoExpenses, event) }
        >
          Editar despesa
        </button>
      </div>
    );
  }

  render() {
    const { currencies, infoExpenses, editOpen } = this.props;
    return (
      <div>
        {editOpen ? this.renderEditForm(currencies, infoExpenses)
          : this.renderNormalFormal(currencies) }
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  selectExpense: PropTypes.func,
  expenseId: PropTypes.number,
  exchangeRates: PropTypes.objectOf(PropTypes.object),
  getCurrencies: PropTypes.func,
  editOpen: PropTypes.bool,
  infoExpenses: PropTypes.objectOf(PropTypes.object),
  endEdit: PropTypes.func.isRequired,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenseId: state.wallet.expenseId,
  exchangeRates: state.wallet.exchangeRates,
  infoExpenses: state.wallet.infoExpenses,
  editOpen: state.wallet.editor,
});
const mapDispatchToProps = (dispatch) => ({
  selectExpense: (expense) => dispatch(saveExpenses(expense)),
  getCurrencies: () => dispatch(fetchAPI()),
  endEdit: () => dispatch(updateExpenseBtn()),
});
export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
