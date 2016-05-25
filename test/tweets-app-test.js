import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { findWithClass, findAllWithType, isDOMComponent } from 'react-shallow-testutils';
import Tweets from '../components/Tweets';
import TweetsApp from '../components/TweetsApp';

const shallowRenderer = TestUtils.createRenderer();
const defaultProps = {
    tweets: [
        {
            twid_str: '12345',
            active: true,
            screenname: 'foo',
            author: 'Mr Foo',
            body: 'Lorem ipsum',
            avatar: 'http://lorempixel.com/50/50',
        },
        {
            twid_str: '98765',
            active: true,
            screenname: 'bar',
            author: 'Miss Bar',
            body: 'Quick brown fox',
            avatar: 'http://lorempixel.com/50/50',
        },
    ],
};

QUnit.module('TweetsApp');

QUnit.test('the TweetsApp shallow render', assert => {
    const component = shallowRenderer.render(<TweetsApp {...defaultProps} />);

    assert.ok(findWithClass(component, 'tweets-app'), 'expected 1 \'tweets-app\' element');
});

QUnit.test('the TweetsApp shallow render', assert => {
    const component = shallowRenderer.render(<TweetsApp {...defaultProps} />);

    assert.equal(findAllWithType(component, Tweets).length, 1, 'expected 1 \'Tweets\' list');
});

QUnit.test('the TweetsApp shallow render', assert => {
    const component = shallowRenderer.render(<TweetsApp {...defaultProps} />);

    assert.ok(component.type === 'div', 'expected component type to be \'div\'');
});

QUnit.test('the TweetsApp shallow render', assert => {
    const component = shallowRenderer.render(<TweetsApp {...defaultProps} />);

    assert.ok(isDOMComponent(component), 'expected a dom component');
});

QUnit.test('the TweetsApp shallow render', assert => {
    const component = shallowRenderer.render(<TweetsApp {...defaultProps} />);

    assert.ok(true, 'truth bomb!');
});
