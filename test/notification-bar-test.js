import React from 'react';
import TestUtils from 'react-addons-test-utils';
import NotificationBar from '../components/NotificationBar';

const shallowRenderer = TestUtils.createRenderer();

QUnit.module('NotificationBar');

QUnit.test('the NotificationBar class with 0 count', assert => {
    shallowRenderer.render(<NotificationBar count={0} />);
    const component = shallowRenderer.getRenderOutput();

    assert.ok(component.props.className === 'notification-bar', 'expected class to be \'notification-bar\'');
});

QUnit.test('the NotificationBar class with 1 count', assert => {
    shallowRenderer.render(<NotificationBar count={1} />);
    const component = shallowRenderer.getRenderOutput();

    assert.ok(component.props.className === 'notification-bar active', 'expected class to be \'notification-bar\'');
});
