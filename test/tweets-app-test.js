const React = require('react');
const TestUtils = require('react-addons-test-utils');
const shallowRenderer = TestUtils.createRenderer();
const TweetsApp = require('../components/TweetsApp');

const defaultProps = {
    
};

QUnit.test('the TweetsApp shallow render', function(assert) {
    shallowRenderer.render(<TweetsApp {...defaultProps} />);
    const component = shallowRenderer.getRenderOutput();
    assert.ok(true, 'truth bomb!');
});

