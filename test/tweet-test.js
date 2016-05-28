import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { findWithClass, findAllWithType, isDOMComponent } from 'react-shallow-testutils';
import Tweet from '../components/Tweet';

const shallowRenderer = TestUtils.createRenderer();

const defaultProps = {
    tweet: {
        twid_str: '12345',
        active: true,
        screenname: 'foo',
        author: 'bar',
        body: 'howdy doo',
        avatar: 'http://lorempixel.com/50/50',
    },
};

QUnit.module('Tweet');

QUnit.test('the active Tweet class', assert => {
    const component = shallowRenderer.render(<Tweet {...defaultProps} />);

    assert.equal(component.props.className, 'tweet active', 'expected class to be \'tweet active\'');
});

QUnit.test('it is a dom element', assert => {
    const component = shallowRenderer.render(<Tweet {...defaultProps} />);

    assert.ok(isDOMComponent(component), 'expected Tweet to be a dom element');
});

QUnit.test('the inactive Tweet class', assert => {
    const newProps = {
        ...defaultProps,
        tweet: {
            ...defaultProps.tweet,
            active: false,
        },
    };
    const component = shallowRenderer.render(<Tweet {...newProps} />);

    assert.equal(component.props.className, 'tweet', 'expected class to be \'tweet\'');
});

QUnit.test('the Tweet key', assert => {
    const component = shallowRenderer.render(<Tweet {...defaultProps} />);

    assert.equal(component.key, '12345', 'expected class to be \'tweet\'');
});

QUnit.test('the number of images', assert => {
    const component = shallowRenderer.render(<Tweet {...defaultProps} />);

    assert.equal(findAllWithType(component, 'img').length, 1, 'expected 1 img');
});

QUnit.test('the avatar', assert => {
    const component = shallowRenderer.render(<Tweet {...defaultProps} />);

    assert.ok(findWithClass(component, 'avatar'), 'expected 1 avatar');
});


QUnit.test('the number of blockquotes', assert => {
    const component = shallowRenderer.render(<Tweet {...defaultProps} />);

    assert.equal(findAllWithType(component, 'blockquote').length, 1, 'expected 1 blockquote');
});

QUnit.test('the number of links', assert => {
    const component = shallowRenderer.render(<Tweet {...defaultProps} />);

    assert.equal(findAllWithType(component, 'a').length, 1, 'expected 1 link');
});

QUnit.test('the number of screennames', assert => {
    const component = shallowRenderer.render(<Tweet {...defaultProps} />);

    assert.ok(findWithClass(component, 'screen-name'), 'expected screenname');
});

QUnit.test('the content', assert => {
    const component = shallowRenderer.render(<Tweet {...defaultProps} />);

    assert.ok(findWithClass(component, 'content'), 'expected 1 content class');
});


