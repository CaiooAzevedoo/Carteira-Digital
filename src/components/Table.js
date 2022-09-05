import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        {/* https://www.infowester.com/tagsdesconhecidas2.php */}
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((expense, index) => {
            const currencyAbbrev = Object.values(expense.exchangeRates)
              .find((object) => object.code === expense.currency);
            return (
              <tr key={ index }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ Number(expense.value).toFixed(2) }</td>
                <td>{ currencyAbbrev.name }</td>
                <td>{ Number(currencyAbbrev.ask).toFixed(2) }</td>
                <td>
                  { Number(Number(expense.value)
                * Number(currencyAbbrev.ask)).toFixed(2)}

                </td>
                <td>Real</td>
              </tr>
            );
          })}
          ;
        </tbody>

      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
