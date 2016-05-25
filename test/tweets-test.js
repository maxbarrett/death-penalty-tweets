import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { findWithClass, findAllWithType, isDOMComponent } from 'react-shallow-testutils';
import Tweet from '../components/Tweet';
import Tweets from '../components/Tweets';

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
        {
            twid_str: '678910',
            active: true,
            screenname: 'baz',
            author: 'Mrs Baz',
            body: 'The rain in Spain',
            avatar: 'http://lorempixel.com/50/50',
        },
    ],
};

QUnit.module('Tweets');

QUnit.test('the Tweets list exists', assert => {
    const component = shallowRenderer.render(<Tweets {...defaultProps} />);

    assert.ok(findWithClass(component, 'tweets'), 'expected 1 \'tweets\' class');
});

QUnit.test('the Tweets list has 3 Tweets', assert => {
    const component = shallowRenderer.render(<Tweets {...defaultProps} />);

    assert.equal(findAllWithType(component, Tweet).length, 3, 'expected 3 \'Tweet\' items');
});

QUnit.test('the Tweets list is a \'ul\'', assert => {
    const component = shallowRenderer.render(<Tweets {...defaultProps} />);

    assert.ok(component.type === 'ul', 'expected tweets type to be \'ul\'');
});

QUnit.test('the Tweets list is a dom component', assert => {
    const component = shallowRenderer.render(<Tweets {...defaultProps} />);

    assert.ok(isDOMComponent(component), 'expected a dom component');
});
