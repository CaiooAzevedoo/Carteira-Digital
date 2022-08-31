import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <div>
        <input data-testid="value-input" />
        <input data-testid="description-input" />
        <select data-testid="currency-input">
          {/* desenvolver isso */}
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

export default WalletForm;
