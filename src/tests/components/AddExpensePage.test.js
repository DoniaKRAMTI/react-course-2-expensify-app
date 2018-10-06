import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';
import {configure} from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
