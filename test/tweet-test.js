const React = require('react');
const TestUtils = require('react-addons-test-utils');
const shallowRenderer = TestUtils.createRenderer();
const Tweet = require('../components/Tweet');

const defaultProps = {
    tweet: {
        twid_str: '12345',
        active: true,
        screenname: 'foo',
        author: 'bar',
        body: 'howdy doo',
        avatar: 'lorem/pixel',
    },
};

QUnit.test('the Tweet shallow render', function(assert) {
    shallowRenderer.render(<Tweet {...defaultProps} />);
    const component = shallowRenderer.getRenderOutput();
    assert.equal(component.props.className, 'tweet active', 'expected class to be tweet active');
});

