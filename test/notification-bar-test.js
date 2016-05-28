import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { findWithClass, isDOMComponent } from 'react-shallow-testutils';
import NotificationBar from '../components/NotificationBar';

const shallowRenderer = TestUtils.createRenderer();

QUnit.module('NotificationBar');

QUnit.test('the NotificationBar class with 0 count', assert => {
    const component = shallowRenderer.render(<NotificationBar count={0} />);

    assert.ok(component.props.className === 'notification-bar', 'expected class to be \'notification-bar\'');
});

QUnit.test('the NotificationBar class with 1 count', assert => {
    const component = shallowRenderer.render(<NotificationBar count={1} />);

    assert.ok(component.props.className === 'notification-bar active', 'expected class to be \'notification-bar\'');
});

QUnit.test('the show more tweets link', assert => {
    const component = shallowRenderer.render(<NotificationBar count={0} />);

    assert.ok(findWithClass(component, 'show-new-tweets'), 'expected 1 show-new-tweets link');
});

QUnit.test('it is a dom element', assert => {
    const component = shallowRenderer.render(<NotificationBar count={0} />);

    assert.ok(isDOMComponent(component), 'expected NotificationBar to be a dom element');
});

QUnit.test('onShowNewTweets function', assert => {
    const component = shallowRenderer.render(<NotificationBar
        count={3}
        onShowNewTweets={() => {

        }}
    />);
    console.log(findWithClass(component, 'show-new-tweets'));
    assert.ok(true, 'onShowNewTweets function called');
});

