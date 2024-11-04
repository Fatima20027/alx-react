import { NotificationItem } from './NotificationItem';
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem.test',  () => {
  it('rendering of the component works without crashing', () => {
    const component = shallow(<NotificationItem />);
    expect(component).toBeDEfined();
  });

  it('passing dummy type and value props, it renders the correct html', () =>{
    const component = shallow(<NotificationItem type="default" value="test" />);
    const li = component.find('li')
    expect(li).toHaveLength(1);
    expect(text()).toEqual('test');
    expect(li.prop('data-notification-type')).toEqual('default');
  });

  it('passing a dummy html prop, it renders the correct html', () => {
    const component = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>);
    expect(component).toBeDEfined();
  });

});
