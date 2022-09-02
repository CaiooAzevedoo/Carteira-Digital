import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { getCurrencies } from '../redux/actions';

class WalletForm extends Component {
  // state = {
  //   currencies: [], // array de string
  //   // expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  //   // editor: false, // valor booleano que indica de uma despesa está sendo editada
  //   // idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  // };

  // async componentDidMount() {
  //   // colocar a API
  //   // const { dispatch } = this.props;
  //   const AWESOME_API = 'https://economia.awesomeapi.com.br/json/all';
  //   const response = await fetch(AWESOME_API);
  //   const responseFilter = response.filter((res) => res !== 'USDT');
  //   const { getCurrencisToState } = this.props;
  //   getCurrencisToState(responseFilter);
  //   // dispatch(getCurrencies(responseFilter));
  // }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <input data-testid="value-input" />
        <input data-testid="description-input" />
        <select data-testid="currency-input">
          {currencies.map((currency) => (
            <option
              key={ currency }
              value={ currency }
            >
              {currency}

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
  currencies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

// const mapDispatchToProps = (dispatch) => ({
//   getCurrencisToState: (response) => dispatch(getCurrencies(response)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
export default connect(mapStateToProps)(WalletForm);
