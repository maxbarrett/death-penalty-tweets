import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TweetsApp from '../components/TweetsApp';

const shallowRenderer = TestUtils.createRenderer();

const defaultProps = {
    
};

QUnit.module('TweetsApp');

QUnit.test('the TweetsApp shallow render', function(assert) {
    shallowRenderer.render(<TweetsApp {...defaultProps} />);
    const component = shallowRenderer.getRenderOutput();
    assert.ok(true, 'truth bomb!');
});

