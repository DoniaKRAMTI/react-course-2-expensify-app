import React from 'react';
import { shallow } from 'enzyme';
import {LoginPage} from '../../components/LoginPage';
import {configure} from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });




test('should correctly render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
