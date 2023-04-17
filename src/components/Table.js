import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenseBtn, editExpenses } from '../redux/actions';

class Table extends Component {
  render() {
    const { expenses, deleteExpense, editExpense, disableEdit } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Moeda de Pagamento</th>
            <th>Valor</th>
            <th>Câmbio utilizado</th>
            <th>Moeda de conversão</th>
            <th>Valor convertido</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.sort((a, b) => {
            if (a.id > b.id) {
              return '1';
            }
            if (a.id < b.id) {
              return '-1';
            }
            return '0';
          }).map((expense) => {
            const currencyAbbrev = Object.values(expense.exchangeRates)
              .find((object) => object.code === expense.currency);
            return (
              <tr key={ expense.description }>
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
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    disabled={ disableEdit }
                    onClick={ () => { editExpense(expense, currencyAbbrev.ask); } }
                  >
                    Editar despesa
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => { deleteExpense(expense, currencyAbbrev.ask); } }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  deleteExpense: PropTypes.func,
  disableEdit: PropTypes.bool,
  editExpense: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  disableEdit: state.wallet.editor,
  editExpense: state.wallet.idToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expense, ask) => dispatch(deleteExpenseBtn(expense, ask)),
  editExpense: (expense, ask) => dispatch(editExpenses(expense, ask)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
