import React from 'react';
import { shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';
import {configure} from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('should render ExpenseListItem correctly', ()=> {
    const wrapper = shallow (<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});