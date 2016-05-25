import React from 'react';
import TestUtils from 'react-addons-test-utils';
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
    shallowRenderer.render(<Tweet {...defaultProps} />);
    const component = shallowRenderer.getRenderOutput();
    assert.equal(component.props.className, 'tweet active', 'expected class to be \'tweet active\'');
});

QUnit.test('the inactive Tweet class', assert => {
    const newProps = {
        ...defaultProps,
        tweet: {
            ...defaultProps.tweet,
            active: false,
        },
    };
    shallowRenderer.render(<Tweet {...newProps} />);
    const component = shallowRenderer.getRenderOutput();
    assert.equal(component.props.className, 'tweet', 'expected class to be \'tweet\'');
});
